import { getNews } from "@/api/config";
import { useEffect, useState } from "react";

export const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((item) => setNews(item));
  }, []);

  return {
    news,
  };
};
