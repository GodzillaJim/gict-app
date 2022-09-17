import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg={"primary"} variant={"dark"}>
        <Container fluid={true}>
          <Navbar.Brand className="mx-1" href="#home">
            Titans Rift
          </Navbar.Brand>
          <Navbar.Toggle
            className={"mx-1"}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse className={"mx-1"} id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
