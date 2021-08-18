/**
 * http.js
 * Date 2020-12-28 
 * author: liu 
 * uni-app 公用的请求文件
 * @promise 
 * @async
 * @await
 * Date 2020-12-28 
 * 
 * */
 

 /**
  * 请求的方法
  * @param {String}  url
  * @param {Object}  data 
  * @param {String}  method 
  * @returns {Object} Promise
  * */
const http = (url='/',data={},method='GET') => {
        return new Promise((resolve, reject) => {
            uni.request({
                url,
                method,
                data,
                dataType: 'json',
                success: (res) => {
					resolve(res.data);
                },
                fail: (err) => {
                    reject(err)
                }
            });
        })
    }



// 公共方法
const awaitWrap = (promise) => {
    return promise
        .then(data => [null, data.data])
        .catch(err => [err.data, null])
}

// 请求的结果
const uniRequest = async (url,param,method) =>{
    const [err, data] = await awaitWrap(http(url,param,method))
    const obj = {err,data}
    return obj
}

export default uniRequest
