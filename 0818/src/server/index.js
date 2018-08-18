import axios from 'axios'

let t = axios.create({
    baseURL:'https://cnodejs.org/api/v1'
})

function getTopics(params){
    let defaults={
        page:10,
        tab :'',
        limit :10,
        ...params
    }
    return  t.get('/topics',{params:defaults})
} 

function getTopicPage(id){
    return  t.get(`/topic/${id}`)
}

export default {
    install(Vue){
        Vue.prototype.$ = {
            getTopics,
            getTopicPage
        }
    }
}