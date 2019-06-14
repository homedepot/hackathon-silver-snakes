const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Child = new Schema({
  firstName: { type: String, required: true },
  age:  { type: String, required: true },
  hometown:  { type: String, required: true },
  illness:  { type: String, required: true }
})


module.exports = mongoose.model('Child', Child)