import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import BudgetOperations from "../components/BudgetOperations";
import Results from "../components/Results";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6} className="p-0 m-0">
          <BudgetOperations />
        </Col>
        <Col sm={6} className="p-0 m-0">
          <Results />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
