import { Route, Routes } from "react-router";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Expenses from "./pages/Expenses";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <div id="app">
      <Header/>
      <Routes>
        <Route index exact path="/" element={<Main />} />
        <Route exact path="/statistics" element={<Statistics />} />
        <Route exact path="/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
}

export default App;
