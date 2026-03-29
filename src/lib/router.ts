import type { RouteConfig } from "./types";

export const routes: RouteConfig[] = [
  {
    path: "/",
    outputFile: "index.html",
    importFn: () => import("../pages/index"),
  },
  {
    path: "/arsenal",
    outputFile: "arsenal/index.html",
    importFn: () => import("../pages/arsenal/index"),
  },
  {
    path: "/experience",
    outputFile: "experience/index.html",
    importFn: () => import("../pages/experience/index"),
  },
  {
    path: "/pulse",
    outputFile: "pulse/index.html",
    importFn: () => import("../pages/pulse/index"),
  },
];
