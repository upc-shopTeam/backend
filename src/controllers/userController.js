const userSchema = require('../models/User')
const bcrypt = require('bcrypt')

const addUser = async (req, res) => {
  const user = req.body
  const pass = bcrypt.genSaltSync(10)
  user.password = bcrypt.hashSync(user.password, pass)

  try {
    const user = await userSchema.create(req.body)
    res.status(200).json({
      msg: 'user created',
      data: user
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const findByEmail = async (email) => {
  const rta = await userSchema.findOne(
    { email }
  )
  return rta
}
const getUser = async (req, res) => {
  try {
    const users = await userSchema.find()
    res.status(200).json({
      users
    })
  } catch (e) {
    res.status(400).json({
      msg: e
    })
  }
}
const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userSchema.findById(id)
    return res.status(200).json({
      user
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userSchema.updateOne({ _id: id }, req.body)
    res.status(200).json({
      msg: 'owner updated',
      user
    })
  } catch (e) {
    res.status(400).json({
      msg: 'error updating user'
    })
  }
}
const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userSchema.findByIdAndDelete(id)
    return res.status(200).json({
      msg: 'user deleted',
      user
    })
  } catch (e) {
    return res.status(400).json({
      msg: e
    })
  }
}

module.exports = {
  addUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  findByEmail
}
