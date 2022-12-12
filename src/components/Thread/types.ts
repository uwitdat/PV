export interface ThreadProps {
  title?: string;
  description?: string;
  numOfPosts: number;
  postDate?: string;
  currentActive?: string;
  setActive: (title: string) => void;
}
