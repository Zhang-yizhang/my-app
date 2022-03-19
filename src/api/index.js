import requests from "./request";
import mockAjax from './ajaxMock'


let url = "/product/getBaseCategoryList"
export default function getData() {
   return requests({ url, method: "get" })
}
export const reqCategoryList = () => requests({ url: url, method: 'get' })
// 传递对象数据
export const getSearchInfo = (params) => {
   return requests({
      url: "/list",
      method: 'post',
      data: params
   })
}
// 请求搜索模块数据
export const reqGetSearchInfo = (params) => {
   return requests({
      url: '/list',
      method: 'post',
      data: params
   })
}
// 获取广告轮播列表
export const reqBanners = () => mockAjax.get('/banners')

// 获取首页楼层列表
export const reqFloors = () => mockAjax.get('/floors')
