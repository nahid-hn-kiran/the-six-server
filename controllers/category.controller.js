const { Category } = require('../models/CategoryModel')
const categoryServices = require('../services/category.services')

/**
 *
 * @@ Desc {Get all Category}
 * @@ Get {Get it at /api/v1/category}
 * @@ Access {Admin}
 */
exports.getCategoriesController = async (req, res) => {
  try {
    const result = await categoryServices.getCategoriesService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Post A Category}
 * @@ Post {Post it at /api/v1/category}
 * @@ Access {Admin}
 */
exports.addCategoryController = async (req, res) => {
  try {
    const existCategory = await Category.findOne({ name: req.body.name })
    if (existCategory) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Category already exist.' })
    }
    const result = await categoryServices.postCategoryService(req.body)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Update a category}
 * @@ Put {Put it at /api/v1/category/:id}
 * @@ Access {Admin}
 */
exports.updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await categoryServices.updateCategoryService(id, req.body)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Dele a category}
 * @@ Delete {Delete it at /api/v1/category/:id}
 * @@ Access {Admin}
 */
exports.deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await categoryServices.deleteCategoryService(id)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}
