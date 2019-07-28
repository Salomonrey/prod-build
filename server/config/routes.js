const express = require("express");
const jwt = require("express-jwt");
const router = express.Router();

var ctrlSubcategory = require("../app/controllers/subcategories");
var ctrlMail = require("../app/controllers/mail");
var ctrlCategory = require("../app/controllers/categories");
var ctrlPosts = require("../app/controllers/posts");
var ctrlUsers = require("../app/controllers/users");
var conf = require("./dotenv")

const auth = jwt({
  secret: conf.jwt_secret,
  credentialsRequired: false
});

router.post("/login", ctrlUsers.login);
router.post("/signup", ctrlUsers.signup);
router.get("/profile", auth, ctrlUsers.profile);

router.post("/posts", ctrlPosts.getPosts);
router.post("/post", ctrlPosts.getPost);
router.post("/addpost", auth, ctrlPosts.addPost);
router.post("/update", auth, ctrlPosts.updatePost);
router.post("/delete", auth, ctrlPosts.deletePost);

router.post("/upload", auth, ctrlPosts.upload);

router.get("/categories", ctrlCategory.getCategories);
router.post("/category", ctrlCategory.getCategory);
router.post("/addcategory", auth, ctrlCategory.addCategory);
router.post("/updatecategory", auth, ctrlCategory.updateCategory);
router.post("/deletecategory", auth, ctrlCategory.deleteCategory);

router.get("/subcategories", ctrlCategory.getCategories);
router.post("/addsubcategory", auth, ctrlSubcategory.addSubcategory);
router.post("/updatesubcategory", auth, ctrlSubcategory.updateSubcategory);
router.post("/deletesubcategory", auth, ctrlSubcategory.deleteSubcategory);

router.post("/sendmail", ctrlMail.sendMail);

module.exports = router;
