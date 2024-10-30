export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
  trailer_url?: string | null;
  sessions?: Session[];
  runtime?: number;
  origin_country?: string;
  director?: string;
}

export interface Session {
  time: string;
  hall: string;
}
