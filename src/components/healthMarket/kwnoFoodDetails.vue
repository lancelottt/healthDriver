<template>

  <div class="knowFoodDetails">
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">{{foodInfo.foodName}}</div>
      <div class="header-rigth">
        <i class="iconfont icon-icon-test"></i>
      </div>
    </div>
    <section>
      <div class="KnowFoodMean">
        <div class="knowFoodImg">
         <div class="FoodimgBg">
          <img v-bind:src="foodInfo.foodImgurl" />
           <span>{{foodInfo.foodName}}</span>
         </div>
          <h3>{{foodInfo.foodEvaluation}}</h3>
        </div>
        <div class="foodStart">
          <img src="../../../static/images/stary.gif" v-for="item in startsLen"/>
          <img src="../../../static/images/starg.png" v-for="item in greyLen"/>
        </div>
      </div>
      <div class="meanTitle">
        <h3>主要成分</h3>
      </div>
      <div class="ingredient">
        <div>
          <i>
                  <img src="../../../static/images/foodicon_1.png" alt="">
              </i>
          <h3>
            <strong>{{foodInfo.foodHeat }}</strong>千卡
          </h3>
          <h3>
            热量
          </h3>
        </div>

        <div>
          <i>
                  <img src="../../../static/images/foodicon_2.png" alt="">
              </i>
          <h3>
            <strong>{{foodInfo.foodProtein }}</strong>克
          </h3>
          <h3>
            蛋白质
          </h3>
        </div>

        <div>
          <i>
                  <img src="../../../static/images/foodicon_3.png" alt="">
              </i>
          <h3>
            <strong>{{foodInfo.foodCarbonWater }}</strong>克
          </h3>
          <h3>
            碳水
          </h3>
        </div>

        <div>
          <i>
                  <img src="../../../static/images/foodicon_4.png" alt="">
              </i>
          <h3>
            <strong>{{foodInfo.foodFat }}</strong>克
          </h3>
          <h3>
            脂肪
          </h3>
        </div>
      </div>
      <div class="meanTitle">
        <h3>主要成分</h3>
      </div>
      <div class="ingredientNum">
        <ul>
          <li v-if="foodInfo.foodCellulose">
            <div>
              维生素
            </div>
            <div>
              {{foodInfo.foodCellulose}} 克
            </div>
          </li>

          <li  v-if="foodInfo.foodVitaminA">
            <div>
              维生素A
            </div>
            <div>
                {{foodInfo.foodVitaminA}}微克
            </div>
          </li> 

           <li   v-if="foodInfo.foodVitaminC">
            <div>
             维生素C
            </div>
            <div>
               {{foodInfo.foodVitaminC}}微克
            </div>
          </li>
          
           <li   v-if="foodInfo.foodVitaminE">
            <div>
             维生素E
            </div>
            <div>
                {{foodInfo.foodVitaminE}}微克
            </div>
          </li>

           <li   v-if="foodInfo.foodCarotene">
            <div>
             胡萝卜素
            </div>
            <div>
                {{foodInfo.foodCarotene}}毫克
            </div>
          </li>

           <li   v-if="foodInfo.foodThiamine">
            <div>
             硫胺素
            </div>
            <div>
               {{foodInfo.foodThiamine}}毫克
            </div>
          </li>

           <li   v-if="foodInfo.foodRiboflavin">
            <div>
             核黄素
            </div>
            <div>
               {{foodInfo.foodRiboflavin}}毫克
            </div>
          </li>
          
           <li   v-if="foodInfo.foodNiacin">
            <div>
             烟酸
            </div>
            <div>
                {{foodInfo.foodNiacin}}毫克
            </div>
          </li>

           <li    v-if="foodInfo.foodCholesterol">
            <div>
             胆固醇
            </div>
            <div>
                {{foodInfo.foodCholesterol}}毫克
            </div>
          </li>

           <li    v-if="foodInfo.foodMagnesium">
            <div>
             镁
            </div>
            <div>
                {{foodInfo.foodMagnesium}}毫克
            </div>
          </li>

           <li  v-if="foodInfo.foodCalcium">
            <div>
             钙
            </div>
            <div>
                {{foodInfo.foodCalcium}}毫克
            </div>
          </li>

           <li  v-if="foodInfo.foodIron">
            <div>
             铁
            </div>
            <div>
                {{foodInfo.foodIron}}毫克
            </div>
          </li>

           <li  v-if="foodInfo.foodZinc">
            <div>
             锌
            </div>
            <div>
                {{foodInfo.foodZinc}}毫克
            </div>
          </li>

           <li v-if="foodInfo.foodCopper"> 
            <div>
             铜
            </div>
            <div>
                {{foodInfo.foodCopper}}毫克
            </div>
          </li>

           <li v-if="foodInfo.foodManganese">
            <div>
             锰
            </div>
            <div>
                {{foodInfo.foodManganese}}毫克
            </div>
          </li>


           <li v-if="foodInfo.foodPotassium">
            <div>
             钾
            </div>
            <div>
                {{foodInfo.foodPotassium}}毫克
            </div>
          </li>

           <li  v-if="foodInfo.foodPhosphorus">
            <div>
             磷
            </div>
            <div>
                {{foodInfo.foodPhosphorus}}毫克
            </div>
          </li>

          <li   v-if="foodInfo.foodSodium">
            <div>
             钠 
            </div>
            <div>
                {{foodInfo.foodSodium}}毫克
            </div>
          </li>

          <li   v-if="foodInfo.foodSelenium">
            <div>
             硒
            </div>
            <div>
               {{foodInfo.foodSelenium}}毫克
            </div>
          </li>
          
        </ul>
      </div>
    </section>
    <!--<button type="" @click="goStore">z支持门店--》》》</button>
    <button @click="goDecodingData">数据解读</button>
    <router-link to="/KwnoFood/fruit/SportDevices">健康设备</router-link>
    <router-link to="/KwnoFood/fruit/addPharmacy">添加用药量</router-link>
    <router-link to="/KwnoFood/fruit/PermissionSet">添加用药量</router-link>-->
  </div>
</template>
<script type="text/javascript">
    import {get
    } from '../../api/fetch.js';
    export default {
        data() {
            return {
                foodId: null,
                foodInfo: [],
                startsLen: 0,
                greyLen: 0
            }
        },
        created() {
            this.foodId = this.$route.params.id;
            this.getFoodinfo(this.foodId);
        },
        methods: {
            handleBack() {
                this.$router.back()
            },
            goStore() {
                this.$router.push('/KwnoFood/fruit/store')
            },
            goAirlines() {
                this.$router.push('/KwnoFood/fruit/Airlines')
            },
            goDecodingData() {
                this.$router.push('/KwnoFood/fruit/decodingData')
            },
            getFoodinfo(id) {
                get('/health-web/sys/hfmfood/info/' + id).then((res) => {
                    if (res.code == 0) {
                        this.foodInfo = res.hfmFood;
                        this.startsLen = res.hfmFood.foodLevel;
                        this.greyLen = 5 - res.hfmFood.foodLevel;
                    }
                })
            }
        }

    }
</script>
<style type="text/css" scoped>
    @import '../../assets/common/scss/common.css';
    @import '../../assets/knowfood/knowFoodDetails.css';
</style>