
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });

// 电影item Schema （规定文档的格式）
var movieItemSchema = new mongoose.Schema({
  img: String,
  title:   String,
  star: String,
  showTime: Number,
  publishTime: Number,
  description: String
});
// console.log("1");
// 单数会自动加s （集合）
var Items = mongoose.model('item', movieItemSchema);

// Items.find({}).exec().then(res => {
//   console.log(res);
// })

// 获取电影信息
const getMovieList =  () => {
  return Items.find({}).exec();
  // console.log(data);
  // return data;
}

// let movieList=[
//   {
//     "id": 1,
//     "img": "http://p0.meituan.net/w.h/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg",
//     "title": "驯龙高手3",
//     "star": "杰伊·巴鲁切尔,刘昊然,亚美莉卡·费雷拉",
//     "showTime": "2019-03-01",
//     "publishTime": "2019-02-28",
//     "description":"哈哈哈啊啊啊啊啊啊"
//   }
// ]

// const getMovieList = () => {
//   return movieList
// }

module.exports = {
  getMovieList
}