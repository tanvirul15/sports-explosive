import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link, BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import "./LeagueItem.css";

const LeagueItem = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const imgUrl = `../../image/logo/image-${props.image}.png`;
  const { url } = useRouteMatch();
  // console.log(currentPath);
  return (
    <Router>
      <Col sm="4">
        <div id="league__item">
          <img src={require(`../../image/logo/image-${props.image}.png`).default} alt="" />
          <h5>{strLeague}</h5>
          <h6> {strSport}</h6>

          <a className="btn btn-primary" href="/about">
            About Us
          </a>
        </div>
      </Col>
    </Router>
  );
};

export default LeagueItem;
