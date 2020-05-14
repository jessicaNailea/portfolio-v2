import React from "react";
import Avatar from "react-avatar";
import "./hero.scss";
import "font-awesome/css/font-awesome.min.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h5 className="hero-hello">Hi, im Jessica!</h5>
        <h4 className="hero-title">Insert great phrase here!</h4>
        <p className="hero-description ">
          Im full-stack developer, i like to work on websites and finding
          solutions.
        </p>
      </div>
      <div className="hero-photo">
        <Avatar
          name="hola"
          round={true}
          size={300}
          src={require("../../../assests/profile.png")}
        />
      </div>
    </div>
  );
};

export { Hero };
