export type ContentKind = "movie" | "series" | "episode";

export interface HealthResponse {
  status: "ok";
  service: "lantern-api";
  timestamp: string;
}

export interface LanguageTrack {
  languageTag: string;
  label: string;
  kind: "audio" | "subtitle";
}

export function isContentKind(value: unknown): value is ContentKind {
  return value === "movie" || value === "series" || value === "episode";
}
