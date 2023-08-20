/**
 * 投稿
 */
export type Post = {
  id: string;
  title: string;
  image: string;
  category: string;
  tags: string[];
  public: boolean;
  body: string;
  postDate: string;
  updateDate?: string;
};
