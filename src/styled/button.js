import styled from "styled-components";

export const Button =styled.button `
  justify-content: center;
  align-items: center;
  color: white;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  padding: 10px 18px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  //// sudo order property 
  &:hover{
    background-color: grey;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton =styled(Button) `
background-color: grey;
border: 1px solid black;
    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;

