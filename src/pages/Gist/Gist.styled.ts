import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;
