import React, { useEffect, useState } from "react";

import "./Repos.css";

import GitService from "../../service/githib";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import Repo from "../Repo/Repo";

type Repos = {
  name: string;
};

function Repos() {
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    let url = "https://api.github.com/user/repos";
    GitService.get(url)
      .then((res) => res.json())
      .then((json) => {
        setRepos(json);
      });
  }, []);

  return (
    <div className="wrap">
      <table>
        <tbody>
          <tr>
            <th>NUMBER</th>
            <th>NAME</th>
            <th>LINK</th>
          </tr>
          {repos.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{item.name}</td>
              <td key={key}><Link key={key} to={`${item.name}`}>Link</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
export default Repos;
