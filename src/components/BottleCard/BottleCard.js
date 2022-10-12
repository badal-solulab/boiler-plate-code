import React from "react";
import Card from "./Card/Card";
import { GREYBG, PURPLEBG, YELLOWBG } from "../../assets/images";
import { Link } from "react-router-dom";
import "./Card/card.css";


const BottleCard = () => {
  return (
    <>
      <div className="bottlewrapper">
        <div className="bottle_cards_box">
          <Card backgroundImage={YELLOWBG} title="Gold"/>
          <Card backgroundImage={PURPLEBG} title="Gold"/>
          <Card backgroundImage={GREYBG} title="Gold"/>
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
