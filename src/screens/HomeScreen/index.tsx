import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import TabOne from "./components/TabOne";
import TabTwo from "./components/TabTwo";

const HomeScreen = () => {
  return (
    <Container fluid className={"my-1"}>
      <Row>
        <Col>
          <Tabs defaultActiveKey="tabOne" id="form-tab" className="mb-3">
            <Tab eventKey="tabOne" title="Form">
              <TabOne />
            </Tab>
            <Tab eventKey="tabTwo" title="Items">
              <TabTwo />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
