import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap, LinkText } from "./ErrorBoundary.styled";


function NotFoundPage() {
    const navigate = useNavigate();
  return (
    <Wrap>
      <button onClick={() => navigate(-1)}>
        <LinkText>Return to home page</LinkText>
      </button>
    </Wrap>
  );
}

export default NotFoundPage;
