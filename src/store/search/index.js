// search仓库

/* 
管理搜索模块的数据
*/
import { reqGetSearchInfo, reqProductList } from "@/api"


//仓库初始状态
const state = {
    searchList: [],
    productList: {}, // 搜索出的商品列表相关数据的对象 
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    },
    GETPRODUCTLIST(state, productList) {
        state.productList = productList
    }
}
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        const result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    },
    async getProductList({ commit }, searchParams) {
        searchParams = { ...searchParams }
        // 过滤掉searchParams对象中所有属性值为空串的属性
        // Object.keys(obj): 得到对象本身所有属性名的数组
        Object.keys(searchParams).forEach(key => {
            if (searchParams[key] === '') {
                delete searchParams[key]
            }
        })

        //发送请求
        const result = await reqProductList(searchParams)
        if (result.code === 200) {
            const productList = result.data
            commit('GETPRODUCTLIST', productList)
        }

    }

}
const getters = {
    // 返回商品组件列表
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    // 返回属性列表
    attrsList(state) {
        return state.searchList.attrsList || []
    },

    // 商品列表
    goodsList(state) {
        return state.searchList.goodsList || []
    }

}
export default {
    state,
    mutations,
    getters,
    actions
}