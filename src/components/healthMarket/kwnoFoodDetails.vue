<template>

  <div class="knowFoodDetails">
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">番茄</div>
      <div class="header-rigth">
        <i class="iconfont icon-icon-test"></i>
      </div>
    </div>
    <section>
      <div class="KnowFoodMean">
        <div class="knowFoodImg">
          <img src="../../../static/images/foods_fun_03.gif" />
          <span>番茄</span>
          <h3>番茄热量较低，适合简直期间使用。</h3>
        </div>
        <div class="foodStart">
          <img src="../../../static/images/stary.gif" />
          <img src="../../../static/images/starg.png" />
          <img src="../../../static/images/starg.png" />
          <img src="../../../static/images/starg.png" />
          <img src="../../../static/images/starg.png" />
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
            <strong>19</strong>千卡
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
            <strong>19</strong>千卡
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
            <strong>19</strong>千卡
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
            <strong>19</strong>千卡
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
          <li>
            <div>
              铁
            </div>
            <div>
              0.4毫克
            </div>
          </li>

          <li>
            <div>
              铁
            </div>
            <div>
              0.4毫克
            </div>
          </li>

          <li>
            <div>
              铁
            </div>
            <div>
              0.4毫克
            </div>
          </li>
        </ul>
      </div>
    </section>
    <button type="" @click="goStore">z支持门店--》》》</button>
    <button @click="goAirlines">在线问</button>
    <button @click="goDecodingData">数据解读</button>
    <router-link to="/KwnoFood/fruit/SportDevices">健康设备</router-link>
    <router-link to="/KwnoFood/fruit/voiceInputs">语音录入</router-link>
    <router-link to="/KwnoFood/fruit/addPharmacy">添加用药量</router-link>
    <router-link to="/KwnoFood/fruit/PermissionSet">添加用药量</router-link>
    <router-link to="/KwnoFood/fruit/HeartRate">心率</router-link>
  </div>
</template>
<script type="text/javascript">
	export default{
		methods: {
      handleBack() {
				this.$router.back()
			},
      goStore() {
         console.log(123123)
         this.$router.push('/KwnoFood/fruit/store')
      },
      goAirlines() {
        this.$router.push('/KwnoFood/fruit/Airlines')
      },
      goDecodingData() {
        this.$router.push('/KwnoFood/fruit/decodingData')
      }
      
    }
		
	}
</script>
<style type="text/css" scoped>
  @import '../../assets/common/scss/common.css'; 
  @import '../../assets/knowfood/knowFoodDetails.css';

</style>
