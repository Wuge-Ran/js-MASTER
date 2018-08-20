import axios from 'axios';

let child = axios.create({
    baseURL:'http://localhost:5001'
})

function getIndexData(){
    return child.get('/api/shop_list')
}

export default {
    install(Vue){
        Vue.prototype.api={
            getIndexData
        }
    }
}