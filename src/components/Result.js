import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

const ResultContainer = styled.div`
  display: flex;
  height: 20vh;
  padding: 0 80px;
  justify-content: space-between;
  align-items: center;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
  &:nth-child(2) {
    align-items: center;
  }
  &:nth-child(3) {
    align-items: flex-end;
  }
`;

const ItemTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const Amount = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
`;
const Result = () => {
  const { income, expenseList } = useContext(GlobalContext);

  // calculate total expense
  const expenseTotal = () => {
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
      total += expenseList[i].amount;
    }
    return total;
  };

  // calculate the balance
  const calculateBalance = () => {
    return income - expenseTotal();
  };

  // set format by value
  const valueFormat = (value) => {
    return new Intl.NumberFormat("en-US").format(value);
  };

  //set color by amount
  const AmountColor = () => {
    if (calculateBalance() > 0) {
      return "green";
    } else if (calculateBalance() < 0) {
      return "red";
    }
  };
  
  return (
    <ResultContainer>
      <ResultItem>
        <div className="wrapper">
          <ItemTitle>Income</ItemTitle>
          <Amount>{valueFormat(income)}</Amount>
        </div>
      </ResultItem>
      <ResultItem>
        <div className="wrapper">
          <ItemTitle>Expenses</ItemTitle>
          <Amount>{valueFormat(expenseTotal())}</Amount>
        </div>
      </ResultItem>
      <ResultItem>
        <div className="wrapper">
          <ItemTitle>Balance</ItemTitle>
          <Amount
            style={{
              color: AmountColor(),
            }}
          >
            {valueFormat(calculateBalance())}
          </Amount>
        </div>
      </ResultItem>
    </ResultContainer>
  );
};

export default Result;
