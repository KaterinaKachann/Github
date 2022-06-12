import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitService from "../../service/githib";
import './Gist.css'
import { Gist } from "../../api/types";



function Gists() {
  let url = "https://api.github.com/gists";

  const [gists, setGists] = useState<Gist[]>([]);

  useEffect(() => {
    GitService.get(url)
      .then((resp) => resp.json())
      .then((json) => setGists(json));
  }, []);

  return (
    <div className="wrap">
      <table>
        <tbody>
          <tr>
            <th>NUMBER</th>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>LINK</th>
          </tr>
          {gists.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td><Link key={key} to={`${item.description}`}>Show</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gists;
