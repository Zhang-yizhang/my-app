import Vue from "vue";
import Vuex from "vuex";
import home from './home'
import search from './search'

//使用插件一次
Vue.use(Vuex)

//对外暴露Store类的一个实例
export default new Vuex.Store({
   modules:{
       home,
       search
   }
})