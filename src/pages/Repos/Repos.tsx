import React, { useEffect, useState } from "react";

import "./Repos.css";

import GitService from "../../service/githib";
import { Link } from "react-router-dom";

type Repos = {
  name: string;
  full_name: string;

  language: string;
  visibility: string;
  id: string;
  default_branch: string;
};

type Owner = {
  avatar_url: string;
  login: string;
  followers_url: string;
};

function Repos() {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [owner, setOwner] = useState<Owner[]>([]);

  useEffect(() => {
    let url = "https://api.github.com/user/repos";
    GitService.get(url)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("userName", json[0].owner.login);
        setOwner(json[0].owner);
        setRepos(json);
      });
  }, []);
  console.log(typeof repos);

  return (
    <div className="wrap">
      <div className="InfoUser">
        <img className="InfoUserImg" src={owner.avatar_url}></img>
        <h3 className="InfoUserName">{owner.login}</h3>
      </div>
      <ul className="CardContainer">
        {repos.map((item, key) => (
          <li className="CardWrap" key={key}>
            <div>
              <Link to={`${item.name}`}>
                <h3>{item.name}</h3>
              </Link>
              <p className="InfoLang">{item.language}</p>
            </div>
            <div className="CardInfo">
              <p className="InfoVisabel">{item.visibility}</p>
              <p className="InfoBranch">{item.default_branch}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Repos;
