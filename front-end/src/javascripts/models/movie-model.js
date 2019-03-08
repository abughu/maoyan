
//获取电影数据
const getMovieItems = () => {
  return $.ajax({
    url:'/api/v1/movie/items'
  })
}

export {
  getMovieItems
}