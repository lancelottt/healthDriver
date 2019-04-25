import Vue from "vue";
import Router from "vue-router";
//跳转图片**
//语音录制**
import Voice from '@/components/pages/me/voice'
import Phone from '@/components/pages/me/phone'
//语音上传列表**
import voiceList from '@/components/pages/me/VoiceList'
export default[
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