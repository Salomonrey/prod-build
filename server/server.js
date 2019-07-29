import { port } from "./config/dotenv";

const app = require("./config/express");

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
