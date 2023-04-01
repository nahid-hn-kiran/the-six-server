const { Category } = require('../models/CategoryModel')
const { Tag } = require('../models/TagModel')
const tagServices = require('../services/tag.services')

/**
 *
 * @@ Desc {Get all tags}
 * @@ Get {Get it at /api/v1/tag}
 * @@ Access {Admin}
 */
exports.getTagsController = async (req, res) => {
  try {
    const result = await tagServices.getTagsService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Post a tag}
 * @@ Post {Post it at /api/v1/tag}
 * @@ Access {Admin}
 */
exports.addTagController = async (req, res) => {
  try {
    const existTag = await Tag.findOne({ name: req.body.name })
    console.log(existTag)
    if (existTag) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Tag already exist.' })
    }
    const result = await tagServices.postTagService(req.body)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Update a tag}
 * @@ Put {Put it at /api/v1/tag/:id}
 * @@ Access {Admin}
 */
exports.updateTagController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await tagServices.updateTagService(id, req.body)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}

/**
 *
 * @@ Desc {Delete a tag}
 * @@ Delete {Get it at /api/v1/tag/:id}
 * @@ Access {Admin}
 */
exports.deleteTagController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await tagServices.deleteTagService(id)
    res.status(200).json({ status: 'success', success: true })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error })
  }
}
