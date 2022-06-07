import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 50px;
  transition: .3s;
  &:hover{
    background-color: grey;
  }
  &:active{
    background-color: lightgrey;
  }
`;
