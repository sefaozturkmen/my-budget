import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
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
  @media (max-width: 576px) {
    padding: 72px 16px 48px;
    height: auto;
  }
`;
const BudgetContainer = styled.div`
  margin-bottom: 100px;
  @media (max-width: 576px) {
    margin-bottom: 32px;

  }
`;
const ExpenseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 27%) auto;
  column-gap: 16px;
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 2fr);
    row-gap: 16px;
  }
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
    expenseId,
    setExpenseId,
    sortDate,
  } = useContext(GlobalContext);

  //get value from form
  const formSubmit = () => {
    //return if income has no value
    if (income === 0 || income === "") {
      return toast.warning("Bütçe Giriniz.", {
        theme: "colored",
      });
    }

    //return if no value
    if (expense === null || expense === "" || amount === null || amount === 0) {
      return toast.warning("Formu Eksiksiz Doldurunuz.", {
        theme: "colored",
      });
    }
    //set output to expenseList
    let output = {
      expenseId,
      expense,
      amount,
      selectedDate: selectedDate
        ? selectedDate
        : format(startDate, "dd/MM/yyyy"),
      sortDate,
    };

    setExpenseList([...expenseList, output]);
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
    setExpenseId(expenseId + 1);
    toast.success(`${expense} giderlere eklendi.`, {
      theme: "colored",
    });
  };

  return (
    <Box>
      <h4>Simplified Budget</h4>
      <BudgetContainer>
        <InputGroup labelText="Budget Amount" name="budgetAmount" />
      </BudgetContainer>
      <ExpenseContainer>
        <InputGroup labelText="Expense" name="expense" />
        <InputGroup labelText="Amount" name="amount" />
        <InputGroup labelText="Date" date />
        <AddButton onClick={formSubmit}>
          <FontAwesomeIcon icon={faPlus} color="#51F129" size="2x" />
        </AddButton>
      </ExpenseContainer>
    </Box>
  );
};

export default BudgetOperations;
