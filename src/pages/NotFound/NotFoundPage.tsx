import React from "react";
import { Link } from "react-router-dom";
import { Wrap, LinkText } from "./NotFound.styled";

function NotFoundPage() {
  return (
    <Wrap>
      <h1>Not Found Page</h1>
      <Link to="/">
        <LinkText>Return to home page</LinkText>
      </Link>
    </Wrap>
  );
}

export default NotFoundPage;
