const { HeroSlider } = require('../models/HeroSliderModel')

exports.postHeroSliderService = async (slider) => {
  const result = await HeroSlider.create(slider)
  return result
}

exports.getHeroSliderControllerService = async () => {
  const result = await HeroSlider.find({}).limit(5).sort({ createdAt: -1 })
  return result
}
