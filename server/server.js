
var fs = require('fs')
var https = require('https')

import { port } from "./config/dotenv";

const app = require("./config/express");

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
