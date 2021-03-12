import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = (props) => {
  const { banner, logo } = props;

  return (
    <div id='header'>
      <div id='header__banner'>{banner === undefined || banner === null ? <img src={require("../../image/banner.jpg").default} alt='' /> : <img src={props.banner} alt='' />}</div>
      {logo === undefined || logo === null ? <h1 id='primary-heading'>Sports Explosive</h1> : <img id='heading__image' src={logo} alt='Logo' />}
    </div>
  );
};

export default Header;
