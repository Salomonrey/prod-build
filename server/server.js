import { port } from "./config/dotenv";

const app = require("./config/express");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
 // res.setHeader('Content-Type', 'text/event-stream')
 // res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
