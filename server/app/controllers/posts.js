var mongoose = require("mongoose");
var multer = require("multer");
const logger = require("../../config/logger");
var Post = mongoose.model("Post");
var fs = require('fs');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

module.exports.getPosts = async function(req, res) {
  if (req.body.cat_name) { 
  Post.find({ 
  category: req.body.cat_name, 
  subcategory: req.body.sub_cat_name 
  }).exec(function(err, post) { 
  res.status(200).json(post); 
  }); 
  } else { 
  Post.find({}).exec(function(err, post) { 
  res.status(200).json(post); 
  }); 
  } 
};

module.exports.addPost = async function(req, res) {
  if(req.user){
  var newTree = await new Post({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    body: req.body.main,
    main_foto:req.body.src,
    subcategory: req.body.subcategory
  });
  newTree.save(function(err) {
    console.log(err);
    if (err) {
      logger.error(err);
      return res.json({ success: false, msg: "Post already exists." });
    }
    res.json({ success: true, msg: "Successful created new post." });
  });
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

module.exports.getPost = async function(req, res) {
  Post.find({ _id: req.body.id }).exec(function(err, post) {
    res.status(200).json(post);
  });
};

module.exports.updatePost = function(req, res) {
  if(req.user){
  Post.updateOne(
    { _id: mongoose.Types.ObjectId(req.body.id) },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        body: req.body.main,
        main_foto:req.body.src,
        subcategory: req.body.subcategory
      }
    }
  ).exec(function(err, post) {
    if (err) {
      logger.error(err);
      return res.json({ success: false, msg: "Error." });
    }
    res.status(200).json(post);
  });
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

module.exports.deletePost = function(req, res) {
  if(req.user){
  Post.deleteOne({ _id: mongoose.Types.ObjectId(req.body.id) }).exec(function(
    err,
    post
  ) {
    if (err) {
      logger.error(err);
      return res.json({ success: false, msg: "Error." });
    }
    res.status(200).json(post);
  });
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

module.exports.upload = function(req, res) {
  if(req.user){
  var maxsize = 2 * 1024 * 1024;
  var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  upload(req, res, function(err) {
    console.log(req.file);
    // if(req.file){
    //      if (req.file.size > maxsize) {
    //      fs.unlinkSync(req.file.path);
    //      return res.json({success: false, msg: 'File is so more than 2 Mb'});
    //    }
    //    if(supportMimeTypes.indexOf(req.file.mimetype) == -1) {
    //      fs.unlinkSync(req.file.path);
    //      return res.json({success: false, msg: 'Unsupported mimetype'});
    //     }
    //   }
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      logger.error(err);
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
  } else {
    return res.json({
      success: false,
      message: "Token is not valid"
    });
  }
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFlY2NjZWNmMzc1ZTA2Nzg4MGRlOTAiLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYyOTA0NTU5LCJpYXQiOjE1NjIyOTk3NTl9.T4HRVt41FTp0d2izFjYDli3oIltIwXS2MK7PrkcVROc
