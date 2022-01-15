import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import InputGroup from "./input/InputGroup";

const Box = styled.div`
  background-color: #282a37;
  color: #fff;
  width: 100%;
  padding: 150px 80px 0;
  height: 85vh;
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
  return (
    <Box>
      <h4>Simplified Budget</h4>
      <BudgetContainer>
        <InputGroup labelText="Budget Amount" />
      </BudgetContainer>
      <ExpenseContainer>
        <InputGroup labelText="Expense" light />
        <InputGroup labelText="Amount" />
        <InputGroup labelText="Date" />
        <AddButton>
          <FontAwesomeIcon icon={faPlus} color="#51F129" size="2x" />
        </AddButton>
      </ExpenseContainer>
    </Box>
  );
};

export default BudgetOperations;
