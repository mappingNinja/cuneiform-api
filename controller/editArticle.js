const Articles = require("../models/articles");

const editArticle = async (req, res) => {
  const { title, slug, category, description } = req?.body;
  if (!title) return res.status(400).json({ error: "Missing fields" });
  try {
    let article = await Articles.findOneAndUpdate(
      { title: title },
      {
        slug,
        category,
        description,
        updatedAt: new Date(),
      }
    );
    if (article) {
      return res
        .status(200)
        .json({ success: "true", message: "Article updated Successfully" });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = editArticle;
