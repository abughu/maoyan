
const movieModel = require('../../models/movie')

//处理影片列表获取
const getMovieList = async (req,res,next) => {
  // console.log("info:"+movieModel.getMovieList());
  res.data = await  movieModel.getMovieList()
  // let status={
  //   code:'200',
  //   msg:'request is success'
  // }
  // res.render('default',{status,data})
  next("success")
}

module.exports = {
  getMovieList
}