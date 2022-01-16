import React, { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

import ExpenseItem from "./expense/ExpenseItem";

const Box = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 150px 80px 0;
  height: 80vh;
  h4 {
    color: #51f129;
  }
`;

const ExpenseList = styled.div`
  overflow: auto;
  height: 300px;

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const EmptyExpenseList = styled.div`
  font-size: 16px;
`;
const BudgetExpenses = () => {
  const { expenseList, setExpenseList } = useContext(GlobalContext);

  //delete item from expenseList
  const deleteItem = (item) => {
    const selectedItem = expenseList.findIndex(
      (expense) => expense.expense === item.expense
    );
    expenseList.splice(selectedItem, 1);
    setExpenseList([...expenseList]);
    toast.warning(`${item.expense} silindi.`, {
      theme: "colored",
    });
  };
  
  return (
    <Box>
      <h4>Expenses</h4>
      <ExpenseList>
        {expenseList.length > 0 ? (
          expenseList.map((expense, i) => (
            <ExpenseItem expense={expense} handleDelete={deleteItem} key={i} />
          ))
        ) : (
          <EmptyExpenseList>Please enter an expense</EmptyExpenseList>
        )}
      </ExpenseList>
    </Box>
  );
};

export default BudgetExpenses;
