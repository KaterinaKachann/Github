import React, { useEffect, useState } from "react";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { GlobalStyle } from "./GlobalStyle.style";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/KaterinaKachann/repos`)
      .then((res) => res.json())
      .then((json) => {
        const nameRep: any = [];
        json.forEach((item: any) => nameRep.push(item.name));
        setData(nameRep);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <GlobalStyle />
      <table>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{data}</div>
    </div>
  );
}

export default App;
