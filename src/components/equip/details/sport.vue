<template>
  <div>
    <!--商品血压计**-->
    <div class="meter" v-if="info">
      <div class="meterImg">
		  <img :src="info.pic" alt="">
	  </div>
      <div class="meterJianshu"  >
        <span>¥{{info.price}}</span>
        <!-- <span>¥ 530.00 + 800</span> -->
        <!-- <span>已售1810件</span> -->
      </div>
      <p>{{info.productCategoryName}}</p>
      <p class="title">{{info.subTitle}}</p>
      <!-- <div class="meterLocation">
				<div class="gouwu"></div>
				<div class="commod"></div>
      </div>-->
    </div>
    <!--点亮健康心愿**-->
	<!-- <div v-html="info.detailHtml"></div> -->
    <!-- <div class="wish"></div> -->
    <!--更多需求**-->
    <!-- <div class="demand"></div> -->
    <!--健康愿望**-->
    <!-- <div class="desire"></div> -->
  </div>
</template>

<script>
import { get } from "../../../api/fetch";
export default {
  data() {
    return {
      info: null
    };
  },
  created() {
    this.getProductInfo();
    console.log("sports");
  },
  methods: {
    getProductInfo() {
      get(`/health-web/modules/pmsproduct/info/${this.$route.query.id}`).then(
        res => {
			this.info =res.pmsProduct;
		}
      );
    }
  }
};
</script>

<style scoped="scoped">
@import "../../../assets/equip/sport.css";
</style>