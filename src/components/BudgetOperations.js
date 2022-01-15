import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

import InputGroup from "./input/InputGroup";

const Box = styled.div`
  background-color: #282a37;
  color: #fff;
  width: 100%;
  padding: 150px 80px 0;
  height: 80vh;
  h4 {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;
const BudgetContainer = styled.div`
  margin-bottom: 100px;
`;
const ExpenseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 27%) auto;
  column-gap: 16px;
`;

const AddButton = styled.button`
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;
`;
const BudgetOperations = () => {
  const {
    expenseList,
    setExpenseList,
    selectedDate,
    expense,
    amount,
    startDate,
    income,
  } = useContext(GlobalContext);

  //get value from form
  const formSubmit = () => {
    //return if income has no value
    if (income === 0 || income === "") {
      return alert("please enter a budget value");
    }

    //return if no value
    if (
      expense === null ||
      expense === "" ||
      amount === null ||
      amount === ""
    ) {
      return alert("formu doldur");
    }

    //set output to expenseList
    let output = {
      expense,
      amount,
      selectedDate: selectedDate ? selectedDate : startDate,
    };
    setExpenseList([...expenseList, output]);
  };

  return (
    <Box>
      <h4>Simplified Budget</h4>
      <BudgetContainer>
        <InputGroup labelText="Budget Amount" incomeInput />
      </BudgetContainer>
      <ExpenseContainer>
        <InputGroup labelText="expense" expense />
        <InputGroup labelText="amount" />
        <InputGroup labelText="date" date />
        <AddButton onClick={formSubmit}>
          <FontAwesomeIcon icon={faPlus} color="#51F129" size="2x" />
        </AddButton>
      </ExpenseContainer>
    </Box>
  );
};

export default BudgetOperations;
