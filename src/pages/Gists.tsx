import React, { useState } from "react";

function Gists() {
  let access_token = "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";
  let url = "https://api.github.com/gists";

  const [gist, setGist] = useState('')
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `token ${access_token}`,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json[0].files)
    });

  return <div>gist</div>;
}

export default Gists;
