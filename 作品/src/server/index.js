import Vue from 'vue-router';
import axios from 'axios';

let child1 = axios.create({
    baseURL:"https://resource.smartisan.com/marketing/mobile/"
});
let child2 = axios.create({
    baseURL:"/api"
});

//拿banner图的数据
function getBanner(){
    let url = 'index_605c018adff18a7b07658587d696744c.json';
    return child1.get(url)
}
//拿产品信息的数据
function getProducts(params){
    let defaults = {
        //通过join方法将数组链接为字符串
        ids:params?params.join(','):''
    }
    console.log(defaults)
    let url = '/product/skus/';
    return child2.get(url,{params:defaults});
}

export default {
    //将接口方法扩展到原型上便于调用
    install(Vue){
        Vue.prototype.$api = {
            getBanner,
            getProducts
        }
    }
}
