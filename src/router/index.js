import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Order = () => import('../views/order/Order.vue')
const Shop = () => import('../views/shop/Shop.vue')
const User = () => import('../views/user/User.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
	{
		path:'/home',
		name:'home',
		component:Home
	},
  {
    path: '/order',
    name: 'Order',
    component:Order
  },
	{
		path:'/shop',
		name:'Shop',
		component:Shop
	},
	{
		path:'/user',
		name:'User',
		component:User
	}
]

const router = new VueRouter({
  routes,
	mode:'history'
})

export default router
