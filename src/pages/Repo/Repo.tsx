import React, { useEffect, useState } from "react";

import "./Repo.css";

import GitService from "../../service/githib";

type Repos = {
  name: string;
};

function Repo() {
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
    <div>
      <table>
        <tbody>
          <tr>
            <th>NUMBER</th>
            <th>NAME</th>
          </tr>
          {repos.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Repo;
