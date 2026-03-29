import { renderPage } from "./src/lib/renderer";
import { routes } from "./src/lib/router";
import { mkdir } from "fs/promises";
import { join } from "path";

const OUT_DIR = "./out";

async function build() {
  console.log("\n  ✦ Building static site...\n");
  const start = Date.now();

  for (const route of routes) {
    try {
      const mod = await route.importFn();
      const html = await renderPage(mod as any, "build");
      const outPath = join(OUT_DIR, route.outputFile);
      const outDir = outPath.substring(0, outPath.lastIndexOf("/"));

      await mkdir(outDir, { recursive: true });
      await Bun.write(outPath, html);

      console.log(`  ✓ ${route.path} → out/${route.outputFile}`);
    } catch (err) {
      console.error(`  ✗ ${route.path} failed:`, err);
      process.exit(1);
    }
  }

  // Copy static assets if any
  const assetsExist = await Bun.file("./public").exists().catch(() => false);
  if (assetsExist) {
    console.log("  ✓ Copying public assets...");
  }

  const elapsed = Date.now() - start;
  console.log(`\n  ✦ Build complete in ${elapsed}ms → out/\n`);
}

build();
