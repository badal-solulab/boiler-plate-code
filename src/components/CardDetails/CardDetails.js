import React, { useEffect, useRef } from "react";
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
  content,
}) => {
  const wrapperRef = useRef(null);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setImageDesc(false);
    }
  };
  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  return (
    <div className="custom-wrapper slide-in-right  " ref={wrapperRef}>
      <UserImage
        imageSrc={imageSrc}
        title={title}
        setImageDesc={setImageDesc}
        exp={exp}
        position={position}
      />
      <UserDetails
        title={modalTitle}
        setImageDesc={setImageDesc}
        content={content}
      />
    </div>
  );
};

export default CardDetails;
