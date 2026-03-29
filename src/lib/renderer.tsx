import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import type { PageModule } from "./types";

export async function renderPage(
  mod: PageModule,
  mode: "dev" | "build" = "build"
): Promise<string> {
  const pageData = await mod.getStaticData();
  const html = renderToStaticMarkup(
    createElement(mod.default, pageData as any)
  );

  if (mode === "dev") {
    // Inject SSE live-reload script in dev mode
    const liveReloadScript = `<script>
      (function() {
        const es = new EventSource('/__reload');
        es.onmessage = () => window.location.reload();
        es.onerror = () => { es.close(); setTimeout(() => window.location.reload(), 1000); };
      })();
    </script>`;
    return `<!DOCTYPE html>${html.replace("</body>", liveReloadScript + "</body>")}`;
  }

  return `<!DOCTYPE html>${html}`;
}
