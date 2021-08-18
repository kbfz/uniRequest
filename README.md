# uni-request-app

> 基于Promise封装uni-app的request方法

## asycn await

``` 
  const uniRequest = async (url,param,method) =>{
    const [err, data] = await awaitWrap(http(url,param,method))
    const obj = {err,data}
    return obj
}

返回的是个promise对象 
用法: 
    
    if (!data.err) return; // 错误判断
    this.info = data.data

```

## 致谢 && 参考
* [axios](https://github.com/axios/axios)

## License
MIT

