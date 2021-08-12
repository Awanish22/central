import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Signup from './components/Signup'
import Login from './components/Login'


Vue.use(VueRouter);
const routes=[
  
  {path:'/',component:Signup},
  {path:'/login',component:Login}
]
const router= new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
