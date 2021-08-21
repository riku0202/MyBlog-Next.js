export type BlogList = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: JSX.Element;
  image: { url: string; height: number; width: number };
};
