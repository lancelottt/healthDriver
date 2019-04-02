<template>
	<div class="exper">
		<div class="hotExpe">
			<div class="hotExpeLeft">
				
			</div>
			<div class="hotExpeIn">
				<div class="hotLeft">
				  <i class="iconfont icon-icon-test"></i>
				</div>
				<div class="hotRight">
					<input type="text" name="" id="" placeholder="热门体检" />
					<div class="chahao"></div>
				</div>
			</div>
			<div class="hotExpeRight"></div>
		</div>
		<div class="contents">
			
			<span class="conSpan" @click="handConspan()"></span>
			<span>体验套餐</span>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				
			}
		},
		methods:{
			handConspan () {
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped">
.exper{
	width: 100%;
    height: 1.4rem;
    position: fixed;
    z-index: 99;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
}
.hotExpe:after{
	 clear:both;content:'';display:block;width:0;height:0;visibility:hidden; 
}
.hotExpe{
	background: #fff;
	width: 100%;
	height:auto;
	zoom:1;
}
.hotExpeLeft{
    float: left;
    background: url(../../../static/images/sousuoR.png) no-repeat center;
    background-size: 100% 100%;
    width: .5rem;
    height: .43rem;
    margin-left: .3rem;
    margin-right: .2rem;
    margin-top: .1rem;
}
.hotExpeIn{
	width: 77%;
	height: .63rem;
	float: left;
	text-align: left;
	background: #f2f2f2;
	padding-left: .2rem;
    box-sizing: border-box;
}
.hotExpeIn input{
	width:100%;
	outline: none;
	height: .63rem;
	background: none;
	font-size: .24rem;
	color: #333333;
	padding-left: .2rem;
	box-sizing: border-box;
	line-height: .63rem;
}
.hotExpeRight{
	width: .36rem;
    height: .37rem;
    background: url(../../../static/images/ExpeLeft01.png) no-repeat center;
    background-size: 100% 100%;
    float: right;
    margin-top: .1rem;
    margin-right: .1rem;
}
.hotLeft{
	float: left;
    margin-top: .15rem;
    width:7%;
}
.hotRight{
	float: left;
    width: 93%;
    height: .63rem;
    position: relative;
}
.chahao{
	width:.37rem;
	height: .37rem;
	background: url(../../../static/images/chahao.png) no-repeat center;
	background-size: 100% 100%;
    position: absolute;
    right: .15rem;
    top: .15rem;
}
.contents{
	    width: 100%;
    background: #fff;
    height: .75rem;
    line-height: .75rem;
    font-size: .28rem;
    color: #333333;
    text-align: left;
    padding-left: .3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.contents span:nth-of-type(2){
    margin-left: .2rem;
	display: inline-block;
}
.conSpan{
	width:.41rem;
	height: .33rem;
	background: url(../../../static/images/fanhui.png) no-repeat center;
	background-size: 100% 100%;
	display: inline-block;
}

</style>