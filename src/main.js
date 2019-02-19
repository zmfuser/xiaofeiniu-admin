import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)//注册ElementUI插件
Vue.protorype.$axios = axios//把axios设置为所有vue组件实例的成员属性，以后可以使用this.$axios使用异步请求功能
Vue.config.productionTip = false
// 创建全局过滤器
Vue.filter('date',(val)=>{
  // 把bigint转换为yyyy-mm-dd
})
Vue.filter('datatiem',(val)=>{
  // 把bigint转换为yyyy-mm-dd hh：mm：ss
})
Vue.filter('currency',(val)=>{
  // 把int转换为￥xx.yy
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
