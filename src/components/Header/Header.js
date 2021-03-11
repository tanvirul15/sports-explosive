import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div id="header">
      <div id="header__banner">
        <img src={require("../../image/banner.jpg").default} alt="" />
      </div>
      {props.heading && <h1 id="primary-heading">Sports Explosive</h1>}
      {props.logo && <img id="heading__image" src={require(`../../image/image-8.png`).default} alt="Logo" />}
    </div>
  );
};

export default Header;
