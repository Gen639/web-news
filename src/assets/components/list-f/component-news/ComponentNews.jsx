import React from "react";
import "./ComponentNews.css";
import { Carousel } from "react-bootstrap";

const ComponentNews = (props) => {
  console.log("Data in ComponentNews:", props.data);

  const imageUrl =
    props.data.multimedia && props.data.multimedia.length
      ? `https://www.nytimes.com/${props.data.multimedia[0].url}`
      : "";

  return (
    <div className="div-container">
      <img className="d-block" src={imageUrl} />{" "}
      <Carousel.Caption>
        <h3>{props.data.headline.main}</h3>
        <p className="caption-p">{props.data.abstract}</p>
      </Carousel.Caption>
    </div>
  );
};

export default ComponentNews;
