const Articles = require("../models/articles");

const getAllArticles = async (req, res) => {
  try {
    const articles = await Articles.find({}, { _id: 0, __v: 0 });

    return res
      .status(200)
      .json({ success: true, data: articles, totalArticles: articles?.length });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getAllArticles;
