const conf = require ("./config/dotenv");

const app = require("./config/express");

app.listen(conf.port, () => {
  console.log(`🚀 Server ready at http://localhost:${conf.port}`);
});
