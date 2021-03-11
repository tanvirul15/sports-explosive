import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import LeagueItem from "../LeagueItem/LeagueItem";
import "./Home.css";
const Home = () => {
  const [leaguesData, setLeaguesData] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => setLeaguesData(data.leagues.slice(0, 20)))
      .catch((err) => alert("Error Occur while Loading Data", err));
    console.log(leaguesData);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {leaguesData.map((item) => (
            //   <LeagueItem></LeagueItem>
            <LeagueItem />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
