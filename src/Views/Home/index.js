import React from "react";
import Layout from "../../Components/Layout";
import { WrapperContainerHome } from "./styled";
import backImg from "../../Assets/home.jpg";
import { Row, Col, Card, Button, CardDeck } from "react-bootstrap";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import {
  WrapperContainerBackground,
  CardWrapper,
  CardWrapperRow,
  CardBodyWrap,
  CardBodyButton,
  MainHeader,
  CaraParaContent,
  MainHeaderSub,
  MainHeaderWrapper,
} from "./styled";

const Home = () => {
  return (
    <Layout>
      <WrapperContainerBackground backurl={backImg}>
        <MainHeaderWrapper>
          <MainHeader>Era of x1 Technology</MainHeader>
          <MainHeaderSub>Machine that will blow your mind!</MainHeaderSub>
        </MainHeaderWrapper>
      </WrapperContainerBackground>
      <CardWrapperRow className="col-md-12 col-xl-10">
        <CardWrapper lg={3} className="p-2">
          <CardBodyWrap>
            <Card.Title>Motion Detector</Card.Title>
            <img src={card1} />
            <CaraParaContent>
              Record real time captures of your precious things. Watch it your
              live to make sure your household is as it was when you left.
            </CaraParaContent>
            <CardBodyButton>Explore</CardBodyButton>
          </CardBodyWrap>
        </CardWrapper>
        <CardWrapper lg={3} className="p-2">
          <CardBodyWrap>
            <Card.Title>See The Moments</Card.Title>
            <img src={card2} />
            <CaraParaContent>
              Record real time captures of your precious things. Watch it your
              live to make sure your household is as it was when you left.
            </CaraParaContent>
            <CardBodyButton>Explore</CardBodyButton>
          </CardBodyWrap>
        </CardWrapper>
        <CardWrapper lg={3} className="p-2">
          <CardBodyWrap>
            <Card.Title>Activate Alerts</Card.Title>
            <img src={card3} />
            <CaraParaContent>
              Record real time captures of your precious things. Watch it your
              live to make sure your household is as it was when you left.
            </CaraParaContent>
            <CardBodyButton>Explore</CardBodyButton>
          </CardBodyWrap>
        </CardWrapper>
      </CardWrapperRow>
    </Layout>
  );
};
export default Home;
