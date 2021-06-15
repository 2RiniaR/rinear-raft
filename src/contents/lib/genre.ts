const ContentGenres = {
  talks: "talks",
  projects: "projects"
} as const;

export type ContentGenre = typeof ContentGenres[keyof typeof ContentGenres];
