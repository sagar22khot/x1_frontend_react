import styled from "styled-components";
import { Row, Col, Card, Button } from "react-bootstrap";

const WrapperContainerBackground = styled(Row)`
  background-image: url(${(props) => props.backurl});
  height: 500px;
  width: 100vw;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 575.98px) {
    justify-content: center;
    height: 100vh;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    justify-content: center;
    height: 100vh;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    justify-content: center;
    height: 100vh;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    justify-content: center;
  }

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

const CardWrapper = styled(Col)`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  background-color: white;
  @media (max-width: 575.98px) {
    height: 350px;
    margin-bottom: 20px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 350px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 350px;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 100%;
  }

  @media (min-width: 1200px) {
    height: 100%;
  }
`;

const CardWrapperRow = styled(Row)`
  justify-content: space-between;
  position: relative;
  top: -100px;
  @media (max-width: 575.98px) {
    height: auto;
    top: 50px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: auto;
    top: 50px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: auto;
    top: 50px;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
`;

const CardBodyWrap = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const CardBodyButton = styled(Button)`
  background-color: transparent;
  // font-family: Signika SC;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #00a3ff;
  border: none;
  letter-spacing: 2px;
`;

const MainHeader = styled.h2`
  position: relative;
  display: flex;
  font-family: PrincessSofia;
  font-style: normal;
  font-weight: normal;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  align-self: center;
  @media (max-width: 575.98px) {
    font-size: 2.5rem;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 3.5rem;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

const MainHeaderSub = styled.p`
  position: relative;
  display: flex;
  font-family: Pacifico;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  align-self: center;
  @media (max-width: 575.98px) {
    font-size: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const MainHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-right: 20px;
  @media (max-width: 575.98px) {
    margin-right: 0px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-right: 0px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-right: 0px;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin-right: 0px;
  }

  @media (min-width: 1200px) {
  }
`;

const CaraParaContent = styled(Card.Text)`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  text-align: center;
  max-width: 250px;
  @media (max-width: 575.98px) {
    max-width: 400px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 400px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: 400px;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  @media (min-width: 1200px) {
  }
`;

export {
  WrapperContainerBackground,
  CardWrapper,
  CardWrapperRow,
  CardBodyWrap,
  CardBodyButton,
  MainHeader,
  CaraParaContent,
  MainHeaderSub,
  MainHeaderWrapper,
};
