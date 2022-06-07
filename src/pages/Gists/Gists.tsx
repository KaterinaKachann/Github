import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitService from "../../service/githib";
import './Gist.css'

type Gist = {
  id: string;
  description: string;
};

function Gists() {
  let url = "https://api.github.com/gists";

  const [gists, setGists] = useState<Gist[]>([]);

  useEffect(() => {
    GitService.get(url)
      .then((resp) => resp.json())
      .then((json) => setGists(json));
  }, []);

  return (
    <div>
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
              <td><Link to="">Show</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gists;
