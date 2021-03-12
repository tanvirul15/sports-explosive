import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Header/Header";
import "./LeagueDetails.css";

const LeagueDetails = () => {
  const { leagueID } = useParams();

  const [leagueDetails, setleagueDetails] = useState([]);

  let { strLeague, strSport, strCountry, intFormedYear, strGender, strDescriptionEN, strLogo, strBanner, strFacebook, strTwitter, strYoutube } = leagueDetails;

  useEffect(() => {
    if (leagueID) {
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueID}`)
        .then((res) => res.json())
        .then((data) => {
          setleagueDetails(data.leagues[0]);
        })
        .catch((err) => alert("Error Occur while Loading Data", err));
    }
  }, [leagueID]);

  return (
    <>
      <Header banner={strBanner} logo={strLogo} />
      <div className='py-4'>
        <Container>
          <Card className='bg-primary'>
            <Row>
              <Col sm='7' className='py-3 px-5 text-white'>
                <div className='h-100 d-flex flex-column justify-content-center'>
                  <h3>{strLeague}</h3>
                  <h5>Founded: {intFormedYear}</h5>
                  <h5>Country: {strCountry}</h5>
                  <h5>Sports Type: {strSport}</h5>
                  <h5>Gender: {strGender}</h5>
                </div>
              </Col>
              <Col sm='5'>
                <Card className='bg-primary text-right'>
                  {/* <Card.Img variant='top' src='../../image/male.png'></Card.Img> */}
                  {strGender === "Male" && <Card.Img variant='top' src={require("../../image/male.png").default} />}
                  {strGender === "Female" && <Card.Img variant='top' src={require("../../image/female.png").default} />}
                </Card>
              </Col>
            </Row>
          </Card>

          <div className='league__description py-4'>
            <p className='lead text-white text-justify'>{strDescriptionEN}</p>
          </div>
          <div className='league__logoBox py-3 d-flex justify-content-center'>
            <a href={strFacebook} target='_blank' className='link'>
              <img src={require("../../image/icon/Facebook.png").default} className='social__icon' alt='' />
            </a>
            <a href={strTwitter} target='_blank' className='link'>
              <img src={require("../../image/icon/Twitter.png").default} className='social__icon' alt='' />
            </a>
            <a href={strYoutube} target='_blank' className='link'>
              <img src={require("../../image/icon/YouTube.png").default} className='social__icon' alt='' />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LeagueDetails;
