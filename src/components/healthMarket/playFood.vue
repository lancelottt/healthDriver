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
                        src: "http://vodkgeyttp8.vod.126.net/cloudmusic/MTAhMDAgMDAwNGE0MDEgJA==/mv/505795/7a4200821d8988285664c2ef4d08d506.mp4?wsSecret=9967ad23d412741d98f71c267cb477b9&wsTime=1553223950" //url地址
                    }],
                    poster: "https://music.163.com/m/mv?id=505795", //你的封面地址
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