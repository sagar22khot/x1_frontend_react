import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../../auth/helpers";
import {
  WrapperNavBar,
  WrapperNavBarCollapse,
  WrapperNav,
  WrapperNavBarItem,
  WrapperNavbarToggle,
  WrapperContainer,
  WrapperLink,
  WrapperLinkSpan
} from "./styled";

const Layout = ({ children, match, history }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#67ADFD" };
    } else {
      return { color: "#303030" };
    }
  };

  const nav = () => (
    <WrapperNavBar collapseOnSelect expand="md" className="pt-3">
      <WrapperNavbarToggle aria-controls="basic-navbar-nav" />
      <WrapperNavBarCollapse>
        <WrapperNav>
          <WrapperNavBarItem className="nav-item pl-5 pr-5">
            <WrapperLink to="/" className="nav-link" style={isActive("/")}>
              Home
            </WrapperLink>
          </WrapperNavBarItem>
          {!isAuth() && (
            <Fragment>
              <WrapperNavBarItem className="nav-item pl-5 pr-5">
                <WrapperLink
                  to="/signin"
                  className=" nav-link"
                  style={isActive("/signin")}
                >
                  Signin
                </WrapperLink>
              </WrapperNavBarItem>
              <WrapperNavBarItem className="nav-item pl-5 pr-5">
                <WrapperLink
                  to="/signup"
                  className="nav-link"
                  style={isActive("/signup")}
                >
                  Signup
                </WrapperLink>
              </WrapperNavBarItem>
            </Fragment>
          )}

          {isAuth() && isAuth().role === "admin" && (
            <WrapperNavBarItem className="nav-item pl-5 pr-5">
              <WrapperLink className="nav-link" style={isActive("/admin")} to="/admin">
                {isAuth().name}
              </WrapperLink>
            </WrapperNavBarItem>
          )}

          {isAuth() && isAuth().role === "subscriber" && (
            <WrapperNavBarItem className="nav-item pl-5 pr-5">
              <WrapperLink
                className="nav-link"
                style={isActive("/private")}
                to="/private"
              >
                {isAuth().name}
              </WrapperLink>
            </WrapperNavBarItem>
          )}

          {isAuth() && (
            <WrapperNavBarItem className="nav-item ">
              <WrapperLinkSpan
                className="nav-link"
                style={{ cursor: "pointer", color: "#fff" }}
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </WrapperLinkSpan>
            </WrapperNavBarItem>
          )}
        </WrapperNav>
      </WrapperNavBarCollapse>
    </WrapperNavBar>
  );

  return (
    <Fragment>
      {nav()}
      <WrapperContainer>{children}</WrapperContainer>
    </Fragment>
  );
};

export default withRouter(Layout);
