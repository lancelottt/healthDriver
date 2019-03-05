<template>
  <div class="Equitheader">
      <div class="header-left" @click="handHeaderLeft()">
          <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">健康设备</div>
      <div class="header-rigth">
      	<i class="iconfont icon-icon-test"></i>
      </div>
  </div>
</template>

<script>
export default {
  name:"header",
  data () {
  	return {
  		
  	}
  },
  methods:{
  	handHeaderLeft(){
  		this.$router.back();
  	}
  }
//props:[
//    "title"
//]
}
</script>
<style scoped>
.Equitheader{
	width:100%;
	height:.89rem;
	background: #fff;
	position: fixed;
	z-index: 1;
    padding: 0 .2rem 0 .2rem;
    box-sizing: border-box;
}
.header-left{
	width :10%;
    height:100%;
    float:left;
}
i {
	font-size: 0.6rem;
	line-height: .89rem;
	text-align: center;
	display: block;
}	
.header-in{
	 width: 80%;
    float: left;
    text-align: center;
    font-size: 0.28rem;
    line-height: 0.85rem;
    color: #333333;
}
.header-rigth{
	width: 10%;
    height :100%;
    float: left;
}
</style>
