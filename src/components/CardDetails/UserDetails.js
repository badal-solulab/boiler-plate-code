import React from "react";
import Close from "../../assets/images/close.png"
import "./userdetails.css"

const UserDetails = ({title,setImageDesc,content}) => {
  return (
    <div className="modal_custom" >
        <img src={Close} alt="close" className="closeicon" onClick={()=>{setImageDesc(false)}}/>
      <div>
        <div className="d-flex">
          <h1 className="ml-2 modal-title">{title}</h1>
        </div>
        <div className="d-flex">
          <p className="modal-desc">{content}</p>
        </div>
     
      </div>
    </div>
  );
};

export default UserDetails;
