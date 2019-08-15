const path = require('path');
const compression = require("compression");
const express = require('express');
var fs = require('fs');
const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/sitemap.xml', function(req, res) {
    res.header('Content-Type', 'application/xml');
    res.send( fs.readFileSync(require('path').resolve(__dirname,'./sitemap.xml'), "utf8") );
});
// app.get('/robots.txt', function (req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });
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