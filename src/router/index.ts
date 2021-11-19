import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/addPost',
		name: 'AddPost',
		component: () => import('@/views/AddPost.vue'),
	},
	{
		path: '/viewPost/:id',
		name: 'ViewPost',
		component: () => import('@/views/ViewPost.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
