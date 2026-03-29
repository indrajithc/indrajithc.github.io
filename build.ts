import { renderPage } from "./src/lib/renderer";
import { routes } from "./src/lib/router";
import { mkdir } from "fs/promises";
import { join } from "path";

const OUT_DIR = "./out";

async function compileCss() {
  await mkdir(OUT_DIR, { recursive: true });
  console.log("  ⟳ Compiling CSS...");
  const proc = Bun.spawn(
    [
      "bunx",
      "tailwindcss",
      "-i",
      "./src/styles/global.css",
      "-o",
      `${OUT_DIR}/styles.css`,
      "--minify",
    ],
    { stdout: "inherit", stderr: "inherit" }
  );
  const code = await proc.exited;
  if (code !== 0) {
    console.error("  ✗ Tailwind CSS compilation failed");
    process.exit(1);
  }
  console.log("  ✓ styles.css");
}

async function build() {
  console.log("\n  ✦ Building static site...\n");
  const start = Date.now();

  await compileCss();

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

  const elapsed = Date.now() - start;
  console.log(`\n  ✦ Build complete in ${elapsed}ms → out/\n`);
}

build();
