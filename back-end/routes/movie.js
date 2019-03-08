const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie')
const { response } = require('../middlewares')


//获取电影信息
router.get('/items',movieController.getMovieList, response)
//发布电影信息
router.post('/item', movieController.postMovieItem, response)


module.exports = router
