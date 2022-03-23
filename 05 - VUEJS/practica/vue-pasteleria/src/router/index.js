import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewOrder from '../views/NewOrder.vue'
import Flavors from '../views/Flavors.vue'
import Ornaments from '../views/Ornaments.vue'
import OrnamentsManagement from '../views/OrnamentsManagement.vue'
import FlavorsManagement from '../views/FlavorsManagement.vue'
import OrderList from '../views/OrderList.vue'

const routes = [
  {
    path: '/',
    //name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/neworder',
    name: 'neworder',
    component: NewOrder
  },
  {
    path: '/flavors',
    name: 'flavors',
    component: Flavors
  },
  {
    path: '/ornaments',
    name: 'ornaments',
    component: Ornaments
  },
  {
    path: '/OrnamentsManagement',
    name: 'OrnamentsManagement',
    component: OrnamentsManagement
  },
  {
    path: '/FlavorsManagement',
    name: 'FlavorsManagement',
    component: FlavorsManagement
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    component: OrderList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
