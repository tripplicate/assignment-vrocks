export type User = {
  id: number,
  name: string,
};

export type Article = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User,
};
