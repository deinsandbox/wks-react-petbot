import React from "react";
import Fade from "react-reveal/Fade";
import "./Select.css";

const Select = ({ petQuestions, handleSelectedOption }) => {
  return (
    <Fade left>
      <div className="selector-content">
        <div className="selector-container">
          {Object.entries(petQuestions).map(([key, value]) => {
            return (
              <span onClick={(event) => handleSelectedOption(key)} key={key}>
                {value}
              </span>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Select;
