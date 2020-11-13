import Vue from 'vue';

Vue.prototype.$bus=new Vue();

// this.$bus.$emit('message:push',message,status)

// message(str):訊息內容
// status(str):Alert樣式