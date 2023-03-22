const { postArticleService } = require('../services/articles.services')

exports.postArticle = async (req, res) => {
  try {
    const { _id } = req.user
    const { title, article, thumbnail, comments } = req.body
    const theArticle = {
      author: _id,
      title,
      article,
      thumbnail,
      comments,
    }
    const createdArticle = await postArticleService(theArticle)
    res
      .status(200)
      .json({ status: 'success', message: 'article is created succesfully.' })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}
