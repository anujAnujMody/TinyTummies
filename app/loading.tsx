export default function Loading() {
  return (
    <div className="min-h-screen bg-clay-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-clay-green-700 border-t-transparent rounded-full animate-spin" />
        <p className="font-display text-clay-green-700">Loading Tiny Tummies...</p>
      </div>
    </div>
  );
}