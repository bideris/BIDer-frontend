import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logout from "../App/Logout";

export default () => {
  const isLoggedIn = sessionStorage.getItem("auth");
  //Userio navbar'as
  const userLinks = (
    <>
      <LinkContainer to="/Dashboard">
        <Nav.Link href="#">
          <Button variant="outline-light" block>
            Dashboard
          </Button>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/">
        <Nav.Link href="#">
          <Button variant="outline-light" onClick={Logout} block>
            Logout
          </Button>
        </Nav.Link>
      </LinkContainer>
    </>
  );
  //Svečio navbar'as
  const guestLinks = (
    <>
      <LinkContainer to="/LogIn">
        <Nav.Link href="#">
          <Button variant="outline-light" block>
            Log in
          </Button>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/SignUp">
        <Nav.Link href="#">
          <Button variant="outline-light" block>
            Sign Up
          </Button>
        </Nav.Link>
      </LinkContainer>
    </>
  );

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Link to="/">
        <Navbar.Brand>BIDERIS</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {isLoggedIn ? userLinks : guestLinks}
          <LinkContainer to="/About">
            <Nav.Link href="#">
              <Button variant="outline-light" block>
                About
              </Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
