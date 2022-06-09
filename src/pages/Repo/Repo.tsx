import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GitService from "../../service/githib";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./Repo.css"

interface File {
  path: string;
}
function Repo() {
  const { name } = useParams();

  const [file, setFile] = useState<File[]>([]);
  let owner = localStorage.getItem("userName");
  let repo = window.location.href.split("repos/")[1];

  useEffect(() => {
    let url = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;

    GitService.get(url)

      .then((res) => res.json())
      .then((json) => {
       setFile(json.tree);
      })
  }, []);
  console.log(file);
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
