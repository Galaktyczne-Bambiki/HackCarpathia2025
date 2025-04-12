declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_GOOGLE_MAPS_KEY: string;
  readonly NG_APP_GOOGLE_MAP_ID: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
