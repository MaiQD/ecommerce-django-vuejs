import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView'
import CategoryView from '../views/CategoryView'
import SearchView from '../views/SearchView'
import CartView from '../views/CartView'
import SignUpView from '../views/SignUpView'
import LogInView from '../views/LogInView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: ProductView
  }, {
    path: '/:category_slug',
    name: 'Category',
    component: CategoryView
  }, {
    path: '/search',
    name: 'Search',
    component: SearchView
  },{
    path: '/cart',
    name: 'Cart',
    component: CartView
  },{
    path: '/sign-up',
    name: 'SignUp',
    component: SignUpView
  },{
    path: '/log-in',
    name: 'LogIn',
    component: LogInView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
