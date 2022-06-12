import React from "react";
import { useNavigate } from "react-router-dom";
import './ErrorBoundary.css'


function ErrorBoundary() {
    const navigate = useNavigate();
  return (
    <div className="wrap">
      <button onClick={() => navigate(-1)}>
        <a>Return to home page</a>
      </button>
    </div>
  );
}

export default ErrorBoundary;
