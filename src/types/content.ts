export type ContentList = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  image: { url: string; height: number; width: number };
};
