# vuerouter
vue出一個電商網站
<h2>vue cli環境</h2>

```bash
npm install -g vue-cli
```
```bash
vue init webpack 專案名
```
```bash
npm install
```
<h2>Router配置</h1>

```bash
npm install vue-router --save
```

```bash
啟用vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
main.js 進入點<br>
src/router/index.js 路由配置檔案<br>
vue component/pages 分頁內容<br>

```bash
import Home from '@/components/HelloWorld'
//自定義元件
```
<h2>載入axios</h2>

```bash
npm install --save axios vue-axios
```

```bash
載入axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
```
<h2>在同一個路徑載入兩個頁面文件</h2>
1.App.vue新增：

```html
<router-view name="menu"></router-view>
```

2.新增一個menu.vue(同page.vue)，載入navs的內容<br>
3.把page.vue中的bottom刪除<br>
4.在index.js中匯入menu.vue，且更改page.vue的路由配置<br>
<h2>帶入自己的api</h2>

```javascript
${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products
```
<p>dev為開發中版本，prod為完成的版本</p><br>

<h2>加入Bootstrap</h2>

```bash
npm install bootstrap --save
```
```bash
npm install node-sass sass-loader --save
```
<p>須在style標籤中加入 lang=scss </p><br>
<h2>使用cookie記錄登入資訊</h2>

```bash
sigin ->admin/sigin
+ axios.defaults.withCredentials = true;
```
<h2>全局守衛（避免顧客誤啟後臺網頁）</h2>

```bash
main.js加入：
router.beforeEach((to, from, next) => {
  next()//防止全局守衛阻擋
})
在指定的路由加入：
 meta: { requiresAuth: true }
```
<h2>避免顧客誤啟開發者未設立的路由</h2>

```bash
index.js ->
{
    path:'*',
    redirect:'login' //需返回的頁面
}

```
<h2>登入的跨域存取問題</h2>

```bash
login.vue:
if(response.data.success){
  const token = response.data.token;
  const expired = response.data.expired;
  console.log(token, expired);
  document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
    vm.$router.push('/backboard/products') //登入成功效果
   }
        
  
 dashboard.vue加入created:
  created(){
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        this.$http.defaults.headers.common.Authorization = `${token}`;
    }
```
[cookie相關文章](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

