import React from "react";
import Cat from "../../assets/female.png";
import "./Home.css";

function Home() {
  return (
    <div className="wrap">
      <div>
        <h1>GitHub Clone</h1>
        <span>
          This app can authorithed in GitHub, show your repositories and list of
          files in repositories. You can find users github using search bar.
        </span>
      </div>
      <div>
        <img src={Cat} alt="cat github" />
      </div>
    </div>
  );
}

export default Home;
