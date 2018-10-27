import Vue from 'vue'
import Router from 'vue-router'

import Tpl from './components/tpl/home.vue'
import TplAlerts from './components/tpl/alerts.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tpl', component: Tpl,
      children: [
        { path: 'alerts', component: TplAlerts }
      ]
    }]
}) 