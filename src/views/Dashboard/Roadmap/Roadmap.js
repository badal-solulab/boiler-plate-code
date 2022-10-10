import React from "react";
import "./roadmap.css";
const Roadmap = () => {
  return (
    <>
      <div className="main" id="roadmap">
        <ul>
          <li>
            <div className="icon ">Step 1.</div>
            <div className="progress one">
              <p>1</p>
            </div>
            <p className="text">
              Read our{" "}
              <a href="#" className="step_link">
                whitepaper
              </a>{" "}
              and learn the rules
            </p>
          </li>
          <li>
            <div className="icon ">Step 2.</div>
            <div className="progress two">
              <p>2</p>
            </div>
            <p className="text">
              <a href="#" className="step_link" >
              Earn your whitelist </a> on discord to buy your Grand Cru Pass
            </p>
          </li>
          <li>
            <div className="icon ">Step 3.</div>
            <div className="progress three">
              <p>3</p>
            </div>
            <p className="text">
              Recieve your Grand Cru pass as NFT on December 1st, 2022
            </p>
          </li>
          <li>
            <div className="icon ">Step 4.</div>
            <div className="progress four">
              <p>4</p>
            </div>
            <p className="text">
              Recieve a random bottle ($3000-$50,000) from our collection w/ the
              pass
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Roadmap;
