import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Titans Rift</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
