import Vue from 'vue'
import Router from 'vue-router'
//<<<<<<< HEAD
//import Home from '@/components/home/Home'
//=======
//import Home from '@/components/home/Home'
//>>>>>>> origin/wqy
//import Login from '@/components/login/Login'
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
import CompetitionJoined from '@/components/competition/competitionJoined'

import Zilv from '@/components/zilv/index'
//健康商城
import HealthMarketHome from '@/components/healthMarket/healthMarketHome';
import PlayFood from '@/components/healthMarket/playFood'
import KwnoFood from '@/components/healthMarket/kwnoFood'

//import Shangcheng from '@/components/shangcheng/index';
//import Shuju from '@/components/shuju/index';
//import Wode from '@/components/wode/index'
//=======
import ChatLogin from '@/components/loginChat/chatLogin'
import VerCode from '@/components/loginChat/verCode'
import Healthy from '@/components/startUp/healthy'
// 身体档案页面**
import Uncertain from '@/components/uncertain/uncertain'
// 身体档案中我的血压**
import Bloodmy from '@/components/uncertain/blood'
//商城**
import Shopping from '@/components/pages/shopping/shopping'
// 引入数据组件**
import DataSj from '@/components/pages/datasj/datasj'
// 体重**
import Weight from '@/components/pages/datasj/weight/weight'
// 血压**
import Blood from '@/components/pages/datasj/blood/blood'
// 血糖**
import Sugar from '@/components/pages/datasj/sugar/sugar'
// 运动**
import Motion from '@/components/pages/datasj/motion/motion'
// 心率**
import Heart from '@/components/pages/datasj/heart/heart'
// 引入我的组件**
import Me from '@/components/pages/me/me'
// 发布动态**
import Amic from '@/components/pages/me/amic'
//引入脂肪称
import Fat from '@/components/history/fat'
// //引入体趋势
import Trend from '@/components/history/trend'
// 引入Mi
import Mi from '@/components/history/trend/mi'
// 引入脂肪率**
import FatPer from '@/components/history/trend/fatPer'
//引入肌肉率
import MuscleRa from '@/components/history/trend/muscleRa'
// 引入水分率**
import WaterRa from '@/components/history/trend/waterRa'
//引入骨页面
import Bone from '@/components/history/trend/bone'

// 我的家人**
import Family from '@/components/family/family'
import Father from '@/components/family/father'
// 家人中的体重**
import Wei from '@/components/family/wei'
// 家人中的血糖**
import BloodSu from '@/components/family/bloodSu'
// 会员中心**
import MemCen from '@/components/memCen/memCen'
// 我的运动**
import Mymotion from '@/components/shopping/shopCom' 
// 我的运动中的首页**
import Index from '@/components/shopping/motion/index'
// 我的运动中的跑步**
import Run from '@/components/shopping/motion/run'
//我的运动中的健身**
import Bulid from '@/components/shopping/motion/build'
//瑜伽
import Yoga from '@/components/shopping/motion/yoga'
// 快走**
import Step from '@/components/shopping/motion/step'
Vue.use(Router)
export default new Router({
	routes: [{
		
			path: '/',
			name: 'Healthy',
			component: Healthy,

	},
	// 身体档案**
	{
		path:'/Archi',
		name:'',
		component:Uncertain
	},
	// 我的家人**
	{
	   path:'/family',
	   name:'',
	   component:Family
	},
	{
		path:'/wei',
		name:'',
		component:Wei   
	},
	{
	   path:'/father',
	   name:'',
	   component:Father
	},
	//家人中的血糖**
	{
		path:'/bloodsu',
		name:'',
		component:BloodSu
	},
	// 身体档案中我的血压**
	{
		path:'/bloodMy',
		name:'',
		component:Bloodmy
	},
	// {
	// 	path: '/*any',
	// 	redirect: 'Home'
	// },
//		{
//			path: '/login/Login',
//			name: 'Login',
//			component: Login,
//		},
		// 微信登录**
		{
			path: '/loginChat/chatLogin',
			name: 'loginChat',
			component: ChatLogin
		},
		{
			path: '/invitation',
			name: 'Invitation',
			component: Invitation,
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
			path: '/userInfo/habit',
			name: 'habit',
			component: Habit
		},
		{
			path: '/loginChat/verCode',
			name: 'verCode',
			component: VerCode
		},
		{
			path: '/userInfo/sport',
			name: 'sport',
			component: Sport
		},
		{
			path: '/userInfo/disease',
			name: 'disease',
			component: Disease
		},
		{
			path: '/healthPlan/makeHealthPlan',
			name: 'makeHealthPlan',
			component: MakeHealthPlan
		},
		{
			path: '/healthPlan/healthPlan',
			name: 'healthPlan',
			component: HealthPlan
		},
		{
			path: '/healthPlan/count',
			name: 'count',
			component: Count
		},
		{
			path: '/competition/competition',
			name: 'competition',
			component: Competition
		},
		{
			path: '/zilv',
			name: 'zilv',
			component: Zilv
		},
		// 会员中心**
		{
			path:'/memCen',
			name:'',
			component:MemCen
		},
		// 启动页**
		{
			path: '/startUp/healthy',
			name: 'Healthy',
			component: Healthy
		},
		// 引入自律组件**
		{
			path: '/self',
			name: 'healthPlan',
			component: HealthPlan,
		},
		// 引入健康**
		{
			path: '/healthyZ',
			name: 'healthMarketHome',
			component: HealthMarketHome,
		},
		//引入商城
		{
			path: '/shopping',
			name: '',
			component: Shopping,
		},
		// 引入数据**
		{
			path: '/dataSj/weight',
			name: '',
			component: DataSj,
			children: [{
					path: '/dataSj/weight',
					name: '',
					component: Weight
				},
				{
					path: '/dataSj/blood',
					name: '',
					component: Blood
				},
				{
					path: '/dataSj/sugar',
					name: '',
					component: Sugar
				},
				{
					path: '/dataSj/motion',
					name: '',
					component: Motion
				},
				{
					path: '/dataSj/heart',
					name: '',
					component: Heart
				},
				{
					path: '',
					name: '',
					redirect: '/dataSj/weight'
				}
			]
		},

		// 引入我的**
		{
			path: '/me',
			name: '',
			component: Me,
		},
		// 发布动态**
		{
			path: '/amic',
			name: '',
			component: Amic
		},
		// 引入脂肪称
		{
			path: '/history/fat',
			name: 'fat',
			component: Fat
		},
		//引入体趋势
		{
			path: '/history/trend',
			name: 'trend',
			component: Trend,
			children: [{
					path: '/history/trend/mi',
					name: '',
					component: Mi
				},
				{
					path: '/history/trend/fatPer',
					name: '',
					component: FatPer
				},
				{
					path: '/history/trend/muscleRa',
					name: '',
					component: MuscleRa
				},
				{
					path: '/history/trend/waterRa',
					name: '',
					component: WaterRa
				},
				{
					path: '/history/trend/bone',
					name: '',
					component: Bone
				},
				{
					path: '',
					name: '',
					redirect: '/history/trend/mi'
				},

			]
		},
		{
			path: '/healthMarket/playFood',
			name: 'playFood',
			component: PlayFood,
			
		},
		{
			path: '/competition/competitionJoined',
			name: 'competitionJoined',
			component: CompetitionJoined,
		},
		{
			path: '/healthMarket/playFood/kwnoFood',
				name: '',
				component: KwnoFood,
		},
		// 我的运动**
		{
			path:'/mymotion',
			name:'',
			component:Mymotion,
			children:[
				{
					path:'/mymotion/index',
					name:'',
					component:Index
				},
				{
					 path:'/mymotion/run',
					 name:'',
					 component:Run
				},
				{
					path:'/mymotion/bulid',
					name:'',
					component:Bulid
				},
				{
					path:'/mymotion/yoga',
					name:'',
					component:Yoga
				},
				{
					path:'/mymotion/step',
					name:'',
					component:Step
				}
			]
		}

	]

})