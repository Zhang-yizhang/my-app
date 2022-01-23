import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store"

//三级联动注册为全局组件
import TypeNav from "@/components/TypeNav"
Vue.component(TypeNav.name,TypeNav)


new Vue({
  render: (h) => h(App),
  // 需要是小写
  // 注册路由。router KV一致省略V
  // 注册路由信息：当这里书写路由的时候，组件身上都有$route、$router
  router,

  // 注册仓库：组件实例身上会多一个属性$store
  store
}).$mount("#app");
