const mongoose = require('mongoose')

const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose')

const Account = new Schema({
  firstName: String,
  lastName:  String,
  admin:  { type: Boolean, required: true, default: false }
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('Account', Account)
