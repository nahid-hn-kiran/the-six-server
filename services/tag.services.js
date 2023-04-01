const { Category } = require('../models/CategoryModel')
const { Tag } = require('../models/TagModel')

exports.getTagsService = async () => {
  const result = await Tag.find({})
  return result
}

exports.postTagService = async (tag) => {
  const result = await Tag.create(tag)
  return result
}

exports.updateTagService = async (tagId, tag) => {
  const result = await Tag.updateOne(
    { _id: tagId },
    { $set: tag },
    { runValidators: true }
  )
  return result
}

exports.deleteTagService = async (tagId) => {
  const result = await Tag.deleteOne({ _id: tagId })
  return result
}
