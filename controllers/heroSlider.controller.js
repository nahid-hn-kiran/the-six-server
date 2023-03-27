const {
  postHeroSliderService,
  getHeroSliderControllerService,
} = require('../services/heroSlider.services')

/**
 *
 * @@ Desc {Post a slider for Hero slider section}
 * @@ Post {Post it at /api/v1/heroslider}
 * @@ Access {Admin}
 */
exports.postHeroSliderController = async (req, res) => {
  try {
    const { title, content, thumbnail, postUrl } = req.body
    const { name } = req.user
    const slider = {
      author: name,
      title,
      content,
      thumbnail,
      postUrl,
    }
    const result = await postHeroSliderService(slider)
    res.status(200).json({ status: 'success', message: 'slider created' })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
/**
 *
 * @@ Desc {Get sliders for Hero slider section}
 * @@ Post {Get it at /api/v1/heroslider}
 * @@ Access {Public}
 */
exports.getHeroSliderController = async (req, res) => {
  try {
    const result = await getHeroSliderControllerService()
    res.status(200).json({ status: 'success', data: result })
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message })
  }
}
