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

