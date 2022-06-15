import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GitService from "../../service/githib";
import "./repositorie.scss";
import { File } from "../../api/types";

function Repo() {
  const { name } = useParams();

  const [file, setFile] = useState<File[]>([]);
  let owner = localStorage.getItem("userName");
  let branch = window.location.href.split("?default_branch=")[1];
  let repo = window.location.href.split("repos/")[1];

  useEffect(() => {
    let url = `https://api.github.com/repos/${owner}/${
      repo.split("?default_branch")[0]
    }/git/trees/${branch}?recursive=1`;

    GitService.get(url)
      .then((res) => res.json())
      .then((json) => {
        setFile(json.tree);
      });
  }, []);

  return (
    <div className="wrapper-repo">
      <div className="TitleRepo">
        <p className="BranchName">{branch}</p>
        <h2>{name}</h2>
        <Link to="/repos">
          <button className="ButtonBack">Back</button>
        </Link>
      </div>
      <div>
        <table>
          <tbody>
            {file.map((item, key) => (
              <tr key={key}>
                <td>{item.path}</td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Repo;
