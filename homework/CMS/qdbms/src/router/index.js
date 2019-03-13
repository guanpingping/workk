import Vue from 'vue'
import Router from 'vue-router'

/* 导入store */
import store from "../store";

import Login from '@/components/login'
import Home from '@/components/home'

/*  首页*/
import Homepage from "@/components/content/homepage.vue";
/* 商品列表 */
import Goodlist from "@/components/content/goodlist.vue";
/* 添加商品 */
import Addgoods from "@/components/content/addgoods.vue";
/* 商品分类 */
import Sortgoods from "@/components/content/sortgoods.vue";
/* 订单列表 */
import Orderlist from "../components/content/orderlist.vue";
/* 订单设置 */
import Orderset from "../components/content/orderset.vue";
/*退货申请处理*/
import Editorder from "../components/content/editorder.vue";
/* 营销*/
import Idea from "../components/content/idea.vue";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requireAuth:true
      },
      children:[
        {
          path:"/homepage",
          name:"homepage",
          component:Homepage,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/goodlist',
          name:'goodlist',
          component:Goodlist,
          meta:{
            requireAuth:true
          }
        },  
        {
          path:"/addgoods",
          name:'addgoods',
          component:Addgoods,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/sortgoods',
          name:'sortgoods',
          component:Sortgoods,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/orderlist',
          name:'orderlist',
          component:Orderlist,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/orderset',
          name:'orderset',
          component:Orderset,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/editorder',
          name:'editorder',
          component:Editorder,
          meta:{
            requireAuth:true
          }
        },
        {
          path:"/idea",
          name:"idea",
          component:Idea,
          meta:{
            requireAuth:true
          }
        },
      ]
    },
  ]
})

/* 全局守卫 */
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(store.state.token){
       next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
})

export default router;