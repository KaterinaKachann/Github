import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFoundPage() {
  return (
    <div className="wrap">
      <h1>Not Found Page</h1>
      <Link to="/">
        <a>Return to home page</a>
      </Link>
    </div>
  );
}

export default NotFoundPage;
