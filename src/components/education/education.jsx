import React from "react";
import "./education.scss";

const Education = (props) => {
  const { data } = props;

  return (
    <div className="education-container" id="EducationComponent">
      <h3 className="education-sub-title">Education</h3>
      <p className="education-description">
        {data.schools
          ? `${data.schools[0].schoolName} ${data.schools[0].period}`
          : ""}
      </p>
      <p className="education-description">
        {data.schools ? `${data.schools[0].degree}` : ""}
      </p>
    </div>
  );
};

export { Education };
