import React from "react";
import Card from "./Card/Card";
import { GREYBG, PURPLEBG, YELLOWBG } from "../../assets/images";
import "./Card/card.css";
import { Link } from "react-router-dom";

const BottleCard = () => {
  return (
    <>
      <div className="bottlewrapper">
        <div className="bottle_cards_box">
          <Card backgroundImage={YELLOWBG} />
          <Card backgroundImage={PURPLEBG} />
          <Card backgroundImage={GREYBG} />
        </div>
        <div className="view_all_section">
          <Link to="/collections" className="all_collection_link">
            View Collection
          </Link>
        </div>
      </div>
    </>
  );
};

export default BottleCard;
