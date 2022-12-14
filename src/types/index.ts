export type Threads = Posts[];

export interface Posts {
  posts: Post[];
}

export interface Post {
  no: number;
  now: string;
  name: string;
  com?: string;
  filename?: string;
  ext?: string;
  w?: number;
  h?: number;
  tn_w?: number;
  tn_h?: number;
  tim?: number;
  time: number;
  md5?: string;
  fsize?: number;
  resto: number;
  bumplimit?: number;
  imagelimit?: number;
  semantic_url?: string;
  replies?: number;
  images?: number;
  omitted_posts?: number;
  omitted_images?: number;
  sub?: string;
}
