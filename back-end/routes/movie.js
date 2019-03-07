const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')


//获取电影信息
router.get('/items',movieController.getMovieList)

module.exports = router
