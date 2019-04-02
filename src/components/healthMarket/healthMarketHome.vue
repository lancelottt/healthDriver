<template>
	<div id="healthMarketHome" class="page">
		<tab-com></tab-com>
		<header style="padding: 5px 0;">
			<div><i class="iconfont icon-tianjiahaoyou"></i></div>
			<div class="healthMarketHome-searchBar">
				<i class="iconfont icon-sousuo"></i>
				<el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入商品名称或 店铺名称" @select="handleSelect"></el-autocomplete>
				<i class="iconfont icon-huiseyuancha" @click="handleHealthMarketHomeCancelInput()"></i>
			</div>
			<div><i class="iconfont icon-tixing"></i></div>
		</header>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<section class="healthMarketHome-con">
					<el-tabs v-model="activeName" @tab-click="handleClick" stretch tab-position=top>
						<el-tab-pane label="健康驾校" name="second">
							<swiper :options="swiperOption">
								<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
									<img :src='slide.src' />
								</swiper-slide>
								<div class="swiper-pagination" slot="pagination">

								</div>
							</swiper>
							<div class="healthMarketHome-navigate">
								<div @click="handlerToPlayFood()">
									<b><i class="iconfont icon-nangua"></i></b>
									<span>玩转食物</span>
								</div>
								<div @click="handlerToSportGuide()">
									<b><i class="iconfont icon-2jiankangzhishi"></i></b>
									<span>运动指南</span>
								</div>
								<div>
									<b><i class="iconfont icon-boy"></i></b>
									<span>玩转食物</span>
								</div>
								<div>
									<b><i class="iconfont icon-girl"></i></b>
									<span>玩转食物</span>
								</div>
							</div>
							<article class="healthMarketHome-article">
								<div>
									<div>
										<h2>指标恢复</h2><span>查看更多></span>
									</div>
									<div class="healthMarketHomeXWrapper" ref='healthMarketHomeXWrapper'>
										<div class="healthMarketHomeXContent">
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血糖</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
										</div>
									</div>

								</div>
								<div>
									<div>
										<h2>指标恢复</h2><span>查看更多></span>
									</div>
									<div class="healthMarketHomeXWrapper" ref='healthMarketHomeXWrapper'>
										<div class="healthMarketHomeXContent">
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血糖</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
										</div>
									</div>

								</div>
								<div>
									<div>
										<h2>指标恢复</h2><span>查看更多></span>
									</div>
									<div class="healthMarketHomeXWrapper" ref='healthMarketHomeXWrapper'>
										<div class="healthMarketHomeXContent">
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血糖</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
											<div><img src="../../../static/img/zhibiaohuifu.png" /><span>血压</span></div>
										</div>
									</div>
								</div>
							</article>
						</el-tab-pane>
						<el-tab-pane label="社区" name="first">社区</el-tab-pane>
						<el-tab-pane label="体检评估" name="third">体检评估</el-tab-pane>
						<el-tab-pane label="家庭阴阳师" name="fourth">家庭阴阳师</el-tab-pane>
					</el-tabs>
				</section>
			</div>
		</div>
	</div>

</template>

<script>
    import axios from 'axios'
    import BScroll from 'better-scroll'
    import tab from '../foorterGuid/footerGuild'

    export default {
        name: 'carrousel',
        components: {
            'tab-com': tab,

        },
        data() {
            return {
                swiperOption: {
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper 
                    　　observeParents: true, //修改swiper的父元素时，自动初始化swiper 
                    　　loop: true,
                    　　autoplay: false,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperSlides: [{
                    src: "http://lorempixel.com/400/200/sports"
                }, {
                    src: "http://lorempixel.com/400/200/sports/C7SKY-COM"
                }, {
                    src: "http://lorempixel.com/400/200/sports"
                }, {
                    src: "http://lorempixel.com/400/200/sports/C7SKY-COM"
                }, {
                    src: "http://lorempixel.com/400/200/sports"
                }],
                show: true,
                restaurants: [],
                state4: '',
                timeout: null,
                activeName: 'second'
            };
        },
        methods: {
            //			headlerToken() {
            //				axios.get('http://192.168.1.164:8080/health-web/modules/umsdistribution/userInfoByPromotionCode?promotionCode=abcdefg', {
            //						params: {
            //							ID: 12345
            //						}
            //					})
            //					.then(function(response) {
            //						console.log(response);
            //					})
            //					.catch(function(error) {
            //						console.log(error);
            //					});
            //			},
            handlerToPlayFood() {
                this.$router.push({
                    name: 'playFood'
                })
            },
            handlerToSportGuide() {
                this.$router.push('/mymotion')
            },
            handleHealthMarketHomeCancelInput() {
                this.state4 = ""
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            loadAll() {
                return [{
                    "value": "北京大学第三医院",
                    "address": "长宁区新渔路144号"
                }, {
                    "value": "北京466医院",
                    "address": "上海市长宁区淞虹路661号"
                }, {
                    "value": "中国中医科学院西苑医院",
                    "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
                }, {
                    "value": "北京肿瘤医院",
                    "address": "天山西路438号"
                }, {
                    "value": "解放军总医院第二附属医院",
                    "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
                }, {
                    "value": "中国人民解放军空军总医院",
                    "address": "上海市长宁区金钟路633号"
                }, {
                    "value": "海军总医院",
                    "address": "上海市嘉定区曹安公路曹安路1685号"
                }, {
                    "value": "北京世纪坛医院",
                    "address": "上海市普陀区同普路1435号"
                }, {
                    "value": "北京大学口腔医院",
                    "address": "上海市北翟路1444弄81号B幢-107"
                }, {
                    "value": "星移浓缩咖啡",
                    "address": "上海市嘉定区新郁路817号"
                }, {
                    "value": "阿姨奶茶/豪大大",
                    "address": "嘉定区曹安路1611号"
                }, {
                    "value": "新麦甜四季甜品炸鸡",
                    "address": "嘉定区曹安公路2383弄55号"
                }, {
                    "value": "Monica摩托主题咖啡店",
                    "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
                }, {
                    "value": "浮生若茶（凌空soho店）",
                    "address": "上海长宁区金钟路968号9号楼地下一层"
                }, {
                    "value": "NONO JUICE  鲜榨果汁",
                    "address": "上海市长宁区天山西路119号"
                }, {
                    "value": "CoCo都可(北新泾店）",
                    "address": "上海市长宁区仙霞西路"
                }, {
                    "value": "快乐柠檬（神州智慧店）",
                    "address": "上海市长宁区天山西路567号1层R117号店铺"
                }, {
                    "value": "Merci Paul cafe",
                    "address": "上海市普陀区光复西路丹巴路28弄6号楼819"
                }, {
                    "value": "猫山王（西郊百联店）",
                    "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
                }, {
                    "value": "枪会山",
                    "address": "上海市普陀区棕榈路"
                }, {
                    "value": "纵食",
                    "address": "元丰天山花园(东门) 双流路267号"
                }, {
                    "value": "钱记",
                    "address": "上海市长宁区天山西路"
                }, {
                    "value": "壹杯加",
                    "address": "上海市长宁区通协路"
                }, {
                    "value": "唦哇嘀咖",
                    "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
                }, {
                    "value": "爱茜茜里(西郊百联)",
                    "address": "长宁区仙霞西路88号1305室"
                }, {
                    "value": "爱茜茜里(近铁广场)",
                    "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
                }, {
                    "value": "鲜果榨汁（金沙江路和美广店）",
                    "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
                }, {
                    "value": "开心丽果（缤谷店）",
                    "address": "上海市长宁区威宁路天山路341号"
                }, {
                    "value": "超级鸡车（丰庄路店）",
                    "address": "上海市嘉定区丰庄路240号"
                }, {
                    "value": "妙生活果园（北新泾店）",
                    "address": "长宁区新渔路144号"
                }, {
                    "value": "香宜度麻辣香锅",
                    "address": "长宁区淞虹路148号"
                }, {
                    "value": "凡仔汉堡（老真北路店）",
                    "address": "上海市普陀区老真北路160号"
                }, {
                    "value": "港式小铺",
                    "address": "上海市长宁区金钟路968号15楼15-105室"
                }, {
                    "value": "蜀香源麻辣香锅（剑河路店）",
                    "address": "剑河路443-1"
                }, {
                    "value": "北京饺子馆",
                    "address": "长宁区北新泾街道天山西路490-1号"
                }, {
                    "value": "饭典*新简餐（凌空SOHO店）",
                    "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
                }, {
                    "value": "焦耳·川式快餐（金钟路店）",
                    "address": "上海市金钟路633号地下一层甲部"
                }, {
                    "value": "动力鸡车",
                    "address": "长宁区仙霞西路299弄3号101B"
                }, {
                    "value": "浏阳蒸菜",
                    "address": "天山西路430号"
                }, {
                    "value": "四海游龙（天山西路店）",
                    "address": "上海市长宁区天山西路"
                }, {
                    "value": "樱花食堂（凌空店）",
                    "address": "上海市长宁区金钟路968号15楼15-105室"
                }, {
                    "value": "壹分米客家传统调制米粉(天山店)",
                    "address": "天山西路428号"
                }, {
                    "value": "福荣祥烧腊（平溪路店）",
                    "address": "上海市长宁区协和路福泉路255弄57-73号"
                }, {
                    "value": "速记黄焖鸡米饭",
                    "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
                }, {
                    "value": "红辣椒麻辣烫",
                    "address": "上海市长宁区天山西路492号"
                }, {
                    "value": "(小杨生煎)西郊百联餐厅",
                    "address": "长宁区仙霞西路88号百联2楼"
                }, {
                    "value": "阳阳麻辣烫",
                    "address": "天山西路389号"
                }, {
                    "value": "南拳妈妈龙虾盖浇饭",
                    "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
                }];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            //			this.headlerToken()
            //			BScroll
            this.scroll = new BScroll(this.$refs.wrapper, {
                tap: true,
                click: true,
                pullUpLoad: true,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                }
            })
            this.scroll.on("pullingUp", () => {
                console.log('触底了')
            })
            this.scroll.on('pullingDown', () => {
                console.log('触顶了')
            })
            this.XScroll = new BScroll(this.$refs.healthMarketHomeXWrapper, {
                scrollX: true,
                freeScroll: true,
                startX: 0,
                tap: true,
            })

            //			搜索
            this.restaurants = this.loadAll();
            //			swiper

            setInterval(() => {
                console.log('simulate async data')
                if (this.swiperSlides.length < 5) {
                    this.swiperSlides.push(this.swiperSlides.length + 1)
                }
            }, 3000)

        }
    };
</script>

<style>
    @import '../../assets/healthMarket/healthMarketHome.css';
</style>