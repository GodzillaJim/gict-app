import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
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
    <Container className={"m-0 p-0"} fluid={true}>
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
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <BaseApp />
    </Provider>
  );
};

export default App;
