import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle.style";
import GitService from '../service/githib';

function Repo() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    let url = "https://api.github.com/user/repos";
    GitService.get(url)
      .then((res) => res.json())
      .then((json) => {
        const nameRep: any = [];
        json.forEach((item: any) => nameRep.push(item.name));
        setData(nameRep);
      });
  }, []);

  return (
    <div>
      <GlobalStyle />
      <table style={{ margin: "0 auto" }}>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Repo;
