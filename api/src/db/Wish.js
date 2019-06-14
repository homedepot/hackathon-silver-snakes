const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Wish = new Schema({
  type: { type: String, required: true },
  details:  { type: String, required: true },
  status:  { type: String, default: "new" },
  sponsor: { type: String, default: null},
  superStarID:  { type: Number, required: true }
  }, {timestamps: true}
)


module.exports = mongoose.model('Wish', Wish)