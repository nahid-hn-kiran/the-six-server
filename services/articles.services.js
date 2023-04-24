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
    .sort({ createdAt: -1 })
    .populate('author', 'name imgURL')
  return result
}

exports.getArticleByIdService = async (id) => {
  const result = await Article.findById(id)
    .populate('author', 'name imgURL')
    .populate('comments.author', '_id name imgURL role status')
  return result
}

exports.getFirstTwoArticleService = async () => {
  const result = await Article.find({})
    .limit(2)
    .sort({ createdAt: -1 })
    .populate('author', 'name imgURL')
  return result
}

exports.getEightArticlesService = async () => {
  const result = await Article.find({})
    .limit(8)
    .sort({ createdAt: -1 })
    .skip(2)
    .populate('author', 'name imgURL')
  return result
}
exports.getTWoArticlesBottomService = async () => {
  const result = await Article.find({})
    .limit(2)
    .sort({ createdAt: -1 })
    .skip(10)
    .populate('author', 'name imgURL')
  return result
}
exports.getFeaturedArticlesService = async () => {
  const result = await Article.find({})
    .limit(5)
    .sort({ createdAt: -1 })
    .populate('author', 'name imgURL')
  return result
}

exports.postCommentService = async (artcleId, comment) => {
  const article = await Article.findById(artcleId)
  article.comments.push(comment)
  await article.save()
}

exports.getAllFootballArticlesService = async () => {
  const result = await Article.find({ category: 'Football' })
    .sort({ createdAt: -1 })
    .populate('author', 'name imgURL')
  return result
}

exports.getAllCricketArticlesService = async () => {
  const result = await Article.find({ category: 'Cricket' })
    .sort({ createdAt: -1 })
    .populate('author', 'name imgURL')
  return result
}
