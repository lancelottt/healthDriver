<template>
  <div class="knowFoodFruit">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"  @click="goKnonwFoodMean">
      <div class="foodDes">
        <span>椰子</span>
        <div class="foodStart">
          <img src="../../../../static/images/stary.gif" />
          <img src="../../../../static/images/stary.gif" />
          <img src="../../../../static/images/starg.png" />
          <img src="../../../../static/images/starg.png" />
          <img src="../../../../static/images/starg.png" />
        </div>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script type="text/javascript">
import vueWaterfallEasy from 'vue-waterfall-easy';
import axios from 'axios';

	export default{
		data() {
       return {
          imgsArr: [
			       {src: "../../../../static/images/foods_fun_05.gif"},
		      	 {src: "../../../../static/images/foods_fun_03.gif"},
			       {src: "../../../../static/images/foods_fun_10.gif"},
             {src: "../../../../static/images/foods_fun_05.gif"}
		      ],
           group: 0, 
       }
     },
		 components: {
       vueWaterfallEasy
     },
		 methods: {
       getData() {
         axios.get('./static/mock/data.json?group=' + this.group) 
            .then(res => {
             this.imgsArr = this.imgsArr.concat(res.data)
             this.group++
         })
       },
       goKnonwFoodMean() {
           console.log(123)
          //  this.$router.push('/KwnoFood/fruit/details')
          this.$router.push('/KwnoFood/fruit/details')
       }
     },
     created() {
         // this.getData()
     }
	}
</script>
<style type="text/css">
  body {
    background: #f2f2f2;
  }

  .knowFoodFruit {
    width: 100%; 
    position: absolute;
    top:calc( 1rem  + 6.3%);
    bottom: 0;
  }

  .knowFoodFrui img {
    width: 100%;
  }

  .foodDes {
    text-align: left;
    padding: 0.2rem;
  }
  .foodStart{
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
  a:hover{
    color: #999;
  }

</style>
