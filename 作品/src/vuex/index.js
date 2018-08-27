import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        title:''
    },
    mutations:{
        changeTitle(state,t){
            state.title = t;
        }
    }
})

export default store;