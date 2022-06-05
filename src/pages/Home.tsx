import React, { useEffect, useState } from "react";
import LoginButton from "../component/LoginButton";
import { GlobalStyle } from "../GlobalStyle.style";

function Home() {
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
      <LoginButton />
    </div>
  );
}

export default Home;
