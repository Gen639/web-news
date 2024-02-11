import React from "react";
import "./ComponentNews.css";

const ComponentNews = (props) => {
  console.log("Data in ComponentNews:", props.data);

  const imageUrl =
    props.data.multimedia && props.data.multimedia.length
      ? `https://www.nytimes.com/${props.data.multimedia[0].url}`
      : "";

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="div-container background-image"
      style={backgroundImageStyle}
    >
      <h3 style={{ color: "whitesmoke" }}>{props.data.headline.main}</h3>
      <p>{props.data.abstract}</p>
    </div>
  );
};

export default ComponentNews;
