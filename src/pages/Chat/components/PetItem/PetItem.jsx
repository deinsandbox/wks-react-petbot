import React from "react";
import "./PetItem.css";

import PetAvatar from "../../../../assets/images/pet-avatar.png";

const PetItem = ({ text }) => {
  return (
    <div className="pet-item-container">
      <img src={PetAvatar} alt="pet avatar" />
      <div className="pet-item-message">
        {text.map((msg, index) => {
          return <span key={index}> {msg} </span>;
        })}
      </div>
    </div>
  );
};

export default PetItem;
