import React from "react";
import "./aboutMe.scss";

const AboutMe = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <div className="aboutMe-card">
      <div className="aboutMe-description-container">
        <h4>{`I’m ${data.name}, but you can just call me Jess.`}</h4>
        <p>{data.description ? `Im ${data.description}` : ""}</p>
        <p>
          I like working on programming websites and finding the best solution
          to problems. I really like studying, learning by myself and
          continually improving my skills
        </p>
      </div>
      <div className="aboutMe-image">
        <img src={require("../../assests/programming.png")} alt="" />
      </div>
    </div>
  );
};

export { AboutMe };
