import React from "react";
import "./UserItem.css";

import UserAvatar from "../../../../assets/images/user-avatar.png";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-message">
        {text.map((msg, index) => {
          return <span key={index}> {msg} </span>;
        })}
      </div>
      <img src={UserAvatar} alt="user avatar" />
    </div>
  );
};

export default UserItem;
