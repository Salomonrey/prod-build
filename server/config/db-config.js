const mongoose = require("mongoose");
import { db_url } from "./dotenv";

mongoose.Promise = global.Promise;

mongoose.connect(
  db_url,
  { useNewUrlParser: true, useCreateIndex: true }
);
mongoose.set("useFindAndModify", false);
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${db_url}`)
);

require("../app/models/user");
require("../app/models/post");
require("../app/models/category");
require("../app/models/subcategory");
