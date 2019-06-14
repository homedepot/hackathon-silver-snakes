const mongoose = require('mongoose')

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose')

const Account = new Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  admin:  { type: Boolean, required: true, default: false }
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('Account', Account)
