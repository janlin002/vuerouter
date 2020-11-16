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
```bash
npm install vue-router --save
```

```bash
import Home from '@/components/HelloWorld'
//自定義元件
```
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

