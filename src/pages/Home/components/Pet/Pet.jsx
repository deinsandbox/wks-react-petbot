import React from "react";
import "./Pet.css";

import Lottie from "react-lottie";
import { getRandomPet } from "../../../../data/petImages";

const Pet = ({ history, image }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: getRandomPet(),
  };

  const handleOnClick = () => {
    history.push("/chat");
  };

  return (
    <div onClick={handleOnClick} className="pet-container">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Pet;
