const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Wish = new Schema({
  type: { type: String, required: true },
  details:  { type: String, required: true },
  status:  { type: String, default: "new" },
  sponsor: { type: String},
  childId:  { type: Number, required: true }
})


module.exports = mongoose.model('Wish', Wish)