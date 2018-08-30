import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        title:'',
        scrollObj:''
    },
    mutations:{
        changeTitle(state,t){
            state.title = t;
        },
        newScroll(state,obj){
            state.scrollObj = obj;
        }
    }
})

export default store;