import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/js/bootstrap.bundle"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
router.push("/tpl")
