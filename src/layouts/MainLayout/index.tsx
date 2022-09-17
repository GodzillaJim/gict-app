import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import CustomNavBar from "./components/CustomNavBar";

const MainLayout = () => {
  return (
    <Container className={"m-0 p-0"} fluid={true}>
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
