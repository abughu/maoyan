
const request = (options) => {

  return new Promise((resolve,reject)=>{
    $.ajax({
      ...options,
      success (res){
        if( res.code >= 200 && res.code <300 ||res.code==304 ){
          //成功处理
          $.Toast('Success', '数据请求成功', 'success')
          console.log('success')
          resolve(res.data) 
        }else{
          //请求失败处理
          console.log('fail');
        }
      },
      error (error){
        //请求失败处理
        console.log('error:',error);
        reject(error)
      }
    })
  })
}

export default request