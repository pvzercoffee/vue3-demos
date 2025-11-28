// 引入需要的酷
import { createRouter, createWebHistory } from 'vue-router'
//引入所有要用到的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  //path和组件一一映射
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          // 子路由不能加“/”！
          name:'detail',
          path: 'detail',
          component: Detail,
          //props三种场景：
          /*
          1.将路由接受到的所有params参数作为props传给路由组件
          props:true,

          2.可以自己决定将什么作为props给路由组件,函数参数为route
          */
         props(route) {
           return route.query;
         },
        },
      ],
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    },
    // https://api.uomg.com/api/rand.qinghua
    //重定向
    {
      name:'/',
      redirect:'/home'
    },
  ],
})

export default router
