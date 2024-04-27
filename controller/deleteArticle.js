const Articles = require("../models/articles");

const deleteOffer = async (req, res) => {
  const { title } = req?.body;
  if (!title) return res.status(400).json({ error: "Missing fields" });
  try {
    const article = await Articles.findOneAndDelete({
      title,
    });

    if (!article) {
      return res.status(404).send({
        message: "Article not found!",
      });
    }
    res.status(200).send({
      success: true,
      message: "Article deleted successful!",
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = deleteOffer;
