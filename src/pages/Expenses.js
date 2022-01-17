import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";

const ExpensesContainer = styled.div`
  height: 100vh;
  background-color: #000;
  padding: 80px;
  @media (max-width: 576px) {
    padding: 72px 16px 48px;
  }
`;

const ExpenseTableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 36px 48px;
  background-color: #fff;
  overflow: auto;
  @media (max-width: 576px) {
    padding: 0 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ExpenseTable = styled.table`
  // height: 100%;
  width: 100%;
`;

const ExpenseTableHead = styled.thead`
  border-bottom: 2px solid #000;
`;
const ExpenseTableTr = styled.tr`
  padding: 8px 0;
`;
const ExpenseTableTh = styled.th`
  padding: 8px 0;
  color: #084298;
  cursor: pointer;
`;

const ExpenseTableThWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  * {
    pointer-events: none;
  }
`;
const ExpenseTableBody = styled.tbody`
  border-bottom: 2px solid #000;
`;
const ExpenseTd = styled.td`
  color: #202124;
  font-weight: 600;
  padding: 24px 0;
`;
const ExpenseTdColored = styled.td`
  color: #084298;
  font-weight: bold;
`;

const ExpenseTableBodyTr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(8, 66, 152, 0.3);
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyExpense = styled.div`
  font-size: 48px;
  text-align: center;
  color: #fff;
`;
const tableList = [
  { name: "id", label: "ID" },
  { name: "expense", label: "Gider" },
  { name: "amount", label: "Fiyat" },
  { name: "date", label: "Tarih" },
];

const Expenses = () => {
  const { expenseList, setExpenseList } = useContext(GlobalContext);
  const [value, setValue] = useState("");
  const [isSort, setIsSort] = useState(false);
  const [secondSort, setSecondSort] = useState(false);

  const sortByName = (item) => {
    let order = [];

    switch (item.name) {
      case tableList[0].name:
        if (value !== tableList[0].name) {
          order = expenseList
            .concat()
            .sort((a, b) => a.expenseId - b.expenseId);
          setValue(tableList[0].name);
        } else {
          order = expenseList
            .concat()
            .sort((a, b) => b.expenseId - a.expenseId);
          setValue("");
        }
        break;
      case tableList[1].name:
        if (value !== tableList[1].name) {
          order = expenseList
            .concat()
            .sort((a, b) =>
              a.expense.toUpperCase().localeCompare(b.expense.toUpperCase())
            );
          setValue(tableList[1].name);
        } else {
          order = expenseList
            .concat()
            .sort((a, b) =>
              b.expense.toUpperCase().localeCompare(a.expense.toUpperCase())
            );
          setValue("");
        }
        break;
      case tableList[2].name:
        if (value !== tableList[2].name) {
          order = expenseList.concat().sort((a, b) => a.amount - b.amount);
          setValue(tableList[2].name);
        } else {
          order = expenseList.concat().sort((a, b) => b.amount - a.amount);
          setValue("");
        }
        break;
      case tableList[3].name:
        if (value !== tableList[2].name) {
          order = expenseList.concat().sort((a, b) => a.sortDate - b.sortDate);
          setValue(tableList[2].name);
        } else {
          order = expenseList.concat().sort((a, b) => b.sortDate - a.sortDate);
          setValue("");
        }
        break;
      default:
        break;
    }
    setExpenseList(order);
  };

  const colorArrow = (item) => {
    if (!secondSort && isSort !== item.name) {
      setIsSort(item.name);
    } else if (!secondSort && isSort === item.name) {
      setSecondSort(true);
    } else if (secondSort && isSort !== item.name) {
      setIsSort(item.name);
      setSecondSort(false);
    }
    if (secondSort && isSort === item.name) {
      setSecondSort(false);
    }
  };
  return (
    <div>
      <ExpensesContainer>
        {expenseList.length > 0 ? (
          <ExpenseTableContainer>
            <ExpenseTable>
              <ExpenseTableHead>
                <ExpenseTableTr>
                  {tableList.map((item) => (
                    <ExpenseTableTh onClick={() => sortByName(item)}>
                      <ExpenseTableThWrapper onClick={() => colorArrow(item)}>
                        <span>{item.label}</span>
                        {isSort !== item.name ? (
                          <ArrowContainer>
                            <FontAwesomeIcon
                              icon={faArrowUp}
                              color="rgba(8, 66, 152, 0.3)"
                            />
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              color="rgba(8, 66, 152, 0.3)"
                            />
                          </ArrowContainer>
                        ) : (
                          <>
                            {secondSort ? (
                              <ArrowContainer>
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  color="rgba(8, 66, 152, 1)"
                                />
                                <FontAwesomeIcon
                                  icon={faArrowDown}
                                  color="rgba(8, 66, 152, 0.3)"
                                />
                              </ArrowContainer>
                            ) : (
                              <ArrowContainer>
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  color="rgba(8, 66, 152, 0.3)"
                                />
                                <FontAwesomeIcon
                                  icon={faArrowDown}
                                  color="rgba(8, 66, 152, 1)"
                                />
                              </ArrowContainer>
                            )}
                          </>
                        )}
                      </ExpenseTableThWrapper>
                    </ExpenseTableTh>
                  ))}
                </ExpenseTableTr>
              </ExpenseTableHead>
              <ExpenseTableBody>
                {expenseList.map((expense) => (
                  <ExpenseTableBodyTr key={expense.expenseId}>
                    <ExpenseTd>{expense.expenseId}</ExpenseTd>
                    <ExpenseTdColored>{expense.expense}</ExpenseTdColored>
                    <ExpenseTd>{expense.amount}</ExpenseTd>
                    <ExpenseTd>{expense.selectedDate}</ExpenseTd>
                  </ExpenseTableBodyTr>
                ))}
              </ExpenseTableBody>
            </ExpenseTable>
          </ExpenseTableContainer>
        ) : (
          <EmptyExpense>Please Enter an Expense</EmptyExpense>
        )}
      </ExpensesContainer>
    </div>
  );
};

export default Expenses;
