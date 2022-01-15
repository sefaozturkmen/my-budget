import { Route, Routes } from "react-router";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Expenses from "./pages/Expenses";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import { GlobalContext } from "./context/context";
import { useState } from "react";

function App() {
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
      <div id="app">
        <Header />
        <Routes>
          <Route index exact path="/" element={<Main />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
