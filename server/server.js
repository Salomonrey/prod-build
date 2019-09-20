
var https = require('https')

import { port } from "./config/dotenv";

const app = require("./config/express");

// const path = require('path');
// const compression = require("compression");
// const express = require('express');
// var fs = require('fs');

// app.use(compression());

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req, res) {
//  // res.setHeader('Content-Type', 'text/event-stream')
//  // res.setHeader('Cache-Control', 'no-cache')
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
  
app.listen(port, (err) => { 
if(err){ 
return console.log(err) 
} 
console.log(`🚀 Server ready at http://localhost:1338`); 
});