import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import BudgetOperations from "../components/BudgetOperations";
import BudgetExpenses from "../components/BudgetExpenses";
import Result from "../components/Result";
import { GlobalContext } from "../context/context";

const Main = () => {
  const [income, setIncome] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [expenseList, setExpenseList] = useState([]);
  const [expense, setExpense] = useState(null);
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const data = {
    income,
    setIncome,
    selectedDate,
    setSelectedDate,
    expenseList,
    setExpenseList,
    expense,
    setExpense,
    amount,
    setAmount,
    startDate,
    setStartDate,
  };

  return (
    <GlobalContext.Provider value={data}>
      <Container fluid>
        <Row>
          <Col sm={6} className="p-0">
            <BudgetOperations />
          </Col>
          <Col sm={6} className="p-0">
            <BudgetExpenses />
          </Col>
          <Col>
            <Result />
          </Col>
        </Row>
      </Container>
    </GlobalContext.Provider>
  );
};

export default Main;
