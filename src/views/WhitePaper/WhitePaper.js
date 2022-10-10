import React from "react";
import { Carousel } from "react-responsive-carousel";
import Header from "../../components/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Dashboard/dashboard.css";
import "./whitepaper.css"

const WhitePaper = () => {
  const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <div className="">
          <Carousel
            showArrows
            showStatus
            showThumbs={false}
            showIndicators={false}
          >
            <div className="slider-content">{desc}</div>
            <div className="slider-content">{desc}</div>
            <div className="slider-content">{desc}</div>
          
          </Carousel>
          
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
