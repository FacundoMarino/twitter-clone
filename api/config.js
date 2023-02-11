export const getNews = async () => {
  const url = `http://api.mediastack.com/v1/news?access_key=363e270aad04170ab71f5f08a6c51faf&keywords=tech&countries=us,gb,de&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const news = data.map((item) => ({
    author: item.author,
    title: item.title,
    published_at: item.published_at,
  }));

  return news;
};
