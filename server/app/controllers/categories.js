var mongoose = require("mongoose");
const logger = require("../../config/logger");
var Category = mongoose.model("Category");

module.exports.getCategories = async function(req, res) {

    Category.find().exec(function(err, post) {
      res.status(200).json(post);
    });

};

module.exports.addCategory = async function(req, res) {
  var newTree = await new Category({
    name: req.body.name,
    description: req.body.description
  });
  newTree.save(function(err) {
    if (err) {
      logger.error(err);
      return res.json({ success: false, msg: "Category already exists." });
    }
    res.json({ success: true, msg: "Successful created new post." });
  });
};

module.exports.getCategory = async function(req, res) {
  console.log(req.body.name);
  Category.find({ name: req.body.name }).exec(function(err, post) {
    res.status(200).json(post);
  });
};

module.exports.updateCategory = function(req, res) {
  console.log(req.body);

  Category.updateOne(
    { _id: mongoose.Types.ObjectId(req.body.id) },
    {
      $set: {
        name: req.body.name,
        description: req.body.description
      }
    }
  ).exec(function(err, post) {
    if (err) {
      logger.error(err);
      return res.json({ success: false, msg: "Error." });
    }
    res.status(200).json(post);
  });
};

module.exports.deleteCategory = function(req, res) {
  Category.deleteOne({ _id: mongoose.Types.ObjectId(req.body.id) }).exec(
    function(err, post) {
      if (err) {
        logger.error(err);
        return res.json({ success: false, msg: "Error." });
      }
      res.status(200).json(post);
    }
  );
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFlY2NjZWNmMzc1ZTA2Nzg4MGRlOTAiLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYyOTA0NTU5LCJpYXQiOjE1NjIyOTk3NTl9.T4HRVt41FTp0d2izFjYDli3oIltIwXS2MK7PrkcVROc
