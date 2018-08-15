
import Vue from 'vue'
import VueRouter from 'vue-router';
import routersMess from '@/router/routersMess';
import Login from '@/components/login'


Vue.use(VueRouter)


let router = new VueRouter({
    mode:'history',
    routes:[
        ...routersMess,
        {
            path:'/login',
            component:Login 
        },
        {
            path:'*',
            redirect:{
                path:'/find'
            }
        }
    ]   
})

router.beforeEach( (to,from,next)=>{
    console.log(to)
    if(to.matched.some( item => item.meta.isLogin )){
        next({path:'/login'});
    }else{
        next();
    }
   
} )

export default router;
