import React from "react";
import Fade from "react-reveal/Fade";
import "./PetItem.css";

import Lottie from "react-lottie";

const PetItem = ({ text, imagePath, reaction }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reaction,
  };

  return (
    <div className="pet-item-container">
      <div className="pet-item-avatar">
        <Lottie options={defaultOptions} />
      </div>
      <div className="pet-item-message">
        {!imagePath &&
          text.map((message, index) => {
            return (
              <Fade Left>
                <span key={index}> {message} </span>
              </Fade>
            );
          })}
        {imagePath && (
          <Fade Left>
            <img src={imagePath} alt="alien"></img>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default PetItem;
