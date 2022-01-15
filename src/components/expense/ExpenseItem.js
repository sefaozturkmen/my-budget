import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const Item = styled.div`
  display: grid;
  grid-template-columns: 70% 27% 3%;
  padding: 16px 0;
  border-bottom: 1px solid rgba(143, 143, 143, 0.3);
`;

const ItemName = styled.div`
  font-size: 14px;
`;
const ExpenseAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
`;
const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

const ExpenseItem = ({ expense, handleDelete }) => {
  return (
    <Item>
      <ItemName>{expense.expense}</ItemName>
      <ExpenseAmount>{expense.amount}</ExpenseAmount>
      <DeleteButton onClick={() => handleDelete(expense)}>
        <FontAwesomeIcon icon={faTrashAlt} color="#adb5bd" />
      </DeleteButton>
    </Item>
  );
};

export default ExpenseItem;
