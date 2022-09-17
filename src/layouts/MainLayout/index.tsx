import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import CustomNavBar from "./components/NavBar";

const MainLayout = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <CustomNavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
