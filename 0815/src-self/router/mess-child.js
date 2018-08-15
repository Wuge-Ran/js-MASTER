import Comment from '@/components/mess-child/pinglun';
import Mess from '@/components/mess-child/jianxin';
import Focus from '@/components/mess-child/guanzhu';

let messChild = [
    {
        path: 'Pinglun',
        title: '评论',
        name: 'Pinglun',
        component: Comment
      },
      {
        path: 'jianxin',
        title: '简信',
        name: 'Jianxin',
        component: Mess
      },
      {
        path: 'gaunzhu',
        title: '关注',
        name: 'Guanzhu',
        component: Focus,
        
      }
]

export default messChild;