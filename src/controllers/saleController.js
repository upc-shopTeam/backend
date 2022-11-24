const saleSchema = require('../models/Sale')
const productSchema = require('../models/Product')
const createSale = async (req, res) => {
  const { id } = req.params
  req.body.product = id
  const product = await productSchema.findById(id)
  req.body.total = product.unitPrice * req.body.amount
  req.body.nameProduct = product.name
  console.log(req.body.date)
  try {
    const sale = await saleSchema.create(req.body)
    res.status(200).json(
      sale
    )
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
module.exports = {
  createSale
}
