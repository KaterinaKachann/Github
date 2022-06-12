import React, { useEffect, useState } from "react";
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
        .then((json) => {
          localStorage.setItem("token", json.access_token);
          localStorage.setItem("logout", "false");
          location.reload();
        });
    }
  });
  const LogOut = () => {
    localStorage.clear();
    localStorage.setItem("logout", "true");
    location.reload();
  };

  return (
    <>
      {localStorage.getItem("logout") == "false" ? (
        <button className="ButtonLogin" onClick={LogOut}>
          Log Out of GitHub
        </button>
      ) : (
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          <button className="ButtonLogin">Log in on GitHub</button>
        </a>
      )}
    </>
  );
}

export default LoginButton;
