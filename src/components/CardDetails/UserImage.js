import React from "react";
import "./userdetails.css";

const UserImage = ({ imageSrc, setImageDesc,title,exp,position }) => {
  return (
    <div className="position-relative">
      <div>
        <img
          alt="user"
          src={imageSrc}
          className="user_image"
          onClick={() => {
            setImageDesc(false);
          }}
        />
      </div>
      <div className="user_details mt-2 detailed-image" >
        <p className="mb-0 ">{title}</p>
        <p className="">
          <span className="user_position"> {exp}</span> |{" "}
          <span className="user_position"> {position} </span>
        </p>
      </div>
    </div>
  );
};

export default UserImage;
