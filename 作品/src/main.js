// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import server from '@/server'
import lazy from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(server)
//引入懒加载
Vue.use(lazy,{
  loading:require('@/assets/img/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
