<template>
	<div class="grayBg">
  <div class="knowFoodFruit">
    <vue-waterfall-easy :imgsArr="foodList" @scrollReachBottom="getData" :linkRange="'card'">
      <div class="foodDes"  slot-scope="props"  @click="goKnonwFoodMean(props.value.foodId)">
      <div class="fallbg"></div>
          
        <span>{{props.value.info}}</span>
        <div class="foodStart">
          <img src="../../../../static/images/stary.gif" v-for="item in props.value.start"/>
          <img src="../../../../static/images/starg.png" v-for="item in 5-props.value.start"/>
        </div> 
      </div>

      <div slot="loading" slot-scope="{isFirstLoad}">
          <div slot="loading" v-if="isFirstLoad">
              <img src="../../../../static/images/loading.gif"/>
          </div>
          <div v-else="v-else">
              <img src="../../../../static/images/loading.gif"/>
          </div>
      </div>
    </vue-waterfall-easy>
  </div>
	</div>
</template>

<script type="text/javascript">
    import vueWaterfallEasy from 'vue-waterfall-easy';
    import axios from 'axios';

    export default {
        props: {
            foodList: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                imgsArr: [{
                    src: "../../../../static/images/foods_fun_05.gif"
                }, {
                    src: "../../../../static/images/foods_fun_03.gif"
                }, {
                    src: "../../../../static/images/foods_fun_10.gif"
                }, {
                    src: "../../../../static/images/foods_fun_05.gif"
                }],
                group: 0,
            }
        },
        components: {
            vueWaterfallEasy
        },
        methods: {
            getData() {
                this.$emit('getMoreData')
            },
            goKnonwFoodMean(id) {
                this.$router.push(`/KwnoFood/fruit/details/${id}`)
            }
        }
    }
</script>
<style type="text/css">
    .grayBg {
        height: 100%;
        width: 100%;
        background: #F2F2F2;
    }
    
    .knowFoodFruit {
        width: 100%;
        position: absolute;
        top: calc( 1rem + 6.3%);
        bottom: 0;
    }
    
    .knowFoodFrui img {
        width: 100%;
    }
    
    .foodDes {
        text-align: left;
        padding: 0.2rem;
    }
    
    .foodDes span {
        width: 1.6rem;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .foodStart {
        float: right;
    }
    
    .knowFoodFruit .foodStart img {
        width: 0.2rem;
        height: 0.2rem;
    }
    
    .img-inner-box {
        background: #fff;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        ;
        border-radius: none !important;
        ;
    }
    
    .img-box {
        width: auto !important;
        ;
    }
    
    a:hover {
        color: #999;
    }
    
    .fallbg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .img-box {
        position: relative;
    }
</style>