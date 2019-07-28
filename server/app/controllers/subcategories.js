var mongoose = require("mongoose");
const logger = require("../../config/logger");
var Category = mongoose.model("Category");

module.exports.addSubcategory = async function(req, res) {
  if (req.user) {
  Category.updateOne(
    { name: req.body.cat_name },
    {
      $push: {
        subcategory: {
          name: req.body.name,
          description: req.body.description
        }
      }
    },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json({ success: true, msg: "Successful created new post." });
      }
    }
  );
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

module.exports.updateSubcategory = function(req, res) {
  if(req.user){
  Category.updateOne(
    {
      name: req.body.cat_name,
      "subcategory.name": req.body.name
    },
    {
      $set: {
        "subcategory.$.name": req.body.new_name,
        "subcategory.$.description": req.body.description
      }
    },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json({ success: true, msg: "Successful created new post." });
      }
    }
  );
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

module.exports.deleteSubcategory = function(req, res) {
  if(req.user){
  Category.updateOne(
    {
      name: req.body.cat_name
    },
    {
      $pull: { subcategory: { name: req.body.name } }
    },
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      } else {
        res.json({ success: true, msg: "Successful deleted post." });
      }
    }
  );
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFlY2NjZWNmMzc1ZTA2Nzg4MGRlOTAiLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYyOTA0NTU5LCJpYXQiOjE1NjIyOTk3NTl9.T4HRVt41FTp0d2izFjYDli3oIltIwXS2MK7PrkcVROc
