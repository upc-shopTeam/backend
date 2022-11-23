const ownerSchema = require('../models/Owner')
const productSchema = require('../models/Product')
const employeeSchema = require('../models/Employee')
const invoiceSchema = require('../models/Invoice')
const bcrypt = require('bcrypt')
const userSchema = require('../models/User')

const addOwner = async (req, res) => {
  const owner = req.body
  const pass = bcrypt.genSaltSync(10)
  owner.password = bcrypt.hashSync(owner.password, pass)
  try {
    const owner = await ownerSchema.create(req.body)
    const user = await userSchema.create(
      {
        email: owner.email,
        password: owner.password,
        role: 'owner',
        dataId: owner.id
      }

    )
    res.status(200).json({
      msg: 'user created',
      data: { owner, user }
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}

const findByEmail = async (email) => {
  const rta = await ownerSchema.findOne(
    { email }
  )
  return rta
}

const getOwner = async (req, res) => {
  try {
    const owners = await ownerSchema.find()
    res.status(200).json(
      owners
    )
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
    return res.status(200).json(
      owner
    )
  } catch (e) {
    return res.status(400).json({
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
const getProductsbyOwnerId = async (req, res) => {
  const { id } = req.params
  try {
    const products = await productSchema.find({ owner: id })
    return res.status(200).json(
      products
    )
  } catch (e) {
    return res.status(401).json(
      {
        msg: e
      }
    )
  }
}
const getInvoicesByOwnerId = async (req, res) => {
  const { id } = req.params
  try {
    const invoices = await invoiceSchema.find({ owner: id })
    return res.status(200).json(
      invoices
    )
  } catch (e) {
    return res.status(401).json(
      {
        msg: e
      }
    )
  }
}
const getEmployeeByOwnerId = async (req, res) => {
  const { id } = req.params
  try {
    const employees = await employeeSchema.find({ owner: id })
    return res.status(200).json(
      employees
    )
  } catch (e) {
    return res.status(401).json(
      {
        msg: e
      }
    )
  }
}

module.exports = {
  addOwner,
  getOwner,
  getOwnerById,
  updateOwner,
  deleteOwner,
  getProductsbyOwnerId,
  getInvoicesByOwnerId,
  findByEmail,
  getEmployeeByOwnerId

}
