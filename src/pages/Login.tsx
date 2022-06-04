import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle.style";

function Login() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://api.github.com/user/repos";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "token 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",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
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

export default Login;
