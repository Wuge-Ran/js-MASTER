import Find from '@/components/Find'
import Focus from '@/components/focus'
import Message from '@/components/message'
import messChild from "@/router/mess-child";


let routesMess = [
    {
        path:'/find',
        title:'发现',
        component:Find,
        name:'Find',
        meta:{isLogin:false}
    },{
        path:'/focus/:id?',
        title:'关注',
        component:Focus,
        name:'Focus',
        meta:{isLogin:true}
    },{
        path:'/message',
        title:'消息',
        component:Message,
        name:'Message',
        redirect: {name:'Pinglun'},
        meta:{isLogin:true},
        children:[
            ...messChild
        ]
    }
]

export default routesMess