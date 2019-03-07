const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const { response } = require('../middlewares')


//获取电影信息
router.get('/items',movieController.getMovieList, response)

module.exports = router
