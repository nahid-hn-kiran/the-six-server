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

exports.getFirstTwoArticleService = async () => {
  const result = await Article.find({}).limit(2).sort({ createdAt: -1 })
  return result
}

exports.getEightArticlesService = async () => {
  const result = await Article.find({}).limit(8).sort({ createdAt: -1 }).skip(2)
  return result
}
exports.getTWoArticlesBottomService = async () => {
  const result = await Article.find({})
    .limit(2)
    .sort({ createdAt: -1 })
    .skip(10)
  return result
}
exports.getFeaturedArticlesService = async () => {
  const result = await Article.find({}).limit(5).sort({ createdAt: -1 })
  return result
}
