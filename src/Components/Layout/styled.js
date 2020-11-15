import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const WrapperNavBar = styled(Navbar)`
  justify-content: flex-end !important;
  background-color: rgb(0,0,0, 0.3);
  position: absolute;
  width: 100vw;
  z-index: 1;
`;

const WrapperContainer = styled(Container)`
  padding: 0px;
  display: flex;
  justify-content: center;
  // height: 100vh;
`;

const WrapperNavBarCollapse = styled(Navbar.Collapse)`
  justify-content: flex-end !important;
`;

const WrapperNav = styled(Nav)``;

const WrapperNavBarItem = styled(Nav.Item)``;

const WrapperNavbarToggle = styled(Navbar.Toggle)``;

const WrapperLink = styled(Link)``;

const WrapperLinkSpan = styled.span``;

export {
  WrapperNavBar,
  WrapperNavBarCollapse,
  WrapperNav,
  WrapperNavBarItem,
  WrapperNavbarToggle,
  WrapperContainer,
  WrapperLink,
  WrapperLinkSpan,
};
