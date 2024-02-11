import React from "react";
import "./ComponentNews.css";
import { Carousel } from "react-bootstrap";

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
    <div className="div-container">
      <img className="d-block" src={imageUrl} />{" "}
      <Carousel.Caption>
        <h3 style={{ color: "rgb(0, 38, 255)" }}>{props.data.headline.main}</h3>
        <p>{props.data.abstract}</p>
      </Carousel.Caption>
    </div>
  );
};

export default ComponentNews;
