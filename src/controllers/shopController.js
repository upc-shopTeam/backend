const shopSchema = require('../models/Shop')
const campusSchema = require('../models/Campus')

const addShop = async (req, res) => {
  try {
    const shop = await shopSchema.create(req.body)
    res.status(200).json({
      msg: 'shop created',
      data: shop
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getShops = async (req, res) => {
  try {
    const shops = await shopSchema.find()
    res.status(200).json({
      shops
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getShopById = async (req, res) => {
  const { id } = req.params
  try {
    const shop = await shopSchema.findById(id)
    return res.status(200).json({
      shop
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const updateShop = async (req, res) => {
  const { id } = req.params
  try {
    const shop = await shopSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'shop updated',
      shop
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating shop'
    })
  }
}
const deleteShop = async (req, res) => {
  const { id } = req.params
  try {
    const shop = await shopSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'shop deleted',
      shop
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getCampusByShopId = async (req, res) => {
  const { id } = req.params
  try {
    const campus = await campusSchema.find({ shop: id })
    return res.status(200).json({
      campus
    })
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}

module.exports = {
  addShop,
  getShops,
  getShopById,
  updateShop,
  deleteShop,
  getCampusByShopId
}
