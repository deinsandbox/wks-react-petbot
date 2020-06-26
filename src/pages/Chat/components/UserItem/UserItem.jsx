import React from "react";
import "./UserItem.css";

import Lottie from "react-lottie";
import UserAvatar from "../../../../assets/images/avatar/22807-people-morph-flow.json";

const UserItem = ({ text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: UserAvatar,
  };

  return (
    <div className="user-item-container">
      <div className="user-item-message">
        {text.map((msg, index) => {
          return <span key={index}> {msg} </span>;
        })}
      </div>
      <div className="user-item-avatar">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default UserItem;
