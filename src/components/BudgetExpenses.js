import React from "react";
import styled from "styled-components";

import ExpenseItem from "./expense/ExpenseItem";

const Box = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 150px 80px 0;
  height: 85vh;
  h4 {
    color: #51f129;
  }
`;

const ExpenseList = styled.div``;

const BudgetExpenses = () => {
  return (
    <Box>
      <h4>Expenses</h4>
      <ExpenseList>
        <ExpenseItem />
        <ExpenseItem /> <ExpenseItem />
      </ExpenseList>
    </Box>
  );
};

export default BudgetExpenses;
