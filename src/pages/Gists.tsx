import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle.style";
import GitService from "../service/githib";

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
      <GlobalStyle />
      <table
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <tbody>
          <tr>
            <th>NUMBER</th>
            <th>ID</th>
            <th>DESCRIPTION</th>
          </tr>
          {gists.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{item.id}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Gists;
