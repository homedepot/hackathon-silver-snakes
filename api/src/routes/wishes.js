const router = require('express').Router()
const Wish = require("../db/Wish");

router.get('/', function(req, res) {
    Wish.find()
    .then(function(wishes){
        res.json({wishes: wishes})
        console.log('wishes:', wishes)
    })
})

router.post('/', function(req, res) {
    Wish.create(req.body)
    .then(function(savedWish){
        res.json({wish: savedWish})
        // console.log('wishes:', wishes)
    })
})

module.exports = router

