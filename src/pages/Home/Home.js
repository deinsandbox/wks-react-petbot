import React from "react";
import Fade from "react-reveal/Fade";
import Cat from "./components/Cat/Cat.jsx";
import "./Home.css";

const Home = ({ history }) => {
  return (
    <div className="home-petbot-container">
      <div className="home-petbot-content">
        <Cat history={history} />
        <div className="home-petbot-greeting">
          <Fade opposite>
            <h1>¡Hola Humano!</h1>
          </Fade>
          <Fade opposite>
            <span>¿Querés charlar?</span>
            <span>Clic para comenzar</span>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
