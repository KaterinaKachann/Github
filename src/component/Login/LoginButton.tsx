import React, { useEffect } from "react";
import "./LoginButton.css";

function LoginButton() {
  const client_id: string = "e86051972558ac68b5a8";
  const client_secret: string = "653e710d96581d947159bcf5063015aa105f759d";
  const redirect_uri: string = "http://localhost:3000";

  useEffect(() => {
    const url = window.location.href;
    const codeBoolean = url.includes("?code=");

    if (codeBoolean) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, "title", newUrl[0]);

      const code = newUrl[1];

      fetch(`http://localhost:8000?code=${code}`)
        .then((res) => res.json())
        .then((json) => localStorage.setItem("token", json.access_token));
    }
  });
  return (
    <div className="wrap">
      <div className="container">
        <h1>Authorized with GitHub</h1>
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          <button>Sing in with GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default LoginButton;
