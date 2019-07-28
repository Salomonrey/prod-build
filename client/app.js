const path = require('path');
const compression = require("compression");
const express = require('express');
const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
 // res.setHeader('Content-Type', 'text/event-stream')
 // res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
app.listen(9000, (err) => { 
if(err){ 
return console.log(err) 
} 
console.log(`🚀 Server ready at http://localhost:9000`); 
});