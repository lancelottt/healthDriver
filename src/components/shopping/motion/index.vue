<template>
    <div>
        <!-- <div class="sports-video">
 <video-player class="video-player vjs-custom-skin playFoodVideo" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
        </div> -->
        <div class="punch-card">
            <div class="card-top">
                <h3>{{sportMain.itemName}} <span>{{sportMain.itemDuration}}分钟</span></h3>
                <p>{{sportMain.itemDescribe}}</p>
            </div>
            <div class="card-bottom">
                <h3>第{{cardMain.persistDay}}天</h3>
                <p>已坚持 <span class="oragen">{{cardMain.recordsNum}}</span>天</p>
                <p>上次训练{{cardMain.updateTime | difftime}}天前 <span>{{cardCode}}人正在练</span></p>
                <button @click="showCard()">打卡</button>
            </div>
        </div>
        <SignIn  :isShow='isShow' @closeCard="closeCard" :cardDay="cardDay"></signin>
    </div>
</template>
<script type="text/javascript">
    import SignIn from '../../shopping/signIn';
    import {
        Toast,
        MessageBox
    } from 'mint-ui';
    import {
        post
    } from '../../../api/fetch.js'
    export default {
        props: {
            sportMain: {},
            cardMain: {},
            cardCode: 0,
            userItemCode: null
        },
        data() {
            return {
                isShow: false, //弹框显示
                time: null,
                cardDay: null,
                // 视频控制参数
                playerOptions: {
                    // playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: this.sportMain.itemPath //url地址
                    }],
                    poster: this.sportMain.itemCoverPath, //你的封面地址 
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true // 全屏按钮
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
        components: {
            SignIn
        },
        methods: {
            handleBack() {
                this.$router.push('/healthyZ')
            },
            handlerPlayFoodKnowFood() {
                this.$router.push('/healthMarket/playFood/kwnoFood')
            },
            showCard() {;
                console.log(this.userItemCode)
                post('/health-web/modules/userathleticrecords/save/' + this.userItemCode).then((res) => {
                    if (res.code == 0) {
                        this.cardDay = this.cardMain.recordsNum;
                        this.isShow = true;
                        console.log(this.cardDay)
                        this.$parent.getSportsMain(this.userItemCode);
                    }
                    if (res.code == 10000021) {
                        this.cardDay = this.cardMain.recordsNum + 1;
                        Toast({
                            message: res.msg,
                            duration: 1500
                        });
                    }
                })
            },
            closeCard() {
                this.isShow = false;
            }
        }
    }
</script>
<style lang="" scoped>
    @import '../../../assets/sports/index.css';
</style>