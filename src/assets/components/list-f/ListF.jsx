import React, { useEffect, useContext, useState } from "react";
import "./ListF.css";
import { GlobalContext } from "../../../context/GlobalState";
import ComponentNews from "./component-news/ComponentNews";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ListF = () => {
  const { news, getNews } = useContext(GlobalContext);

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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
      <div style={{ height: "400px", width: "600px" }}>
        <Carousel fade>
          {news &&
            news.map((piece, idx) => (
              <Carousel.Item
                style={{ height: "400px", width: "600px" }}
                key={idx}
              >
                <ComponentNews data={piece} />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default ListF;
