const mongoose = require("mongoose");
const crypto = require("crypto");
const { Schema } = mongoose;
import { jwt_secret } from "../../config/dotenv";
var jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String
});

UserSchema.statics.generateJwt = function(user) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      exp: parseInt(expiry.getTime() / 1000)
    },
    jwt_secret
  );
};

UserSchema.statics.setPassword = function(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  return {
    password: crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex"),
    salt: salt
  };
};

UserSchema.statics.validPassword = function(password, user) {
  var hash = crypto
    .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === user.password;
};

const User = mongoose.model("User", UserSchema);
//
// module.exports = {
//   User
// };
