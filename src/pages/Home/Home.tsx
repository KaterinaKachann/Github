import React, { useEffect, useState } from "react";
import LoginButton from "../../component/Login/LoginButton";
import { GlobalStyle } from "../../GlobalStyle.style";
import { HomeWrapp, Image, InfoWrap} from "./Home.styled";
import Cat  from '../../assets/female.png';


function Home() {
  // const logo =  require("../../assets/female.png")
  return (
    <HomeWrapp>
      <InfoWrap><h1>GitHub Clone</h1>
      <p>This app can authorithed in GitHub, show your repositories and list of files in repositories. You can find users github using search bar.</p></InfoWrap>
      <div><Image src={Cat} alt="cat github"/></div>
    </HomeWrapp>
  );
}

export default Home;
