// home仓库
import getData from '@/api/index'
import { mapState } from 'vuex/dist/vuex.common'

const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryLsit) {
        state.categoryList = categoryLsit
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await getData()
        console.log(result)
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    }
}
const getters = {}
export default{
    state,
    mutations,
    getters,
    actions
}