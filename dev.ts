// Spawns Tailwind CSS watcher and the dev server in parallel
const tw = Bun.spawn(
  [
    "bunx",
    "tailwindcss",
    "-i",
    "./src/styles/global.css",
    "-o",
    "./public/styles.css",
    "--watch",
  ],
  { stdout: "inherit", stderr: "inherit" }
);

// Start the dev server in the same process
await import("./server.ts");

process.on("exit", () => tw.kill());
process.on("SIGINT", () => {
  tw.kill();
  process.exit(0);
});
