import React from "react";
import UserDetails from "./UserDetails";
import UserImage from "./UserImage";
import "./userdetails.css";

const CardDetails = ({
  imageSrc,
  title,
  setImageDesc,
  exp,
  position,
  modalTitle,
  content
}) => {
  return (
    <div className="custom-wrapper slide-in-right  ">
      <UserImage
        imageSrc={imageSrc}
        title={title}
        setImageDesc={setImageDesc}
        exp={exp}
        position={position}
      />
      <UserDetails title={modalTitle} setImageDesc={setImageDesc} content={content}/>
    </div>
  );
};

export default CardDetails;
