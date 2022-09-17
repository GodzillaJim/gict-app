import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg={"primary"} variant={"dark"}>
        <Container fluid={true}>
          <Navbar.Brand href="#home">Titans Rift</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
