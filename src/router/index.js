
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue';
import MoaPage from '../pages/Moa/index.vue';
import MoaIB from '../pages/Moa/Ib/index.vue';

import MoaAg from '../pages/Moa/Ag/index.vue';
import AgView from '../pages/Moa/Ag/view/index.vue';
// 움짤
import MovePhoto from '../pages/Mphoto/index.vue';
import MovePhotoList from '../pages/Mphoto/list/index.vue';
import MovePhotoBj from '../pages/Mphoto/bj/index.vue';
import MovePhotoUPload from '../pages/Mphoto/upload.vue';

// 업로드

const routes = [
	{
		path: '/',
		name: 'mainpage',
		component: MainPage
	},
	{
		path: '/moa',
		name: 'moapage',
		component: MoaPage,
		redirect:'/moa/ag/',
		children:[
			{
				path:'ib',
				component:MoaIB,
			},
			{
				path:'ag',
				component:MoaAg,
			},
		]
	},
	{
		path:'/moa/ag/view',
		name:'views',
		component: AgView
	},
	{
		path:'/mphoto',
		name:'MovePhoto',
		component: MovePhoto,
		redirect:'/mphoto/list',
		children:[
			{
				path:'list',
				component:MovePhotoList,
			},
			{
				path:'bj',
				component:MovePhotoBj,
			},
		]
	}
	,
	{
		path:'/upload',
		name:'MovePhotoUpload',
		component: MovePhotoUPload,
	}
	// {
	// 	path: '/mypage',
	// 	name: 'Mypage',
	// 	component: Mypage,
	// 	// 인증 후에만 접근할 수 있음
	// 	// beforeEnter: [requireAuth]
	// },
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router