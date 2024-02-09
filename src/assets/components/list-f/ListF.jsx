import React, { useEffect, useContext } from "react";
import "./ListF.css";
import { GlobalContext } from "../../../context/GlobalState";
// import ComponentNews from "./component-news/ComponentNews";

const ListF = () => {
  const { news, getNews } = useContext(GlobalContext);

  // let newsStorageRetrieved =
  //   JSON.parse(localStorage.getItem("newsCollection")) || [];

  useEffect(() => {
    getNews();
  }, []);

  return (
    news &&
    news.map((piece) => (
      <div key={piece.id}>
        <h2>{piece.abstract}</h2>
      </div>
    ))
  );
};

export default ListF;
