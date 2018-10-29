import Vue from 'vue'
import Router from 'vue-router'

import Tpl from './components/tpl/home.vue'
import TplAlerts from './components/tpl/alerts.vue'
import TplBadges from './components/tpl/badges.vue'
import TplBreadcrumb from './components/tpl/breadcrumb.vue'
import TplButtons from './components/tpl/buttons.vue'
Vue.use(Router)

const routes = [
  { path: '/tpl', component: Tpl }, //模板首页
  { path: '/tpl/alerts', component: TplAlerts }, //提示框
  { path: '/tpl/badges', component: TplBadges }, //
  { path: '/tpl/breadcrumb', component: TplBreadcrumb }, //
  { path: '/tpl/buttons', component: TplButtons }, //
]

export default new Router({
  mode: "history",
  routes
}) 