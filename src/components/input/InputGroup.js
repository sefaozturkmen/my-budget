import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #323645;
  padding: 8px 16px;
  border-radius: 12px;
  height: 48px;
  transition: linear 0.2s;
  &:focus-within {
    background-color: #e8f0fe;
    input {
      color: #000;
    }
  }
  input {
    background-color: transparent;
    border: 0;
    outline: 0;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
  }
  label {
    color: #8e909d;
    font-size: 12px;
    font-weight: 500;
  }
`;
const InputGroup = ({ labelText }) => {
  return (
    <InputContainer>
      <label>{labelText}</label>
      <input />
    </InputContainer>
  );
};

export default InputGroup;
