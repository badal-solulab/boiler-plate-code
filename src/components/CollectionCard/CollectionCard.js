import React from "react";
import { GREY_STAR, YELLOW_STAR, WINE1 } from "../../assets/images";
import { COLLECTION_CARD } from "../../Constant/getCollectionCards";
import "./collectioncard.css";

const CollectionCard = () => {
  return (
    <div>
      <div className="collection-wrapper">
        <div className="collection-bottle-card">
          {COLLECTION_CARD.map((item, id) => {
            return (
              <div className="bottle-wrapper">
                <div className="bottle-box">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="mr-2 platinum-title">{item.title}</div>
                      <img src={GREY_STAR} alt="grey_star" />
                    </div>
                    <div className="d-flex">
                      <img src={YELLOW_STAR} alt="yellow_star" />
                      <div className="ml-2 rp-value">{item.rp}</div>
                    </div>
                  </div>
                  <div>
                    <img alt="wine" src={item.wine} className="centered-wine" />
                  </div>
                </div>
                <div>
                  <p className="wine-description">{item.wine_value}</p>
                  <div className="wine-brand-value">
                    <div className="flex-50">
                      <div className="value-title">MSRP</div>
                      <div className="value">{item.msrp}</div>
                    </div>
                    <div className="flex-50">
                      <div className="value-title">OWNER</div>
                      <div className="owner-name">{item.owner}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
