import styled from "styled-components";

export const FormContainer = styled.div`
  input {
    padding: 10px;
    width: 90%;
    outline: none;
    background-color: #80808046;
    border: none;
    border-bottom: 2px solid gray;
  }

  fieldset {
    width: 40%;
    display: block;
    margin: auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-bottom: 50px;
  }

  button {
    &:disabled {
      opacity: 0.3;
    }
    padding: 10px 40px;
    border: 2px solid red;
    color: red;
    font-weight: 800;
    background-color: white;
    &:not(:disabled) {
      &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
      }
    }
  }
`;