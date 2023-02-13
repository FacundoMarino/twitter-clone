export const getNews = async () => {
  let url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    `pageSize=${5}&` +
    "apiKey=3ba1e4999fd94b5983cd5c34e271f6bc";
  const resp = await fetch(url);
  const { articles } = await resp.json();

  const news = articles?.map((item) => ({
    author: item.author,
    title: item.title,
    id: item.source.id,
  }));

  return news;
};
