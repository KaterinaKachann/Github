import React from "react";
import { Link, useParams } from "react-router-dom";
import { Wrap, Container, Button } from "./Repo.styled";

function Repo() {
  const { name } = useParams();

  return (
    <Wrap>
      <Container>
        <h1>{name}</h1>
        <Link to="/repos">
          <Button>Back</Button>
        </Link>
      </Container>
    </Wrap>
  );
}

export default Repo;
