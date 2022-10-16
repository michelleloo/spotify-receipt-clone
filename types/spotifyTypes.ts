export interface Artist {
  id: string;
  name: string;
  images?: [Image];
  followers?: {
    total: number;
  };
  genres?: [string];
}
export interface Image {
    height: number;
    width: number;
    url: string;
}
export interface Track {
    id: string;
    name: string;
    artists: [Artist];
    album: Album;
    duration_ms: number;
    explicit: boolean;
    popularity: number;
    preview_url: string;
}
export interface Album {
  id: string;
  name: string;
  artists: [Artist];
  images?: [Image];
  album_type?: string;
  release_date?: string;
  tracks?: {
    total: number;
    items: Track[];
  };
}