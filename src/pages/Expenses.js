import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const Expenses = () => {
  const { income } = useContext(GlobalContext);

  return (
    <div>
      Expenses page
      <div>{income}</div>
    </div>
  );
};

export default Expenses;
