import React from "react";
import { Link, useParams } from "react-router-dom";
import './Gist.css'

function Gist() {
  const { description } = useParams();

  return (
    <div className="wrap">
      <div className="container">
        <h1>{description}</h1>
        <Link to="/gists">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Gist;
