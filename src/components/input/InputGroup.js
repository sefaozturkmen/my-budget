import React, { useContext } from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { GlobalContext } from "../../context/context";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #323645;
  padding: 8px 16px;
  border-radius: 12px;
  transition: linear 0.2s;
  &:focus-within {
    background-color: #e8f0fe;
    input {
      color: #000;
    }
  }
  input {
    background-color: transparent !important;
    border: 0;
    outline: 0;
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  label {
    color: #8e909d;
    font-size: 12px;
    font-weight: 500;
  }
`;
const InputGroup = ({ labelText, incomeInput, date, expense }) => {
  const {
    setIncome,
    setSelectedDate,
    setExpense,
    setAmount,
    startDate,
    setStartDate,
  } = useContext(GlobalContext);

  //update value when blur
  const handleBlur = (event) => {
    setIncome(event.target.value);
  };

  //set date from datepicker
  const selectDate = (date) => {
    // const formatDate = date.toLocaleDateString();

    const dateFormat = format(date, "dd/MM/yyyy");
    setStartDate(date);
    setSelectedDate(dateFormat);
  };

  //set value by type from inputs
  const changeValue = (e) => {
    switch (labelText) {
      case "expense":
        setExpense(e.target.value);
        break;
      case "amount":
        setAmount(Number(e.target.value));
        break;
      default:
        break;
    }
  };
  return (
    <InputContainer>
      <label>{labelText}</label>
      {!date ? (
        <input
          type={expense ? "text" : "number"}
          onBlur={incomeInput && handleBlur}
          name={labelText}
          id={labelText}
          onChange={changeValue}
          required={true}
        />
      ) : (
        <ReactDatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          name={labelText}
          id={labelText}
          onChange={(date) => selectDate(date)}
        />
      )}
    </InputContainer>
  );
};

export default InputGroup;
