
var fs = require('fs')
var https = require('https')

import { port } from "./config/dotenv";

const app = require("./config/express");

https.createServer({
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('cert.pem'),
  ca: fs.readFileSync('chain.pem')
}, app)
.listen(port, function () {
  console.log('Example app listening on port 1338! Go to https://localhost:1338/')
})
