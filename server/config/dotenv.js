const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname, "../");
dotenv.config({ path: root(".env") });

module.exports.port = process.env.PORT;
module.exports.jwt_secret = process.env.JWT_SECRET;
module.exports.db_url = process.env.DB_URL;
