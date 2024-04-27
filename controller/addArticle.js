const Articles = require("../models/articles");

const addArticle = async (req, res) => {
  const { title, slug, category, description } = req?.body;
  if (!title) return res.status(400).json({ error: "Missing title" });
  try {
    let existingArticle = await Articles.findOne({
      $or: [{ title: title }, { slug: slug }],
    });
    if (!existingArticle) {
      const articles = await Articles.create({
        title,
        slug,
        category,
        description,
      });

      if (articles) {
        return res
          .status(200)
          .json({ success: "true", message: "Article Created successfully!" });
      } else {
        return res.status(500).json({ error: "Server Error" });
      }
    } else {
      return res.status(200).json({ message: "Article already exists" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = addArticle;
