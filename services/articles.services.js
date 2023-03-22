const { Article } = require('../models/ArticleModel')

exports.postArticleService = async (article) => {
  const createArticle = await Article.create(article)
  return createArticle
}
