import React from "react";
import "./ComponentNews.css";

const ComponentNews = (props) => {
  console.log("Data in ComponentNews:", props.data);
  return (
    <>
      <div className="div-container">
        <h3>{props.data.headline.main}</h3>
        <p>{props.data.abstract}</p>
      </div>
    </>
  );
};

export default ComponentNews;
