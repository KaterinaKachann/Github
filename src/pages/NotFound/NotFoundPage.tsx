import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFoundPage() {
  return (
    <div className="WrapNotFound">
      <h1>Not Found Page</h1>
      <Link to="/">
        <p className="LinkNotFound">Return to home page</p>
      </Link>
    </div>
  );
}

export default NotFoundPage;
