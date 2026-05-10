import { spawn } from "child_process";

const next = spawn("npx", ["next", "start"], { stdio: "inherit", shell: true });

setTimeout(() => {
  const ngrok = spawn("ngrok", ["http", "3000"], { stdio: "inherit", shell: true });
  ngrok.on("close", (code) => {
    next.kill();
    process.exit(code ?? 0);
  });
}, 3000);

process.on("SIGINT", () => {
  next.kill();
  process.exit(0);
});
