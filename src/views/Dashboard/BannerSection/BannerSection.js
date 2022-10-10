import React from "react";
import { BANNER_IMAGE } from "../../../assets/images";
import BUYPASS from "../../../assets/images/buypass.svg";
import "./bannersection.css";
const BannerSection = () => {
  return (
    <>
      <div className="bottle_wrapper">
        <div className="bottle_img">
          <img src={BANNER_IMAGE} alt="bottle" className="bottle"/>
          <div className="buypassWrapper">
            <div>
              <img src={BUYPASS} alt="buypass" className="buypass"/>
            </div>
            <div>
                <p className="primary-text ml_10">BUY PASS</p>
            </div>
          </div>
        </div>
        <div className="liner_wrapper">
               <div className="linerbox"></div> 
        </div>
      </div>
    </>
  );
};

export default BannerSection;
