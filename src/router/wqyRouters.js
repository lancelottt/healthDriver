import Vue from "vue";
import Router from "vue-router";
import Qwer from '@/components/userInfo/qwer'
//跳转图片**
//语音录制**
import Voice from '@/components/pages/me/voice'
import Phone from '@/components/pages/me/phone'
//语音上传列表**
import voiceList from '@/components/pages/me/VoiceList'
export default[
	{
		path:'/qwer',
		component:Qwer
	},
	{
		path:'/phone',
		name:'',
		component:Phone
	},
	{
		path:'/handVoice',
		name:'handVoice',
		component:Voice
	},
	{
		path:'/voiceList',
		name:'voiceList',
		component:voiceList
	}
	
]