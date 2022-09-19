import React from "react";
import "./index.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <nav className="navbar sticky-bottom bottom-0 navbar-light bg-light footer">
      <Row className={"text-center w-100"}>
        <Col className={"mx-auto"}>© 2022 TheJimna.com</Col>
      </Row>
    </nav>
  );
};

export default Footer;
