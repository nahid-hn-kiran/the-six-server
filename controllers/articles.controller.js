const {
  postArticleService,
  upadteArticleService,
  deleteArticleByIdService,
  getAllArticlesService,
  getArticleByIdService,
  getFirstTwoArticleService,
  getEightArticlesService,
  getTWoArticlesBottomService,
  getFeaturedArticlesService,
  postCommentService,
  getAllFootballArticlesService,
  getAllCricketArticlesService,
  getAllTennisArticlesService,
  getAllBasketballArticlesService,
} = require('../services/articles.services')

/**
 *
 * @@ Desc {Post an article}
 * @@ Post {Post it at /api/v1/articles}
 * @@ Access {Admin}
 */
exports.postArticle = async (req, res) => {
  try {
    const { _id } = req.user
    const { title, article, category, tags, thumbnail, thumbnailTitle } =
      req.body
    const theArticle = {
      author: _id,
      title,
      article,
      category,
      thumbnailTitle,
      tags: tags,
      thumbnail,
    }
    const createdArticle = await postArticleService(theArticle)
    res
      .status(200)
      .json({ status: 'success', message: 'article is created succesfully.' })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Update an article}
 * @@ Put {Put it at /api/v1/articles/:id}
 * @@ Access {Admin}
 */
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params
    const result = await upadteArticleService(id, req.body)
    res.status(200).json({ status: 'success', message: 'successfully updated' })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Delete an article}
 * @@ Put {Delete it at /api/v1/articles/:id}
 * @@ Access {Admin}
 */
exports.deleteArticleById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await deleteArticleByIdService(id)
    res.status(200).json({ status: 'success', message: 'successfully deleted' })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all the articles}
 * @@ Get {Get it at /api/v1/articles}
 * @@ Access {Public}
 */
exports.getAllArticles = async (req, res) => {
  try {
    const result = await getAllArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get a single article}
 * @@ Get {Get it at /api/v1/articles/:id}
 * @@ Access {Public}
 */
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await getArticleByIdService(id)
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get FIrst two article}
 * @@ Get {Get it at /api/v1/articles/getfirsttwo}
 * @@ Access {Public}
 */
exports.getFirstTwoArticle = async (req, res) => {
  try {
    const result = await getFirstTwoArticleService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get FIrst two article}
 * @@ Get {Get it at /api/v1/articles/getfirsttwo}
 * @@ Access {Public}
 */
exports.getEightArticles = async (req, res) => {
  try {
    const result = await getEightArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get FIrst two article}
 * @@ Get {Get it at /api/v1/articles/getfirsttwo}
 * @@ Access {Public}
 */
exports.getTWoArticlesBottom = async (req, res) => {
  try {
    const result = await getTWoArticlesBottomService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get Featured articles for slider}
 * @@ Get {Get it at /api/v1/articles/featured-article}
 * @@ Access {Public}
 */
exports.getFeaturedArticles = async (req, res) => {
  try {
    const result = await getFeaturedArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {POST Comment for a article}
 * @@ Get {POST it at /api/v1/articles/:id/commentt}
 * @@ Access {Logged in user}
 */
exports.postComment = async (req, res) => {
  try {
    const { id } = req.params
    const comment = req.body
    const theComment = {
      comment: comment.comment,
      author: req.user._id,
    }
    const result = await postCommentService(id, theComment)
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all football articles}
 * @@ Get {Get it at /api/v1/articles/football}
 * @@ Access {Public}
 */
exports.getFootballArticles = async (req, res) => {
  try {
    const result = await getAllFootballArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all football articles}
 * @@ Get {Get it at /api/v1/articles/cricket}
 * @@ Access {Public}
 */
exports.getCricketArticles = async (req, res) => {
  try {
    const result = await getAllCricketArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all football articles}
 * @@ Get {Get it at /api/v1/articles/tennis}
 * @@ Access {Public}
 */
exports.getTennisArticles = async (req, res) => {
  try {
    const result = await getAllTennisArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}

/**
 *
 * @@ Desc {Get all football articles}
 * @@ Get {Get it at /api/v1/articles/tennis}
 * @@ Access {Public}
 */
exports.getBasketballArticles = async (req, res) => {
  try {
    const result = await getAllBasketballArticlesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(401).json({ status: 'fail', message: error.message })
  }
}
