import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        n:0
    },
    mutations:{
        add(state,val){
            state.n = val
           
        }
    },
    actions:{
        addAction(store,val){
            setTimeout( ()=>{
                store.commit('add',val)
            },1000 )
        }
    }

})
export default store;