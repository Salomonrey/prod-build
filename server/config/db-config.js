const mongoose = require("mongoose");
const conf = require("./dotenv");

mongoose.Promise = global.Promise;

mongoose.connect(
  conf.db_url,
  { useNewUrlParser: true, useCreateIndex: true }
);
mongoose.set("useFindAndModify", false);
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${conf.db_url}`)
);

require("../app/models/user");
require("../app/models/post");
require("../app/models/category");
require("../app/models/subcategory");
