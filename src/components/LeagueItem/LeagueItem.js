import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link, BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import "./LeagueItem.css";

const LeagueItem = (props) => {
  const { idLeague, strLeague, strSport } = props.league;
  const imgUrl = `../../image/logo/image-${props.image}.png`;
  // const currentPath = useRouteMatch();
  // console.log(currentPath);
  return (
    <Col sm="4">
      <Router>
        <div id="league__item">
          <img src={require(`../../image/logo/image-${props.image}.png`).default} alt="" />
          <h5>{strLeague}</h5>
          <h6> {strSport}</h6>
          <Link to={"/league/"}>
            <Button>Explore</Button>
          </Link>
        </div>
      </Router>
    </Col>
  );
};

export default LeagueItem;
