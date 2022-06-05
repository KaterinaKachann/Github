import React, { useState } from "react";
import GitService from '../service/githib';


function Gists() {
  let url = "https://api.github.com/gists";

//   const [gist, setGist] = useState('')

  GitService.get(url)
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
    });

  return <div>gist</div>;
}

export default Gists;
