const ownerSchema = require('../models/Owner')
const shopSchema = require('../models/Shop')

const addOwner = async (req, res) => {
  try {
    const owner = await ownerSchema.create(req.body)
    res.status(200).json({
      msg: 'owner created',
      data: owner
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getOwner = async (req, res) => {
  try {
    const owners = await ownerSchema.find()
    res.status(200).json({
      owners
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getOwnerById = async (req, res) => {
  const { id } = req.params
  try {
    const owner = await ownerSchema.findById(id)
    return res.status(200).json({
      owner
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}
const getShopByOwnerId = async (req, res) => {
  const { id } = req.params
  try {
    const shop = await shopSchema.find({ owner: id })
    return res.status(200).json({
      shop
    })
  } catch (e) {
    return res.status(401).json({
      msg: e
    })
  }
}
const updateOwner = async (req, res) => {
  const { id } = req.params
  try {
    const owner = await ownerSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'owner updated',
      owner
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating owner'
    })
  }
}
const deleteOwner = async (req, res) => {
  const { id } = req.params
  try {
    const owner = await ownerSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'owner deleted',
      owner
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

module.exports = {
  addOwner,

  getOwner,
  getOwnerById,
  updateOwner,
  deleteOwner,
  getShopByOwnerId
}
