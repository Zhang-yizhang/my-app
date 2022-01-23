import requests from "./request";

let url = "/product/getBaseCategoryList"
export default function getData(){
   return  requests({url,method:"get"})
}