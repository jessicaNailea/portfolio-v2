import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { ScrollRotate } from "react-scroll-rotate";

import "./iconsMenu.scss";

const NavMenu = (props) => {
  const { items } = props;
  return (
    <nav id="navMenu" className="iconsMenu-navbar iconsMenu-bg-dark">
      <NavLink className="iconsMenu-avatar " to="/home">
        <ScrollRotate>
          <Avatar
            name="hola"
            round={true}
            size={"100"}
            src={require("../../assests/coati.png")}
          />
        </ScrollRotate>
      </NavLink>
      <div className="iconsMenu-options">
        {items.map((item, idx) => {
          return (
            <NavLink
              key={idx}
              className="iconsMenu-item"
              to={item.link}
              activeStyle={{ color: "#189ad3" }}
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export { NavMenu };
