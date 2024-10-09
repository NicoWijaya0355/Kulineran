import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodList from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import KeranjangDetail from '../views/Keranjang.vue'
import SuksesPesanan from '../views/PesananSukses.vue'
import RiwayatDetail from '../views/Riwayat.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'Foods',
    component: FoodList
  },
  {
    path: '/keranjang',
    name: 'KeranjangDetail',
    component: KeranjangDetail
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {
    path: '/riwayat',
    name: 'RiwayatDetail',
    component: RiwayatDetail
  },
  {
    path: '/pesanan-sukses',
    name: 'SuksesPesanan',
    component: SuksesPesanan
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
