const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Superstars = new Schema({
  firstName: { type: String, required: true },
  age:  { type: String, required: true },
  hometown:  { type: String, required: true },
  illness:  { type: String }
})


module.exports = mongoose.model('Superstars', Superstars)