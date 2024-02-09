import React, { useEffect, useContext } from "react";
import "./ListF.css";
import { GlobalContext } from "../../../context/GlobalState";
import ComponentNews from "./component-news/ComponentNews";
// import ComponentNews from "./component-news/ComponentNews";

const ListF = () => {
  const { news, getNews } = useContext(GlobalContext);

  // let newsStorageRetrieved =
  //   JSON.parse(localStorage.getItem("newsCollection")) || [];

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="main-container">
      {news &&
        news.map((piece, index) => <ComponentNews key={index} data={piece} />)}
    </div>
  );
};

export default ListF;
