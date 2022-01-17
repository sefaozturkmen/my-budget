import { Route, Routes } from "react-router";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { GlobalContext } from "./context/context";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Expenses from "./pages/Expenses";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";

function App() {
  const [income, setIncome] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [expenseList, setExpenseList] = useState([]);
  const [expense, setExpense] = useState(null);
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [sortDate, setSortDate] = useState(null);
  const [expenseId, setExpenseId] = useState(1);

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
    expenseId,
    setExpenseId,
    sortDate,
    setSortDate,
  };
  useEffect(() => {
    const expenseListLS = JSON.parse(localStorage.getItem("expenseList"));
    setExpenseList(expenseListLS);
  }, []);
  return (
    <GlobalContext.Provider value={data}>
      <div id="app">
        <Header />
        <Routes>
          <Route index exact path="/" element={<Main />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/expenses" element={<Expenses />} />
        </Routes>
        <ToastContainer
          transition={Zoom}
          autoClose={3000}
          pauseOnHover={false}
        />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
