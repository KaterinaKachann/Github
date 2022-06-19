import React, { useEffect } from "react";
import "./loginButton.scss";

function LoginButton() {
  const client_id: string = "e86051972558ac68b5a8";
  const redirect_uri: string = "http://localhost:3000";


  const LogOut = () => {
    localStorage.clear();
    localStorage.setItem("logout", "true");
    location.reload();
  };


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
          console.log(json);
          localStorage.setItem("token", json.access_token);
          localStorage.setItem("logout", "false");
          location.reload();
        });
    }
  });

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
