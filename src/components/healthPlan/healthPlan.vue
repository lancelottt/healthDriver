<template>
	<div id="healthPlan">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<div class="healthPlan-con">
			<Tabs value="name1">
				<!--	-------------------------------------------我的计划------------------------------------------->
				<TabPane label="我的计划" name="name1" class='hitCard'>
					<h1>健康自律养成计划</h1>
					<h2>1/28天</h2>
					<div class="myPlan">
						<img src="../../../static/img/sleep_10.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>

					<div class="myPlan">
						<img src="../../../static/img/sport_15.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>

					<div class="myPlan">
						<img src="../../../static/img/drink_14.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>
				</TabPane>

				<!--		------------------------------------------------健康导航 -----------------------------------------	-->
				<TabPane label="健康导航" name="name2" class='healthGuide'>
					<div class="healthGuide-con">
						<div class="loop">
							<!--------------------------------------------left------------------------------------------>
							<div class="healthGuideSlot1">
								<div>07:00</div>
								<div></div>
								<div>起床</div>
							</div>
							<div class="healthGuideSlot2">
								<div>07:00</div>
								<div></div>
								<div>撒是</div>
							</div>
							<div class="healthGuideSlot3">
								<div>07:00</div>
								<div></div>
								<div>吃 </div>
							</div>

							<div class="healthGuideSlot4">
								<div>07:00</div>
								<div></div>
								<div>喝</div>
							</div>

							<div class="healthGuideSlot5">
								<div>07:00</div>
								<div></div>
								<div>啦是</div>
							</div>
							<!------------------------------------------top----------------------------------------->
							<div class="healthGuideSlot6">
								<div>07:00</div>
								<div><img src="" /></div>
								<div>真香</div>
							</div>
							<div class="healthGuideSlot7">
								<div>07:00</div>
								<div><img src="" /></div>
								<div>鞍山市</div>
							</div>
							<!----------------------------------------------right-------------------------------------->
							<div class="healthGuideSlot8">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot9">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot10">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot11">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot12">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot13">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot14">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot15">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot16">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot17">
								<div>请问</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<!---------------------------------bottom--------------------------------------------->
							<div class="healthGuideSlot18">
								<div>真香</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
							<div class="healthGuideSlot19">
								<div>鞍山</div>
								<div><img src="" /></div>
								<div>07:00</div>
							</div>
		<!---------------------------------------left---------------------------------------->
							<div class="healthGuideSlot20">
								<div>07:00</div>
								<div></div>
								<div>起床</div>
							</div>
							<div class="healthGuideSlot21">
								<div>07:00</div>
								<div></div>
								<div>撒是</div>
							</div>
							<div class="healthGuideSlot22">
								<div>07:00</div>
								<div></div>
								<div>吃 </div>
							</div>

							<div class="healthGuideSlot23">
								<div>07:00</div>
								<div></div>
								<div>喝</div>
							</div>

							<div class="healthGuideSlot24">
								<div>07:00</div>
								<div></div>
								<div>啦是</div>
							</div>
						</div>
					</div>
				</TabPane>

				<!--				----------------------------------我的提醒------------------------------------------>
				<TabPane label="我的提醒" name="name3" class='hitCard'>

					<h1>健康自律养成计划</h1>
					<h2>1/28天</h2>
					<div class="myPlan">
						<img src="../../../static/img/sleep_10.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>

					<div class="myPlan">
						<img src="../../../static/img/sport_15.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>

					<div class="myPlan">
						<img src="../../../static/img/drink_14.png" alt="" />
						<div class="healthPlan-mask">
							<div class="mask-left">
								<h1>早起打卡</h1>
								<h2>现在开始早起打卡计划</h2>
							</div>
							<div class="mask-right">
								<span>0%</span>
								<i>完成进度</i>
							</div>
						</div>
					</div>
				</TabPane>
			</Tabs>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			}
		},
		
	}
	
</script>

<style>
	@import '../../assets/common/scss/common.css';
	@import '../../assets/healthPlan/healthPlan/healthPlan.css';
</style>