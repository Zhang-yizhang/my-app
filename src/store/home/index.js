// home仓库
import { reqBanners, reqFloors, reqCategoryList } from '@/api/index'

//仓库初始状态
const state = {
    categoryList: [],
    banners: [],
    floors:[]
}
// 修改数据
const mutations = {
    CATEGORYLIST(state, categoryLsit) {
        state.categoryList = categoryLsit
    },
    GETBANNERLIST(state, banners) {
        state.banners = banners
    },
    GETFLOORLIST(state, floors) {
        state.floors = floors
    }
}
// 发送请求
const actions = {
    // 异步获取首页所有分类数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        console.log(result)
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    // 异步获取广告位分类数据
    async getBannerList({ commit }) {
        const result = await reqBanners()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    //异步获取所有楼层数据
    async getFloorList({ commit }) {
        const result = await reqFloors();
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data)
        }
    }


}
const getters = {}
export default {
    state,
    mutations,
    getters,
    actions
}