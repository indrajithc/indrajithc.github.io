import type { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
  extraStyles?: string;
}

export function Layout({ title, children, extraStyles }: LayoutProps) {
  const tailwindColors = {
    "on-background": "#e2e2e2",
    "inverse-primary": "#006c49",
    "on-primary-container": "#00422b",
    "inverse-surface": "#e2e2e2",
    "inverse-on-surface": "#303030",
    "primary-container": "#10b981",
    "on-secondary-container": "#e6ecff",
    secondary: "#adc6ff",
    "on-surface-variant": "#bbcabf",
    "on-primary-fixed-variant": "#005236",
    "on-surface": "#e2e2e2",
    "surface-container-lowest": "#0e0e0e",
    "primary-fixed": "#6ffbbe",
    "on-error": "#690005",
    "tertiary-container": "#fc7c78",
    "on-secondary": "#002e6a",
    "surface-container": "#1f1f1f",
    "on-tertiary-fixed-variant": "#842225",
    tertiary: "#ffb3af",
    "tertiary-fixed-dim": "#ffb3af",
    "tertiary-fixed": "#ffdad7",
    "surface-container-low": "#1b1b1b",
    "surface-container-highest": "#353535",
    "outline-variant": "#3c4a42",
    "error-container": "#93000a",
    "surface-container-high": "#2a2a2a",
    "on-primary-fixed": "#002113",
    "on-secondary-fixed": "#001a42",
    error: "#ffb4ab",
    "on-tertiary-fixed": "#410005",
    "surface-tint": "#4edea3",
    outline: "#86948a",
    surface: "#131313",
    "on-tertiary-container": "#711419",
    background: "#131313",
    "surface-dim": "#131313",
    "primary-fixed-dim": "#4edea3",
    "on-secondary-fixed-variant": "#004395",
    "on-tertiary": "#650911",
    "on-error-container": "#ffdad6",
    "surface-variant": "#353535",
    "on-primary": "#003824",
    "secondary-fixed-dim": "#adc6ff",
    primary: "#4edea3",
    "secondary-fixed": "#d8e2ff",
    "surface-bright": "#393939",
    "secondary-container": "#0566d9",
  };

  const tailwindConfigScript = `tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: ${JSON.stringify(tailwindColors)},
        fontFamily: {
          "headline": ["Space Grotesk"],
          "body": ["Inter"],
          "label": ["Inter"]
        },
        borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
      },
    },
  }`;

  return (
    <html className="dark" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title}</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: tailwindConfigScript }} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body { font-family: 'Inter', sans-serif; min-height: max(884px, 100dvh); }
          .font-headline, .font-space-grotesk { font-family: 'Space Grotesk', sans-serif; }
          .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
          .glass-nav { backdrop-filter: blur(24px); }
          .glass-panel { background: rgba(27,27,27,0.4); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
          .contribution-cell { width: 12px; height: 12px; border-radius: 2px; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #0e0e0e; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #3c4a42; border-radius: 10px; }
          ${extraStyles ?? ""}
        `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
