import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../componenets";
function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem quasi sit error debitis neque adipisci inventore,
            quo ullam ipsum.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="ima main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
