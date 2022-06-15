import React from "react";
import Cat from "../../assets/female.png";
import "./home.scss";

function Home() {
  return (
    <div className="wrapper-home">
      <div className="content">
        <h1>GitHub Clone</h1>
        <span>
          This app can authorithed in GitHub, show your repositories and list of
          files in repositories. You can find users github using search bar.
        </span>
      </div>

      <img src={Cat} alt="cat github" />
    </div>
  );
}

export default Home;
