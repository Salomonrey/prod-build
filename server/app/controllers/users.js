var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports.login = async function(req, res, next) {
  console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({
      success: false,
      msg: "Please pass correct username and password."
    });
  }
  const valid = await User.validPassword(password, user);

  if (!valid) {
    return res.json({
      success: false,
      msg: "Please pass correct username and password."
    });
  }
  // return json web token
  return res.json({
    success: true,
    token: User.generateJwt(user)
  });
};

module.exports.profile = function(req, res, next) {
  console.log(req.user);
  if (!req.user) {
    res.status(401).json({
      message: "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.user._id).exec(function(err, user) {
      res.status(200).json(user);
    });
  }
};

module.exports.signup = async function(req, res, next) {
  const { username, password } = req.body;
  const userData = await User.setPassword(password);
  const user = await User.create({
    username,
    password: userData.password,
    salt: userData.salt
  });
  if (!user) {
    res.status(401).json({
      message: "Please pass correct username and password."
    });
  }
  return res.json({
    success: true
  });
};
