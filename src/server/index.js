const http = require("http");
const url = require("url");
var request = require("request");

const requestListener = function (req, res) {
  const parsed = url.parse(req.url, true);
  let code = parsed.query.code;


  if (code) {
    const client_id = "e86051972558ac68b5a8";
    const client_secret = "653e710d96581d947159bcf5063015aa105f759d";
    const redirect_uri = "http://localhost:8000";

    request.post({
        url: `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&redirect_uri=${redirect_uri}`,
        headers: {
          Accept: "application/json",
        },
      },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
        
          console.log(body)
          res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application-json",
          });
          res.end(body);
        }
    });
  } else {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application-json",
    });
    res.end({});
  }
};

const server = http.createServer(requestListener);
server.listen(8000);
console.log('Server listen http://localhost:8000')
