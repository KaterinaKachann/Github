import React, { useEffect, useState } from "react";
import LoginButton from "../../component/Login/LoginButton";
import { GlobalStyle } from "../../GlobalStyle.style";
import { HomeWrapp } from "./Home.styled";

function Home() {
  return (
    <HomeWrapp>
      <h1>Authorization with GitHub</h1>
      <LoginButton />
    </HomeWrapp>
  );
}

export default Home;
