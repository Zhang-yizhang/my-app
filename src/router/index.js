//引入路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//引入路由组件
import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Search from '../pages/Search/index.vue'


//先把VueRouter原型对象的push方法复制一份
let originPush = VueRouter.prototype.push

//重写push||replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}




//路由配置
export default new VueRouter({
    routes:[
        {
            // 路径：
            path:"/home",
            component:Home
        },
        {
            // 路径：
            path:"/login",
            component:Login,
        },
        // 重定向，在项目跑起来的时候，访问"/",立马定向到首页
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/search/:keyWord?",
            component:Search,
            name:"search",
            // 路由组件传递参数
            // 1.布尔值形式：传递params
            //props:true
            // 2.对象写法：额外的给路由组件传递一些props
            //props:{a:1,b:2}
            // 3.函数写法：可传递params参数、query参数，通过props传递给路由组件
            props:($route)=>{
                return{keyWord:$route.params.keyWord,k:$route.query.k}
            }
        }

    ]
})