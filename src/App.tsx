import React from "react";
import "./styles/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store";
import MainLayout from "./layouts/MainLayout";

const BaseApp = () => {
  return (
    <Provider store={store}>
      <Container fluid={true}>
        <Row>
          <Col>
            <BrowserRouter>
              <Routes>
                <Route path={"/"} element={<MainLayout />}>
                  <Route path={""} element={<HomeScreen />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

const App = () => {
  return <BaseApp />;
};

export default App;
