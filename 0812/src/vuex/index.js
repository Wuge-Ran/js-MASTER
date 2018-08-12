import Vuex from 'vuex';
import Vue from 'vue';
import axios from'axios';

Vue.use(Vuex)

let store =  new Vuex.Store({
    state:{
        data:{}
    },
    mutations:{
        getData(state,data){
            console.log('2222',data.data.data.list)
            state.data = data.data.data.list;
        }
    },
    // getters:{
    //     getData(state){
    //         console.log('111',state);
    //         return state.data;
    //     }
       
    // },
    actions:{
        async getDataAction(context){
            console.log(111);
            await axios('https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/shop-list')
            .then( (data)=>{
                console.log(data);
                context.commit('getData',data)
            } )
        }
    }
})

export default store