const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname, "../");
dotenv.config({ path: root(".env") });

export const port = process.env.PORT;
export const jwt_secret = process.env.JWT_SECRET;
export const db_url = process.env.DB_URL;
