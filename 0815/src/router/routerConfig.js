import Find from '@/components/find'
import Look from '@/components/look'
import Message from '@/components/message'

import messageChildren from '@/router/message-child'

// 这一个配置在router里面生成路由对象使用，生成导航使用

// 路由信息中添加一个信息，记录这个路由是否需要登录进入
export let routerConfig = [
  {
    path: '/',
    name: 'Find',
    title: '发现',
    component: Find,
    meta: {isLogin:false}  // 给路由信息对象添加一些额外的信息，额外的信息是写在这个路由的配置上，会被忽略的
  },
  {
    path: '/look/:id?',
    name: 'Look',
    title: '关注',
    component: Look,
    beforeEnter(to,from,next){
      console.log('loog-beforeEnter')
      next();
    },
    meta: { isLogin: true } 
  },
  {
    path: '/message',
    //name: 'Message',  // 已经有一个默认的子级，父级上面就不要有name
    title: '消息',
    component: Message,
    //redirect: { name: 'Pinglun'},
    children:[
      ...messageChildren
    ],
    meta: { isLogin: true } 
  }
]