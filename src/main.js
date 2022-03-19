import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store"

//三级联动注册为全局组件
import TypeNav from "@/components/TypeNav/index"
import Carousel from "@/components/Carousel"
// import Pagination from "@/components/Pagination"
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
// Vue.component(Pagination.name, Pagination)

//引入mockServer模拟接口
import '@/mock/mockServer'

// 引入swiper样式
import 'swiper/css/swiper.css'
new Vue({
  render: (h) => h(App),
  // 注册全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 需要是小写
  // 注册路由。router KV一致省略V
  // 注册路由信息：当这里书写路由的时候，组件身上都有$route、$router
  router,

  // 注册仓库：组件实例身上会多一个属性$store
  store
}).$mount("#app");
