import React from "react";
import "./experience.scss";

const Experience = (props) => {
  const { data } = props;

  return (
    <div className="experience-container">
      <div className="experience-column-container">
        <h1 className="experience-work-title">Work experience</h1>
        <div className="experience-list">
          <ul>
            {data.works
              ? data.works.map((work, idx) => {
                  return (
                    <li key={idx}>
                      <p>{`${work.companyName} ${work.period}`}</p>
                      {work.role.map((role, idx) => {
                        return (
                          <p key={idx}>{`${role.name}. ${role.details}`}</p>
                        );
                      })}
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
      <div className="experience-column-container">
        <h3 className="experience-sub-title">Skills</h3>
        <ul className="experience-list ">
          {data.skills
            ? data.skills.map((skill, idx) => {
                return <li key={idx}>{skill}</li>;
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};

export { Experience };
