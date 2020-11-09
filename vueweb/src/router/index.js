import Vue from 'vue';
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/Login'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'*',
      redirect:'/login',
      // 如果亂輸就回傳到login
    },
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld,
      meta: { requiresAuth: true }
      //驗證是否登入
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/admin',
      name:'Dashboard',
      component:Dashboard,
      //驗證是否登入
      children:[
        {
          path:'/products',
          name:'Products',
          component:Products,
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
})