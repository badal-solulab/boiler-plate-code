import React from "react";
import { STAR, WINE_NEW } from "../../../assets/images";
import "./card.css";


const Card = ({ backgroundImage }) => {
  return (
    <>
      <div className="collection_cards">
        <div
          className="cards_position"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="cards_star_alignment">
            <p className="card_title">GOLD</p>
            <img src={STAR} alt="star" />
          </div>
          <p className="card_content">2008 LOUIS ROEDERER CRISTAL</p>
          <p className="card_value">$52,014</p>
          <img src={WINE_NEW} alt="wine" className="wine_position" />
        </div>
      </div>
    </>
  );
};

export default Card;
