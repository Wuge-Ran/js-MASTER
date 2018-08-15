import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Cookies from 'js-cookie';

import { routerConfig} from '@/router/routerConfig'

import Login from '@/components/login'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'jihuo',
  linkExactActiveClass: 'jingquejihuo',
  // 写在在这里的属于是一级路径，匹配到的组件会替换app.vue中的router-view
  routes: [
    ...routerConfig,
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*'
    }
  ]
})

// 全局守卫
// 可以控制访问到响应视图渲染中间执行的函数
// 控制权交到下一个 next()
router.beforeEach((to, from, next) => {
  console.log(to); //即将要进入的目标 路由对象  到哪里去
  console.log(from) // 当前导航正要离开的路由 从哪里来
  console.log('beforeEach')

  // 统一判断路由是否需要登录，需要，判断是否登录
  // 登录了直接进入，没有登录，跳转到登录页
  // matched 是访问到的目标路由所有能够匹配到的信息 
  // 比如：访问的二级路径，matched 存的是一级和二级路由信息
  // 比如：访问的三级路径，matched 存的是一级和二级三级路由信息
  // 父子路由配置，只要有一个需要登录，就要进入验证是否登录

  if(to.matched.some(item=> item.meta.isLogin)){  // 需要判断登录
    let userName = Cookies.get('miaov-08-15')
    // 是否登录了
    if (userName){
      next()
    }else{
      next({name: 'Login',query: {ref: to.name}})
    }
  }else{
    next();
  }

 
})
router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router;