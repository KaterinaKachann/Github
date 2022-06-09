import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 50px;
  transition: 0.3s;
  &:hover {
    background-color: grey;
  }
  &:active {
    background-color: lightgrey;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
