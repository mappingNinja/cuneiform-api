const express = require("express");
const router = express.Router();

const addArticle = require("../controller/addArticle");
const deleteArticle = require("../controller/deleteArticle");
const getAllArticles = require("../controller/getAllArticles");
const editArticle = require("../controller/editArticle");

router.use("/addArticle", addArticle);
router.use("/deleteArticle", deleteArticle);
router.use("/getAllArticle", getAllArticles);
router.use("/editArticle", editArticle);

module.exports = router;
