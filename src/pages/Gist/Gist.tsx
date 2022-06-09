import React from "react";
import { Link, useParams } from "react-router-dom";
import { Wrap, Container, Button } from "./Gist.styled";

function Gist() {
  const { description } = useParams();

  return (
    <Wrap>
      <Container>
        <h1>{description}</h1>
        <Link to="/gists">
          <Button>Back</Button>
        </Link>
      </Container>
    </Wrap>
  );
}

export default Gist;
