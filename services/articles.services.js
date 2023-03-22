const { Article } = require('../models/ArticleModel')

exports.postArticleService = async (article) => {
  const createArticle = await Article.create(article)
  return createArticle
}

exports.upadteArticleService = async (articleId, data) => {
  const article = await Article.findById(articleId)
  const result = await article.set(data).save()
  return result
}

exports.deleteArticleByIdService = async (id) => {
  const deletedArticle = await Article.deleteOne({ _id: id })
  return deletedArticle
}

exports.getAllArticlesService = async () => {
  const result = await Article.find({})
  return result
}

exports.getArticleByIdService = async (id) => {
  const result = await Article.findById(id)
  return result
}
