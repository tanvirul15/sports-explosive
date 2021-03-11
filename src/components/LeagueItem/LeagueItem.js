import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./LeagueItem.css";

const LeagueItem = () => {
  return (
    <Col sm='4'>
      <div id='league__item'>
        <img src={require("../../image/image-8.png").default} alt='' />
        <h2>Sample Name</h2>
        <h5>Sample Type</h5>
        <Button>Click Me</Button>
      </div>
    </Col>
  );
};

export default LeagueItem;
