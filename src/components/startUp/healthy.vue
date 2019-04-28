<template>
	<div>
		<div class="startH">
			<swiper :options="swiperOption">
				<!-- slides -->
				<swiper-slide>
					<div>
						<div class="bannerZ">
							<div class="bannerT">
								<p>健康瘦身饮食</p>
								<p>好吃不胖</p>
								<div class="bannerTu">
									<ul>
										<li>
											<img src="../../../static/img/qing.png" />
											<span>轻盈纤体早餐</span>
											<div class="cJ">883828人参加</div>
										</li>
										<li>
											<img src="../../../static/img/shou.png" />
											<span>超低卡减脂快手早餐</span>
											<div class="cJ">883828人参加</div>
										</li>
										<li>
											<img src="../../../static/img/chao.png" />
											<span>超低卡减脂速瘦早餐</span>
											<div class="cJ">883828人参加</div>
										</li>
									</ul>
								</div>
							</div>

							<div class="dingW">
								<div class="bannerImg"><img src="../../../static/img/pR.png" alt=""></div>
							</div>

						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div>
						<div class="bannerZ" style="width:100%;">
							<div class="bannerT" style="height:10rem;">
								<p>制定运动方案</p>
								<p>事半功倍</p>
								<div class="shopBanner">
									<div class="divImg">
										<img src="../../../static/img/shopping.png" alt="">
									</div>
									<div class="shopTitle">
										<ul>
											<li>
												<p class="pImg">
													<img src="../../../static/img/clock.png" alt="">
												</p>
												<div class="riqi">日均时长</div>
												<div class="miniue">30分钟</div>
											</li>
											<li>
												<p class="pImg">
													<img src="../../../static/img/book.png" alt="">
												</p>
												<div class="riqi">训练周期</div>
												<div class="miniue">14天</div>
											</li>
											<li style="border-right:none;">
												<p class="pImg">
													<img src="../../../static/img/fire.png" alt="">
												</p>
												<div class="riqi">总燃脂</div>
												<div class="miniue">2000千卡</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<!-- <div class="dingW">
                                       <div class="bannerImg"><img src="../../../static/img/book.png" alt=""></div>
                                    </div>
                                    -->
						</div>
						<!-- <button>现在加入</button> -->
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>

			</swiper>
			<button @click="handleStartUp()">现在加入</button>
		</div>
	</div>
</template>
<script>
	import { get, post } from "../../api/fetch";
	import store from '@/store/index'
	import vue from 'vue'
	import Vuex from 'vuex'
	export default {
		name: 'Healthy',
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					// loop:true
				}
			}
		},
		methods: {
			handleStartUp() {
				var _this = this
				get("/health-web/modules/wxThirdParty/login?openid=" + store.state.myInfo.openid + '&accessToken=' + store.state.myInfo.access_token, {
					//											params: {
					//												code: _this.weixinCode
					//											}
				}).then(function(response) {
					setTimeout(function() {
						switch(response.user.ompleteStatus) {
							case 0:
								_this.$router.push({
									name: 'payment'
								})
								break;
							case 1:
								_this.$router.push({
									name: 'Invitation'
								})
								break;
							case 2:
								_this.$router.push('/login/telLogin')
								break;
							case 3:
								_this.$router.push('/userInfo/confirmInfo')
								break;
							case 4:
								_this.$router.push('/userInfo/identity')
								break;
							case 5:
								_this.$router.push('/healthPlan/makeHealthPlan')
								break;
							default:
								break;
						}
					}, 3000)
					//											_this.saveUserInfo()
					//											_this.saveCookie(response.data.user.id)
				}).catch(function(fail) {
					console.log('从服务器接收失败 ' + JSON.stringify(fail))
					_this.$router.push({
						name: 'Invitation'
					})
				})

			},
			created() {
			}
		}
	}
</script>
<style scoped>
	/* @import '../../style/swiper.css'; */
	
	@import '../../assets/chatLogin/chatLogin.css';
	.startH>>>.swiper-pagination-bullet-active {
		background: #ff5e3a !important;
	}
</style>