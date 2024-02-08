import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListF.css";

const ListF = () => {
  const [news, setNews] = useState([]);
  let newsStorageRetrieved =
    JSON.parse(localStorage.getItem("newsCollection")) || [];

  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=retail&api-key=sWMost9WQwGwn1pHQo9mXGxvksyhUsDu"
      );
      console.log(response);
      const articles = response.data.response.docs;
      console.log(articles, "1. this is the articles array");
      setNews(articles);
      console.log(news, `2. this is the news array`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>ListF</h2>
      <div className="main-container">
        {" "}
        {news.map((piece, index) => (
          <div className="div-container" key={index}>
            <h3>{piece.headline.main}</h3>
            <p>{piece.abstract}</p>
          </div>
        ))}
      </div>
      <div className="main-container">
        {newsStorageRetrieved.map((piece, index) => (
          <div className="div-container" key={index}>
            <h3>{piece.title}</h3>
            <p>{piece.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListF;
