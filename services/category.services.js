const { Category } = require('../models/CategoryModel')

exports.getCategoriesService = async () => {
  const result = await Category.find({})
  return result
}

exports.postCategoryService = async (category) => {
  const result = await Category.create(category)
  return result
}

exports.updateCategoryService = async (categoryId, category) => {
  const result = await Category.updateOne(
    { _id: categoryId },
    { $set: category },
    { runValidators: true }
  )
  return result
}

exports.deleteCategoryService = async (categoryId) => {
  const result = await Category.deleteOne({ _id: categoryId })
  return result
}
