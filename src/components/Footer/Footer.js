import React from "react";
import { BANNER_ICON } from "../../assets/images";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_section">
          <img src={BANNER_ICON} alt="icon" className="icon_footer" />
          <div className="footer_first_links">
            <a href="#">SOIGNER</a>
            <a href="#">License</a>
          </div>
          <div className="footer_second_links">
            <a href="#">About</a>
            <a href="#">Collection</a>
            <a href="#">Help</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="copyright_section">
            <p> &#169; 2021 - All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
