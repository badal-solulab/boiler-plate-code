import React from "react";
import { GRANDCRU } from "../../assets/images";
import Header from "../../components/Header/Header";
import "../Dashboard/dashboard.css";
import "./collection.css";

const Collection = () => {
  return (
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <div className="collection-wrapper">
          <div className="collection-grand-cru">
            <hr className="hr-border" />
            <p className="mb-0 grandcru-desc">
              2022
              <p className="grandcru-title secondary-text">
                Grand Cru collection
              </p>
            </p>
            <hr className="hr-border" />
          </div>
          <p className="grandcru-content">
            The Grand Cru 2022 Collection will feature wines from Napa,
            Bordeaux, and Burgundy ranginig from the years 1955-1999
          </p>
          <div className="grandcru-section">
            <img alt="GRANDCRU" src={GRANDCRU} />
            <button className="secondary-btn">MINT PASS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
