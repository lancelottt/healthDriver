<template>
	<div id="kwnoFood">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>玩转食物</span><span></span></header>
		<div class="kwnoFoodHeader">
		  <div class="kwnoFoodHeaderMain">
	         <swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in foodMenuList" :key="index">
					<div  @click="checkFruit(item.foodMenuId,index)" class="item-title">
						<b :class="{'fruitActive': index == activeId}">{{item.foodMenuName}}</b>
					</div>
					</swiper-slide>
			 </swiper> 
		  </div>
		</div>
        <FruitList :foodList="foodList" @getMoreData="getFoodList"></FruitList> 
	</div>
</template>
<script type="text/javascript">
    import FruitList from '../../components/healthMarket/kwnoFoodComponents/fruit.vue';
    import {get,
        post
    } from '../../api/fetch.js';
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                activeId: 0,
                currPage: 1,
                limit: 11,
                currPageF: 1,
                limitF: 10,
                foodMenuList: [],
                foodList: [],
                menuId: null,
                swiperOption: {
                    spaceBetween: 10,
                    freeMode: true,
                    setWrapperSize: false,
                    slidesPerView: 5,
                },
            }
        },
        components: {
            FruitList
        },
        created() {
            this.getFoodMenu();
        },
        methods: {
            handleBack() {
                // this.$router.push('/healthMarket/playFood')
                this.$router.push('/healthyZ')
            },
            checkFruit(foodId, index) {
                this.activeId = index;
                this.menuId = foodId;
                this.currPageF = 1
                this.foodList = [];
                this.getFoodList();
            },
            getFoodMenu() {
                get('/health-web/sys/hfmfoodmenu/list', {
                    limit: this.limit,
                    currPage: this.currPage
                }).then((res) => {
                    if (res.code == 0) {
                        this.foodMenuList = res.page.list;
                        this.menuId = this.foodMenuList[0].foodMenuId;
                        this.getFoodList(this.foodMenuList[0].foodMenuId)
                    }
                })
            },
            getFoodList() {
                get('/health-web/sys/hfmfood/list', {
                    foodMenuId: this.menuId,
                    limit: this.limit,
                    currPage: this.currPageF
                }).then((res) => {
                    if (res.code == 0) {
                        var _this = this;

                        var arr = res.page.list;
                        this.foodList.push(...this.filterData(arr));
                        this.currPageF++;
                        if (res.page.list.length < _this.currPageF) {
                            Toast('提示信息');
                            return;
                        }
                        console.log('currPageF' + this.currPageF)
                    }
                })
            },
            filterData(list) {
                var arr = [];
                for (var i = 0; i < list.length; i++) {
                    console.log(list[i])
                    arr.push({
                        src: list[i].foodImgurl,
                        info: list[i].foodName,
                        start: list[i].foodLevel,
                        foodId: list[i].foodId

                    })
                }
                return arr;
            }

        },

    }
</script>
<style type="text/css" scoped>
    @import '../../assets/common/scss/common.css';
    @import '../../assets/healthMarket/playFood/kwnoFood/kwnoFood.css';
    .kwnoFoodHeader {
        width: 100%;
        height: 45px;
        line-height: 45px;
        overflow: hidden;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    
    .kwnoFoodHeaderBar {
        float: left;
        margin: 0 20px;
    }
    
    .item-title {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        overflow: hidden;
        text-align: center;
    }
    
    .fruitActive:after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        height: 40px;
        top: 0;
        left: 0;
        border-bottom: 2px solid #FF5E3A;
    }
</style>