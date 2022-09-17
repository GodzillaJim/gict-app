import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import CustomNavBar from "./components/CustomNavBar";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <Container className={"m-0 p-0 w-100"} fluid={true}>
      <Row className={"m-0 p-0 w-100"}>
        <Col className={"mx-0 px-0 w-100"}>
          <CustomNavBar />
        </Col>
      </Row>
      <Row className={"m-0 p-0 w-100"}>
        <Col className={"m-0 p-0 w-100"}>
          <div className={"content"}>
            <Outlet />
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default MainLayout;
