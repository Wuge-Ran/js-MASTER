import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        title:'',
        scrollObj:'',
        tapVal:'',
        suggest:[],
        results:[],
        carData:[]
    },
    mutations:{
        changeTitle(state,t){
            state.title = t;
        },
        newScroll(state,obj){
            state.scrollObj = obj;
        },
        tapVal(state,val){
            state.tapVal = val;
        },
        changeResults(state,data){
            state.results = data;
        }
    }
})

export default store;