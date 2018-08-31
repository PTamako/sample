import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import Count from '../pages/detail/count'
import Forecast from '../pages/detail/forecast'
import Analysis from '../pages/detail/analysis'
import Publish from '../pages/detail/publish'
import OrderListPage from '../pages/orderList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'count',
          component: Count,
        },
        {
          path: 'forecast',
          component: Forecast,
        },
        {
          path: 'analysis',
          component: Analysis,
        },
        {
          path: 'publish',
          component: Publish,
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})

