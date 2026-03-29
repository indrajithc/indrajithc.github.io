import { renderPage } from "./src/lib/renderer";
import { routes } from "./src/lib/router";
import { watch } from "fs";

const PORT = 3000;
let reloadClients: ReadableStreamDefaultController[] = [];

// Watch src directory for changes
watch("./src", { recursive: true }, () => {
  console.log("[dev] change detected, reloading...");
  reloadClients.forEach((c) => {
    try {
      c.enqueue("data: reload\n\n");
    } catch {}
  });
});

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // SSE endpoint for live reload
    if (pathname === "/__reload") {
      let controller: ReadableStreamDefaultController;
      const stream = new ReadableStream({
        start(c) {
          controller = c;
          reloadClients.push(c);
          c.enqueue(": connected\n\n");
        },
        cancel() {
          reloadClients = reloadClients.filter((c) => c !== controller);
        },
      });
      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    // Also match /arsenal/ → /arsenal
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    const matchedRoute = routes.find((r) => r.path === normalizedPath);

    if (matchedRoute) {
      try {
        // Clear module cache for hot reload (Bun doesn't have require.cache like Node)
        const mod = await matchedRoute.importFn();
        const html = await renderPage(mod as any, "dev");
        return new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      } catch (err) {
        console.error("[dev] render error:", err);
        return new Response(`<pre>Error: ${err}</pre>`, {
          status: 500,
          headers: { "Content-Type": "text/html" },
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`\n  ✦ Dev server running at http://localhost:${PORT}`);
console.log(`  Pages:`);
routes.forEach((r) => console.log(`    → http://localhost:${PORT}${r.path}`));
console.log(`\n  Watching src/ for changes...\n`);
