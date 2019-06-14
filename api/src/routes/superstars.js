const router = require('express').Router()
const Superstars = require("../db/superstars");

router.post('/', function(req, res) {
  Superstars.create(req.body)
    .then(function(savedStar){
        res.json({superstar: savedStar})
    })
})



module.exports = router

