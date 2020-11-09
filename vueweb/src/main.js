//資料串連
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router' //自動找到資料夾中的 index.js 檔案

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.defaults.withCredentials=true;
//正確寫入cookie

new Vue({
 el: '#app',
 components: { App },
 template: '<App/>',
 router,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
        const api=`${process.env.APIPATH}/api/user/check`;
      axios.post(api).then((response) => {
      console.log(response.data)
      if(response.data.success){
        // vm.$router.push('/');
        next();
      }else{
          next({
              path:'/login',
          });
      }
    });
  }else{
      next();
  }
})
