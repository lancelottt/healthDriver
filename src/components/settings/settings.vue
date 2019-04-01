<template>
	<div class="setting">
		<div class="settingHeader">
           <div class="settingLeft" @click="handFanhui()">
           	 <img src="../../../static/images/fanhui.png"/>
           </div>
           <div class="settingRight">权限设置</div>
		</div>
		<div class="setContent">
			<p>由于系统的的省电设置与后台进程限制，会误将正在记录运动的</p>
			<p>进程杀掉。为保证app的运动记录更好运行，请参照如下设置方</p>
			<p>法。</p>
		</div>
		<!--后台保护设置**-->
		<div class="backstage">
			<p>后台保护设置</p>
			<p>为保证运动状态记录的准确性，强烈建议添加app到后台保护名</p>
			<p>单中。</p>
			<p>设置方法：手机管家->自启动管理->打开app的开关。</p>
			<p>快速设置</p>
		</div>
		<!--放射免设置**-->
		<div class="backstage">
			<p>防睡眠设置</p>
			<p>由于系统的省电设置，会让app进入冻结状态。</p>
			<p>的正常记录，请将app加入白名单中。</p>
			<p>设置方法：手机管家->电池管理->受保护应用->打开app的开</p>
			<p>快速设置</p>
			<p>不会设置？<span>点我看教程</span> </p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	methods:{
		handFanhui(){
			this.$router.back();
		}
	}
}
</script>

<style scoped="scoped">
.setting{
	width:100%;
	height: 100%;
	background: #EEEEEE;
	padding-bottom: 2.69rem;
}	
.settingHeader{
	width:100%;
	height: .84rem;
	background: #FFFFFF;
	margin-bottom: .06rem;
}
.settingLeft{
    width: 10%;
    height: .84rem;
    float: left;
    padding-top: .2rem;
    box-sizing: border-box;
}
.settingLeft img{
	width:.41rem;
	height: .33rem;
}
.settingRight{
	float: right;
	width:90%;
	line-height: .84rem;
	height: .84rem;
	color: #333333;
	font-size: .28rem;
	text-align: center;
}
.setContent{
	width:100%;
	background: #FFFFFF;
	text-align: left;
    padding: .31rem;
    box-sizing: border-box;
    line-height: .4rem;
}
.setContent p{
	color: #999999;
	font-size: .24rem;
}
.backstage{
	width:100%;
	background: #FFFFFF;
	margin-top: .06rem;
	padding: .3rem;
}
.backstage p{
	font-size: .24rem;
	color: #999999;
	text-align: left;
	line-height: .4rem;
	
}
.backstage p:nth-child(1){
	font-size: .28rem;
	color: #666666;
	margin-bottom: .25rem;
}
.backstage p:nth-child(3){
	margin-bottom: .25rem;
}
.backstage p:nth-child(5){
	width:100%;
	height:.8rem;
	border:1px solid rgba(50,197,140,1);
	border-radius:.05rem;
	line-height: .8rem;
	color: #32C58C;
	text-align: center;
	margin-top: .45rem;
}
.backstage p:nth-child(6){
	margin-top: .3rem;
}
.backstage span{
	display: inline-block;
	color: #32C58C;
	font-size: .24rem;
}
</style>