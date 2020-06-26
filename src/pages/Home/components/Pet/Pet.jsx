import React from "react";
import "./Pet.css";

import Lottie from "react-lottie";
import { asyncRandomPet } from "../../../../data/petImages";

const Pet = ({ history, image }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: asyncRandomPet(),
  };

  const handleOnClick = () => {
    history.push("/chat");
  };

  return (
    <div onClick={handleOnClick} className="cat-container">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Pet;
