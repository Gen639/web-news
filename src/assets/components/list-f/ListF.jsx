import React, { useEffect, useContext, useState } from "react";
import "./ListF.css";
import { GlobalContext } from "../../../context/GlobalState";
import ComponentNews from "./component-news/ComponentNews";
import { Carousel } from "react-bootstrap";

const ListF = () => {
  const { news, getNews } = useContext(GlobalContext);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {/* <div className="main-container">
        {news &&
          news.map((piece, idx) => (
            <ComponentNews key={idx} data={piece} />
          ))}
      </div> */}
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {news &&
          news.map((piece, idx) => (
            <Carousel.Item key={idx}>
              <ComponentNews data={piece} />
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default ListF;
