import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GitService from "../../service/githib";
import "./Repo.css";
import { File } from '../../api/types';


function Repo() {
  const { name } = useParams();

  const [file, setFile] = useState<File[]>([]);
  let owner = localStorage.getItem("userName");
  let branch = window.location.href.split("?default_branch=")[1];
  let repo =  window.location.href.split("repos/")[1];

  console.log(repo);

  useEffect(() => {
    let url = `https://api.github.com/repos/${owner}/${repo.split("?default_branch")[0]}/git/trees/${branch}?recursive=1`;

    GitService.get(url)
      .then((res) => res.json())
      .then((json) => {
        setFile(json.tree);
      });
  }, []);

  return (
    <div className="wrap">
      <div className="contaner">
        <div className="TitleRepo">
          <h1>{name}</h1>
          <Link to="/repos">
            <button className="ButtonBack">Back</button>
          </Link>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>NUMBER</th>
                <th>PATH</th>
              </tr>
              {file.map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}.</td>
                  <td>{item.path}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Repo;
