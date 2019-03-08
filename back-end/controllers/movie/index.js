
const movieModel = require('../../models/movie')
const moment = require('moment')


//处理影片列表获取
const getMovieList = async (req,res,next) => {
  // console.log("info:"+movieModel.getMovieList());
  let data = await movieModel.getMovieList()
  res.responseData = data.map(item => {
    //对数据进行处理后再返回
    let state = (Date.now() - item.showTime) > 0 ? 'playing' : 'coming'
    let publishTime = moment(item.publishTime).format('YYYY-MM-DD')
    let showTime = moment(item.showTime).format('YYYY-MM-DD')
    // console.log(state,publishTime,showTime);
    return Object.assign({}, item._doc, {
        state, publishTime, showTime
    })
})
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