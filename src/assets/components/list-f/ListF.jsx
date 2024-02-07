import React, { useEffect, useState } from "react";
import axios from "axios";

const ListF = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    try {
      const response = await axios.get("here is the api");
      setNews(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>ListF</h2>
      <div></div>
    </div>
  );
};

export default ListF;
