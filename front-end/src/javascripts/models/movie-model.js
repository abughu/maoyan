import request from '@utils/request'
//获取电影数据
const getMovieItems = () => {
  // return $.ajax({
  //   url:'/api/v1/movie/items'
  // })
  return request({
    url:'/api/v1/movie/items'
  })
}

export {
  getMovieItems
}