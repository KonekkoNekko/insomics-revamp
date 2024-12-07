export interface MangaDetailProps {
  id: string;
  title: string;
  status: string;
  thumb: string;
  summary: string;
  authors: string[];
  genres: string[];
  total_chapter: number;
}

export interface ItemChaptersProps {
  id: string;
  manga: string;
  title: string;
}

export interface ChapterImagesProps {
  id: string;
  chapter: string;
  index: number;
  link: string;
}

export interface LandscapeCardProps {
  id: string;
  title: string;
  sub_title: string; // Add `sub_title` to match `searchDummy`
  status: string;
  thumb: string;
  summary: string;
  authors: string[];
  genres: string[];
  nsfw: boolean;
  type: string;
  total_chapter: number;
  create_at: number;
  update_at: number;
}
