import React from "react";
import Fade from "react-reveal/Fade";
import Pet from "./components/Pet/Pet.jsx";
import "./Home.css";

const Home = ({ history }) => {
  return (
    <div className="home-petbot-container">
      <div className="home-petbot-content">
        <div className="home-petbot-greeting">
          <Fade opposite>
            <h1> Hello Human! </h1>
          </Fade>

          <div className="home-petbot-image">
            <Pet history={history} />
          </div>

          <Fade opposite>
            <span> We come in peace</span> <span> Wanna talk with me? </span>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
