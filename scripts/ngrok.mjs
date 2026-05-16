import { spawn } from "child_process";
import net from "net";

const next = spawn("npx", ["serve@latest", "out"], { stdio: "inherit", shell: true });

function waitForPort(port, interval = 500) {
  return new Promise((resolve) => {
    const tryConnect = () => {
      const socket = net.createConnection({ port }, () => {
        socket.end();
        resolve();
      });
      socket.on("error", () => {
        setTimeout(tryConnect, interval);
      });
    };
    tryConnect();
  });
}

await waitForPort(3000);

const ngrok = spawn("ngrok", ["http", "3000"], { stdio: "inherit", shell: true });
ngrok.on("close", (code) => {
  next.kill();
  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  next.kill();
  process.exit(0);
});
