import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        title:'',
        scrollObj:'',
        tapVal:'',
        suggest:[],
        Placeholder:''
    },
    mutations:{
        changeTitle(state,t){
            console.log('执行了');
            state.title = t;
        },
        newScroll(state,obj){
            state.scrollObj = obj;
        },
        tapVal(state,val){
            state.tapVal = val;
        },
        changePlaceholder(state,val){
            state.Placeholder = val;
        }
    }
})

export default store;