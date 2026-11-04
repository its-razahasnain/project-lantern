export type MediaItem = {
  id: string;
  title: string;
  type: "Movie" | "Series";
  year: number;
  maturity: string;
  genres: string[];
  languages: string[];
  description: string;
  artwork: string;
  artworkPosition?: string;
  featured?: boolean;
};

/**
 * Fictional design fixtures only. Replace with rights-cleared catalogue data
 * from the API before any public content launch.
 */
export const featuredTitle: MediaItem = {
  id: "the-last-orbit",
  title: "The Last Orbit",
  type: "Movie",
  year: 2026,
  maturity: "13+",
  genres: ["Science Fiction", "Adventure"],
  languages: ["English", "Hindi"],
  description:
    "At the edge of a distant solar system, one unexpected signal changes the course of a mission — and the lives of everyone aboard.",
  artwork: "artwork-orbit",
  featured: true,
};

export const trendingTitles: MediaItem[] = [
  {
    id: "blue-hour",
    title: "Blue Hour",
    type: "Series",
    year: 2026,
    maturity: "16+",
    genres: ["Drama", "Mystery"],
    languages: ["English", "Urdu"],
    description: "A quiet coastal town keeps a secret beneath its calm surface.",
    artwork: "artwork-blue",
  },
  {
    id: "paper-moons",
    title: "Paper Moons",
    type: "Movie",
    year: 2025,
    maturity: "13+",
    genres: ["Drama", "Romance"],
    languages: ["Hindi", "English"],
    description: "Two strangers discover that a small decision can change everything.",
    artwork: "artwork-moons",
  },
  {
    id: "northbound",
    title: "Northbound",
    type: "Series",
    year: 2026,
    maturity: "13+",
    genres: ["Adventure"],
    languages: ["English", "Hindi"],
    description: "A family road trip becomes a journey into the unknown.",
    artwork: "artwork-north",
  },
  {
    id: "quiet-city",
    title: "The Quiet City",
    type: "Movie",
    year: 2024,
    maturity: "16+",
    genres: ["Thriller", "Mystery"],
    languages: ["Urdu", "English"],
    description: "A journalist follows a trail that the city wants forgotten.",
    artwork: "artwork-city",
  },
  {
    id: "afterlight",
    title: "Afterlight",
    type: "Movie",
    year: 2026,
    maturity: "13+",
    genres: ["Science Fiction", "Drama"],
    languages: ["English"],
    description: "A new dawn arrives with an impossible cost.",
    artwork: "artwork-after",
  },
];

export const languageTitles: MediaItem[] = [
  trendingTitles[1],
  trendingTitles[2],
  trendingTitles[3],
  trendingTitles[0],
];
