import React from "react";
import "./PetItem.css";

import Lottie from "react-lottie";

import { petImages } from "../../../../data/petImages";

const PetItem = ({ text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: petImages.Talking,
  };

  return (
    <div className="pet-item-container">
      <div className="pet-item-avatar">
        <Lottie options={defaultOptions} />
      </div>
      <div className="pet-item-message">
        {text.map((msg, index) => {
          return <span key={index}> {msg} </span>;
        })}
      </div>
    </div>
  );
};

export default PetItem;
