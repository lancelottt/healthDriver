<template>
	<div id="playFood">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		
		<section class="playFood-main">
			<div class="playFoodVideo-out">
				<!--<video class="playFoodVideo" style="object-fit:fill" autoplay webkit-playsinline playsinline x5-video-player-typ controls loop width="3rem" height="4rem" e="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" src="http://124.193.228.151/variety.tc.qq.com/AQFCgipfHMjN_dlwxJGxIRK8_PuEKScGRBwTlaEHQA4Y/q0201btbsoy.p201.1.mp4?level=0&vkey=26441F93BD78FE914716496E236E6413684218E03C546ED60104FB51A9ABD7CE35DB531CC34331D076D5F48428B3F899A9A25E9E3C81E3D539572823AC23B86682553759B4C090BAA9AEB1D5A1FB7BFC539DD3055C9FF0B2D09C9C9E2704F3083533760FAE79BB558190144575E6404C728A36F87D08658C&platform=10201&sdtfrom=&fmt=shd" />
				</video>-->
				<video-player class="video-player vjs-custom-skin playFoodVideo" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
			</div>
			<section class="playFoodNav">
				<div @click="handlerPlayFoodKnowFood()">
					<i></i>
					<i class="iconfont icon-nangua"></i>
					<span>认识事物</span>
				</div>
				<div>
					<i></i>
					<i class="iconfont icon-Tomato"></i>
					<span>搭配食物</span>
				</div>
				<div>
					<i></i>
					<i class="iconfont icon-jitui"></i>
					<span>烹饪食物</span>
				</div>
				<div>
					<i></i>
					<i class="iconfont icon-luobu"></i>
					<span>使用食物</span>
				</div>
			</section>
			<section class="playFood-article">
				<div>
					<div class="playFood-article-header">
						<span>完美沙拉方程式</span>
						<span>></span>
					</div>

					<div class="playFood-article-img">
						<swiper :options="swiperOption">
							<swiper-slide v-for = "(item,index) in foods" :key="index">
								<div>
									<div>
										<img src="http://placekitten.com/400/245" />
									</div>
									<b>牛油果螺旋意面沙拉</b>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div>
									<div>
										<img src="http://lorempixel.com/400/245/food" />
									</div>
									<b>牛油果螺旋意面沙拉</b>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div>
									<div>
										<img src="http://lorempixel.com/400/245/food" />
									</div>
									<b>牛油果螺旋意面沙拉</b>
								</div>
							</swiper-slide>
						</swiper>
					</div>

				</div>
			
			</section>
		</section>
	</div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                //				视频控制参数
                playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: "https://ip1871531384.mobgslb.tbcache.com/6773012649734714F75BA2757/03000801005C7F5A03A30AD31566007A5F0D14-17B2-4611-802E-B67C5BCEF897.mp4?ccode=0501&duration=141&expire=18000&psid=5f8367693281494e427ea824eb23f678&ups_client_netip=7ccc2aba&ups_ts=1551861089&ups_userid=&utid=1aj%2BFPUcHmUCAXzMKrqYnIaL&vid=XNDA4NzQ4NjY1Mg&vkey=Ac7f6adaa8fc7de1b06d4a271ac08458d&sp=&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=563baf575b6a7ab9d6000fe6a0a2ca768d139d712d43c315&ali_redirect_ex_tmining_ts=1551861096&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0" //url地址
                    }],
                    poster: "../../static/images/test.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true //全屏按钮
                    }
                },
                //轮播参数
                swiperOption: {
                    spaceBetween: 11,
                    freeMode: true,
                    setWrapperSize: true,
                    slidesPerView: 1.687,
                },
                foods: ''
            }
        },
        beforeCreate() {

        },
        mounted() {

        },
        methods: {
            handleBack() {
                this.$router.push('/healthyZ')
            },
            handlerPlayFoodKnowFood() {
                this.$router.push('/healthMarket/playFood/kwnoFood')
            }
        }
    }
</script>
<style scoped="scoped">
    @import '../../assets/healthMarket/playFood/playFood.css';
</style>