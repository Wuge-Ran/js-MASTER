import VueRouter from 'vue-router'
import Vue from 'vue'
import List from '@/views/list/List'
import Detail from '@/views/detail/detail'

Vue.use(VueRouter);

let router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        redirect:{name:'list'}
    },{
        path:'/list/:tab?',
        name:'list',
        component:List
    },{
        path:'/detail/:id',
        name:'detail',
        component:Detail
    },
    {
        path:'*',
        redirect:{name:'list'}
    }]
})

export default router;