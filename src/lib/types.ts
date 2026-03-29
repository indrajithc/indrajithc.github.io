export interface Translations {
  [key: string]: string;
}

export interface PageData<T = Record<string, unknown>> {
  data: T;
  translations: Translations;
}

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface RouteConfig {
  path: string;
  outputFile: string;
  importFn: () => Promise<PageModule>;
}

export interface PageModule<T = Record<string, unknown>> {
  getStaticData: () => Promise<PageData<T>>;
  default: React.ComponentType<PageData<T>>;
}
