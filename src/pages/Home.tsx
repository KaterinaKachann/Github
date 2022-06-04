import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle.style";

function Home() {

  const client_id: string = 'e86051972558ac68b5a8';
  const client_secret: string = '653e710d96581d947159bcf5063015aa105f759d';
  const redirect_uri: string = 'http://localhost:3000';

  const [isHovering, setIsHovering] = useState(false);
  const HandleHoverEnter = () => {
    setIsHovering(true);
  };
  const HandleHoverLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const url = window.location.href;
    const codeBoolean = url.includes("?code=")
    if (codeBoolean) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, 'title', newUrl[0]);
      const code = newUrl[1];
      console.log(code)
      const tokenUrl = `http://localhost:8000?code=${code}`
      fetch(tokenUrl, {
        method: "GET"
      })
        .then((res) => console.log(res.json()))
      // .then((json)=> console.log(json))

    }
  })
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <GlobalStyle />
      <h1 style={{ paddingBottom: "30px" }}>Authorization with GitHub</h1>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
      >
        <button
          style={{
            padding: "1rem",
            cursor: "pointer",
            backgroundColor: isHovering ? "grey" : "black",
            color: "white",
            borderRadius: "50px",
          }}
          onMouseEnter={HandleHoverEnter}
          onMouseLeave={HandleHoverLeave}
          onMouseDown={HandleHoverLeave}
          onMouseUp={HandleHoverEnter}
        >
          Sing in with GitHub
        </button>
      </a>
    </div>
  );
}

export default Home;
