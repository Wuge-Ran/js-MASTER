import axios from 'axios';

let child1 = axios.create({
    baseURL:"https://resource.smartisan.com/marketing/mobile/"
});
let child2 = axios.create({
    baseURL:"/api"
});
let child3 = axios.create({
    baseURL:"/hot"
});

//拿banner图的数据
function getBanner(){
    let url = 'index_9f42f82e2f802dfbf5c73718c33ee858.json';
    return child1.get(url);
}
//拿产品信息的数据
function getProducts(params){
    let url = '/product/skus/';
    if(typeof params === 'object'){
        let defaults = {
            //通过join方法将数组链接为字符串
            ids:params?params.join(','):''
        }
        return child2.get(url,{params:defaults});
    }else{
        let defaults = {
            ids:params?params:''
        }
        return child2.get(url,{params:defaults});
    }
}
//产品的详细信息
function getProductIntro(id){
    let url = '/product/spus/';
    return child2.get(url,{params:{ids:id}});
}
//列表产品的详细信息
function getProductsIntro(obj){
    let defaults = {
        page:1,
        page_size:10,
        sort:'sort',
        ...obj
    }
    let url = '/product/skus/';
    return child2.get(url,{params:defaults});
}
//产品分类信息
function getProductsSort(){
    let url = "category_a197fb6f11fe50b6032ab211e9f8916d.json";
    return child1.get(url);
}
//热门搜索
function getHotPro(){
    let url = "/hot-words";
    return child3.get(url);
}
//输入搜索关键词
function getSuggest(keyword){
    let url = "/suggest";
    return child3.get(url,{params:{keyword}});
}
//搜索出来结果
function getResult(obj){
    let defaults = {
        page:1,
        page_size:20,
        sort:0,
        ...obj
    }
    let url = '/result';
    return child3.get(url,{params:defaults});
}
//搜索出来结果的信息
function getResultList(arr){
    let defaults = {
        //通过join方法将数组链接为字符串
        ids:arr?arr.join(','):''
    }
    let url = '/product/spus/';
    return child2.get(url,{params:defaults});
}
//https://shopapi.smartisan.com/v1/search/suggest?keyword=
//https://shopapi.smartisan.com/v1/search/result?keyword=
export default {
    //将接口方法扩展到原型上便于调用
    install(Vue){
        Vue.prototype.$api = {
            getBanner,
            getProducts,
            getProductIntro,
            getProductsIntro,
            getProductsSort,
            getHotPro,
            getSuggest,
            getResult,
            getResultList
        }
    }
}
