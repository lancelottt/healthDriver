import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'
import Invitation from '@/components/invitation/Invitation'
import InvitationInfo from '@/components/invitation/InvitationInfo'
import TelLogin from '@/components/login/telLogin'
import ConfirmInfo from '@/components/userInfo/confirmInfo'
import Identity from "@/components/userInfo/identity"
import Habit from '@/components/userInfo/habit'
import Sport from '@/components/userInfo/sport'
import Disease from '@/components/userInfo/disease'
import MakeHealthPlan from '@/components/healthPlan/makeHealthPlan'
import HealthPlan from '@/components/healthPlan/healthPlan'
import Count from '@/components/healthPlan/count'
import Competition from '@/components/competition/competition';

import Zilv from '@/components/zilv/index'
import HealthMarketHome from '@/components/healthMarket/healthMarketHome';
import Shangcheng from '@/components/shangcheng/index';
import Shuju from '@/components/shuju/index';
import Wode from '@/components/wode/index'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Login,
			//					children: [{
			//						path: '/home/Home',
			//						name: '22',
			//						component: Home,
			//						meta: {
			//							requireAuth: true
			//						}
			//					}, {
			//						path: '/login/Login',
			//						name: '11',
			//						component: Login,
			//						meta: {
			//							requireAuth: true
			//						}
			//					}]
		},
		{
			path: '/*any',
			redirect: 'Home'
		},
		{
			path: '/login/Login',
			name: 'Login',
			component: Login,
		},
		{
			path: '/invitation',
			name: 'Invitation',
			component: Invitation,

			//				children: [{
			//					path: '/invitation/invitationInfo',
			//					name: 'InvitationInfo',
			//					component: InvitationInfo
			//				}]
		},
		{
			path: '/invitation/invitationInfo',
			name: 'invitationInfo',
			component: InvitationInfo
		},
		{
			path: '/login/telLogin',
			name: 'telLogin',
			component: TelLogin
		},
		{
			path: '/userInfo/confirmInfo',
			name: 'confirmInfo',
			component: ConfirmInfo,

		},
		{
			path: '/userInfo/identity',
			name: 'identity',
			component: Identity
		},
		{
			path:'/userInfo/habit',
			name:'habit',
			component:Habit
		},
		{
			path:'/userInfo/sport',
			name:'sport',
			component:Sport
		},
		{
			path:'/userInfo/disease',
			name:'disease',
			component:Disease
		},
		{
			path:'/healthPlan/makeHealthPlan',
			name:'makeHealthPlan',
			component:MakeHealthPlan
		},
		{
			path:'/healthPlan/healthPlan',
			name:'healthPlan',
			component:HealthPlan
		},
		{
			path:'/healthPlan/count',
			name:'count',
			component:Count
		},
		{
			path:'/competition/competition',
			name:'competition',
			component:Competition
		},
		{
			path:'/zilv',
			name:'zilv',
			component:Zilv
		},
		{
			path:'/healthMarket/healthMarketHome',
			name:'healthMarketHome',
			component:HealthMarketHome
		},
		{
			path:'/shangcheng',
			name:'shangcheng',
			component:Shangcheng
		},
		{
			path:'/shuju',
			name:'shuju',
			component:Shuju
		},
		{
			path:'/wode',
			name:'wode',
			component:Wode
		},
		
	]

})