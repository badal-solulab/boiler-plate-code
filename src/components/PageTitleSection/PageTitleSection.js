import React from "react";
import "./pagetitle.css";

const PageTitleSection = ({ showYear,showTitle }) => {
  return (
    <div className="collection-grand-cru">
      <hr className="hr-border" />
      <p className="mb-0 grandcru-desc">
        {showYear}
        <p className="grandcru-title secondary-text">{showTitle}</p>
      </p>
      <hr className="hr-border" />
    </div>
  );
};

export default PageTitleSection;
