import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const LinkText = styled.p`
  text-decoration: underline;
  transition: 0.3s;
  &:hover {
    color: grey;
  }
`;
