import React, { useState } from "react";
import CardDetails from "../../../components/CardDetails/CardDetails";
import { USER_LIST } from "../../../Constant/getUsers";

import "./usercollection.css";

const UserCollection = () => {
  const [imageDesc, setImageDesc] = useState({
    state: false,
    src: "",
    details: "",
    exp: "",
    position: "",
    modalTitle: "",
    content: "",
  });
  const getUserDetails = (
    imageSrc,
    title,
    exp,
    position,
    modalTitle,
    content
  ) => {
    setImageDesc({
      state: true,
      src: imageSrc,
      details: title,
      exp: exp,
      position: position,
      modalTitle: modalTitle,
      content: content,
    });
  };
  return (
    <div>
      <div className="Collection_wrapper ">
        <div className="collection_box ">
          {imageDesc.state ? (
            <CardDetails
              imageSrc={imageDesc.src}
              title={imageDesc.details}
              exp={imageDesc.exp}
              position={imageDesc.position}
              modalTitle={imageDesc.modalTitle}
              content={imageDesc.content}
              setImageDesc={setImageDesc}
            />
          ) : (
            USER_LIST.map((item) => {
              return (
                <div className="collection_card" key={item.id}>
                  <div className="collection_user">
                    <div
                      onClick={() => {
                        getUserDetails(
                          item.image,
                          item.title,
                          item.exp,
                          item.position,
                          item.modalTitle,
                          item.content
                        );
                      }}
                    >
                      <img alt="user" src={item.image} className="user_image" />
                    </div>
                    <div className="user_details mt-2">
                      <p className="mb-0 ">{item.title}</p>
                      <p className="">
                        <span className="user_position"> {item.exp}</span> |{" "}
                        <span className="user_position"> {item.position} </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCollection;
