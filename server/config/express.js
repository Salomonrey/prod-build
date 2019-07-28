const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();

require("./db-config");

const route = require("./routes");

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  compression({
    threshold: 512
  })
);

app.use("/api", route);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-type,Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/public", express.static("./public"));

module.exports = app;
