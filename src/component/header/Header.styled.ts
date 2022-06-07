import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background-color: #24292f;
  color: white;
  display: flex;
  justify-content: space-around;;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 100;
  color: white;
  &:hover {
    color: grey;
  }
`;
export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const NavLink = styled.p`
  font-size: 18px;
  font-weight: 100;
  color: white;
  &:hover {
    color: grey;
  }
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border: 1px solid white;
  padding: 1em;
  border-radius: 30px;
  color: white;
  transition: 0.3s;
  &:hover {
    border-color: grey;
    color: grey;
  }
  &:active {
    border-color: lightgrey;
    color: lightgrey;
  }
`;
