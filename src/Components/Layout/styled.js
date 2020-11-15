import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const WrapperNavBar = styled(Navbar)`
  justify-content: flex-end !important;
  background-color: #f9f9f9;
`;

const WrapperContainer = styled(Container)``;

const WrapperNavBarCollapse = styled(Navbar.Collapse)`
  justify-content: center !important;
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
