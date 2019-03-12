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


//商城中的商品，评论，详情**
import EquipDetails from '@/components/equip/details'
//商城中的商品
import EquipSport from '@/components/equip/details/sport'
//商城中的评论
import EquipEvaluate from '@/components/equip/details/evaluate'
//商城中的详情
import ModityDetails from '@/components/equip/details/modityDetails'




//引入商城中运动手表首页热销推荐**
//import Sale from '@/components/pages/shopping/shopTabbar/sale'
////引入商城中运动手表首页健康管理**
//import HealthMana from '@/components/pages/shopping/shopTabbar/healthMana'
////引入商城中运动手表首页健康设备**
//import HealthEquip from '@/components/pages/shopping/shopTabbar/healthEquip'
////引入商城中运动手表首页运动装备**
//import SportsEquip from '@/components/pages/shopping/shopTabbar/sportsEquip'
////引入商城中运动手表首页体验套餐**
//import Exper from '@/components/pages/shopping/shopTabbar/experience'
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
//我的预计收入**
import Revenue from '@/components/memCen/revenue'
//通用设置**
import SetupTong from '@/components/memCen/setup'
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

//运动课程**
import SportsCurric from '@/components/shopping/motion/sportsCurric'
//智能设备**
import Device from '@/components/device/device'
//健康数据中的血压**
import Pressure from '@/components/device/pressure'
//健康数据中的血糖**
import Presugar from '@/components/device/sugar'
//权限设置**
import Settings from '@/components/settings/settings'
//设置**
import SetUp from '@/components/szsetUp/setUp'
//健康设备**
import Equip from '@/components/equip/equip'
//健康管理**
import HealthMana from '@/components/pages/shopping/shopTabbar/healthMana'
//体验套餐**
import Experience from '@/components/experience/experience'

//套餐详情
import PackageDetails from '@/components/experience/packageDetails'
//认识食物
import KwnoFoodIndex from '@/components/healthMarket/kwnoFoodComponents/index'
import KnowFoodCarBon from '@/components/healthMarket/kwnoFoodComponents/carbon'
import KnowFoodEggWhite from '@/components/healthMarket/kwnoFoodComponents/eggWhite'
import KnowFoodVegetable from '@/components/healthMarket/kwnoFoodComponents/vegetable'
import KnowFoodFruit from '@/components/healthMarket/kwnoFoodComponents/fruit'
import KnowFoodOther from '@/components/healthMarket/kwnoFoodComponents/others'
import kwnoFoodDetails from '@/components/healthMarket/kwnoFoodDetails'

// 支持门店
import Store from '@/components/store/store'
// 在线问
import Airlines from '@/components/store/airlines'
// 数据解读
import DecodingData from '@/components/store/decodingData'
// 运动设备 
import SportDevices from '@/components/store/SportDevices'
// 语音录入
import voiceInputs from '@/components/store/voiceInputs'
// 添加用药量
import AddPharmacy from '@/components/store/addPharmacy'
// 权限设置
import PermissionSet from '@/components/store/permissionSet'
// 心率
import HeartRate from '@/components/store/heartRate'

import WechatLoginTest from '@/components/WeChatTest/weChatLoginTest';
import Author from '@/components/WeChatTest/author'
import MMlogin from '@/components/WeChatTest/mmlogin'


Vue.use(Router)
export default new Router({
  routes: [{


      path: '/',
      name: 'Healthy',
      component: Healthy,


    },
    // 身体档案**
    {
      path: '/Archi',
      name: '',
      component: Uncertain
    },
    // 我的家人**
    {
      path: '/family',
      name: 'family',
      component: Family
    },
    {
      path: '/wei',
      name: '',
      component: Wei
    },
    {
      path: '/father',
      name: '',
      component: Father
    },
    //家人中的血糖**
    {
      path: '/bloodsu',
      name: '',
      component: BloodSu
    },
    {
      path: '/sportsCurric',
      name: '',
      component: SportsCurric
    },
    // 身体档案中我的血压**
    {
      path: '/bloodMy',
      name: '',
      component: Bloodmy
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
      path: '/memCen',
      name: 'memCen',
      component: MemCen
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
      component: Shopping
      //			,
      //			children:[
      //			  {
      //			  	path:'/shopping/sale',
      //			  	name:'sale',
      //			  	component:Sale
      //			  },
      //			  {
      //			  	path:'/shopping/healthMana',
      //			  	name:'healthMana',
      //			  	component:HealthMana
      //			  },
      //			  {
      //			  	path:'/shopping/healthEquip',
      //			  	name:'healthEquip',
      //			  	component:HealthEquip
      //			  },
      //			  {
      //			  	path:'/shopping/sportsEquip',
      //			  	name:'sportsEquip',
      //			  	component:SportsEquip
      //			  },
      //			  {
      //			  	path:'/shopping/exper',
      //			  	name:'exper',
      //			  	component:Exper
      //			  }
      //			]
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
    {
      path: '/test',
      name: '',
      component: WechatLoginTest,
    },
    {
      path: '/author',
      name: '',
      component: Author,
    },
    // 我的运动**
    {
      path: '/mymotion',
      name: '',
      component: Mymotion,
      redirect: '/mymotion/index',
      children: [{
          path: '/mymotion/index',
          name: '',
          component: Index
        },
        {
          path: '/mymotion/run',
          name: '',
          component: Run
        },
        {
          path: '/mymotion/bulid',
          name: '',
          component: Bulid
        },
        {
          path: '/mymotion/yoga',
          name: '',
          component: Yoga
        },
        {
          path: '/mymotion/step',
          name: '',
          component: Step
        }

      ]
    },
    {
      path: '/KwnoFood',
      name: '',
      component: KwnoFood,
      children: [{
          path: '/KwnoFood/index',
          name: '',
          component: KwnoFoodIndex
        },
        {
          path: '/KwnoFood/carbon',
          name: '',
          component: KnowFoodCarBon
        },
        {
          path: '/KwnoFood/eggWhite',
          name: '',
          component: KnowFoodEggWhite
        },
        {
          path: '/KwnoFood/vegetable',
          name: '',
          component: KnowFoodVegetable
        },
        {
          path: '/KwnoFood/fruit',
          name: '',
          component: KnowFoodFruit
        },
        {
          path: '/KwnoFood/others',
          name: '',
          component: KnowFoodOther
        }
      ]
    },
    {
      path: '/KwnoFood/fruit/details',
      name: '',
      component: kwnoFoodDetails,
    },
    // 支持门店
    {
      path: '/KwnoFood/fruit/store',
      name: '',
      component: Store,
    },
    // 在线问
    {
      path: '/KwnoFood/fruit/Airlines',
      name: '',
      component: Airlines
    },
    // 语音录入
    {
      path: '/KwnoFood/fruit/voiceInputs',
      name: '',
      component: voiceInputs
    },
    // 健康设备
    {
      path: '/KwnoFood/fruit/SportDevices',
      name: '',
      component: SportDevices
    },
    // 数据解读
    {
      path: '/KwnoFood/fruit/decodingData',
      name: '',
      component: DecodingData
    },
    // 添加用药量
    {
      path: '/KwnoFood/fruit/addPharmacy',
      name: '',
      component: AddPharmacy
    },
    // 权限设置
    {
      path: '/KwnoFood/fruit/PermissionSet',
      name: '',
      component: PermissionSet
    },
    // 心率
    {
      path: '/KwnoFood/fruit/HeartRate',
      name: '',
      component: HeartRate
    },
    {
      path: '/device',
      name: '',
      component: Device
    },
    //		健康数据中的血压**
    {
      path: '/pressure',
      name: 'pressure',
      component: Pressure
    },
    //健康数据中的血糖
    {
      path: '/presugar',
      name: 'presugar',
      component: Presugar
    },
    //      权限设置**
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    //      设置**/
    {
      path: '/setUp',
      name: 'setUp',
      component: SetUp
    },
    //      健康设备**
    {
      path: '/equip',
      name: 'equip',
      component: Equip
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    //      健康管理**
        {
        	path:'/healthMana',
        	name:'healthMana',
        	component:HealthMana
        },
        {
        	path:'/experience',
        	name:'experience',
        	component:Experience
        },
        {
        	path:'/equipDetails',
        	name:'equipDetails',
        	component:EquipDetails,
        	children:[
        	  {
        	  	path:'/equipSport',
        	  	name:'equipSport',
        	  	component:EquipSport
        	  },
        	  {
        	  	path:'/equipEvaluate',
        	  	name:'equipEvaluate',
        	  	component:EquipEvaluate
        	  },
        	  {
        	  	path:'/modityDetails',
        	  	name:'modityDetails',
        	  	component:ModityDetails
        	  }
        	]
        },
        {
        	path:'',
        	name:'',
        	redirect:'/equipSport'
        },
        {
        	path:'/packageDetails',
        	name:'packageDetails',
        	component:PackageDetails
				}
  ]
})
