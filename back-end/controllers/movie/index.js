
const movieModel = require('../../models/movie')

//处理影片列表获取
const getMovieList = (req,res,next) => {
  let data = movieModel.getMovieList()
  res.json(data)
}

module.exports = {
  getMovieList
}