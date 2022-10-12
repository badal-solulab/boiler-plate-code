import React from "react";
import { SEARCH } from "../../assets/images";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Header from "../../components/Header/Header";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import "../Dashboard/dashboard.css";
import "./collection.css";

const Collection = () => {
 
  return (
    <div className="Dashboard_Body">
      <Header />
      <div className="container">
        <div className="collection-wrapper">
          <PageTitleSection showYear="2022" showTitle="Grand Cru Mint Pass"/>
          <p className="grandcru-content mb-40">
            The Grand Cru 2022 Collection will feature wines from Napa,
            Bordeaux, and Burgundy ranginig from the years 1955-1999
          </p>
          <div className="grandcru-section position-relative">
              <img alt="search" src={SEARCH} className="search-icon-input"/>
              <input placeholder="Search by address, winebottle, or region" className="w-100"/>
          </div>
          <div className="cards-container">
            <CollectionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
