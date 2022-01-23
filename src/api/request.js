import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"
//引入nprogress 样式文件
//start方法：进度条开始
//done方法：进度条结束

//axios配置: 创建axios实例
let requests = axios.create({
    //基础路径，发送请求的时候，加上“/api”
    baseURL:"/api",
    //请求时间
    timeout:5000
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config:配置对象，里面有headers属性
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    nprogress.done()
    return res.data
},(err)=>{
    //请求失败的处理
   return Promise.reject(new Error("faile"))
})

//对外暴露
export default requests