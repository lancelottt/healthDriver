<template>
  <div class="exper">
    <search-header></search-header> 
  </div>
</template>

<script>
import SearchHeader from "../searchHeader/searchHeader";
export default {
	props:{
		PartsUpper:''
	},
  data() {
    return {
      partsIndex: 0
    };
  },
  created(){
	  console.log(this.PartsUpper)
  },
  methods: {
    handConspan() {
      this.$router.back();
    }
  },
  components: {
    SearchHeader
  }
};
</script>

<style scoped="scoped">
<<<<<<< HEAD
.exper {
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 99;
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
  background: #f2f2f2;
}
.hotExpe:after {
  clear: both;
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
.hotExpe {
  width: 100%;
  height: auto;
  zoom: 1;
}
.hotExpeLeft {
  float: left;
  background: url(../../../static/images/sousuoR.png) no-repeat center;
  background-size: 100% 100%;
  width: 0.5rem;
  height: 0.43rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
}
.hotExpeIn {
  width: 77%;
  height: 0.63rem;
  float: left;
  text-align: left;
  background: #f2f2f2;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.hotExpeIn input {
  width: 100%;
  outline: none;
  height: 0.63rem;
  background: none;
  font-size: 0.24rem;
  color: #333333;
  padding-left: 0.2rem;
  box-sizing: border-box;
  line-height: 0.63rem;
}
.hotExpeRight {
  width: 0.36rem;
  height: 0.37rem;
  background: url(../../../static/images/ExpeLeft01.png) no-repeat center;
  background-size: 100% 100%;
  float: right;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.hotLeft {
  float: left;
  margin-top: 0.15rem;
  width: 7%;
}
.hotRight {
  float: left;
  width: 93%;
  height: 0.63rem;
  position: relative;
}
.chahao {
  width: 0.37rem;
  height: 0.37rem;
  background: url(../../../static/images/chahao.png) no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
}
.contents {
  width: 100%;
  background: #fff;
  height: 0.75rem;
  line-height: 0.75rem;
  font-size: 0.28rem;
  color: #333333;
  text-align: left;
  padding-left: 0.3rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.contents span:nth-of-type(2) {
  margin-left: 0.2rem;
  display: inline-block;
}
.conSpan {
  width: 0.41rem;
  height: 0.33rem;
  background: url(../../../static/images/fanhui.png) no-repeat center;
  background-size: 100% 100%;
  display: inline-block;
}

.upperList {
  width: 100%;
  height: 0.91rem;
  margin: auto;
  font-size: 0.28rem;
  background: #fff;
  padding: 0 5.5%;
  box-sizing: border-box;
}

.list {
  width: 32%;
  float: left;
  text-align: center;
  font-size: 0.28rem;
  color: #999999;
  height: 0.91rem;
  line-height: 0.91rem;
=======
.exper{
	width: 100%;
    height: 1.4rem;
    position: fixed;
    z-index: 99;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
}
.hotExpe:after{
	 clear:both;content:'';display:block;width:0;height:0;visibility:hidden; 
}
.hotExpe{
	background: #fff;
	width: 100%;
	height:auto;
	zoom:1;
}
.hotExpeLeft{
    float: left;
    background: url(../../../static/images/sousuoR.png) no-repeat center;
    background-size: 100% 100%;
    width: .5rem;
    height: .43rem;
    margin-left: .3rem;
    margin-right: .2rem;
    margin-top: .1rem;
}
.hotExpeIn{
	width: 77%;
	height: .63rem;
	float: left;
	text-align: left;
	background: #f2f2f2;
	padding-left: .2rem;
    box-sizing: border-box;
}
.hotExpeIn input{
	width:100%;
	outline: none;
	height: .63rem;
	background: none;
	font-size: .24rem;
	color: #333333;
	padding-left: .2rem;
	box-sizing: border-box;
	line-height: .63rem;
}
.hotExpeRight{
	width: .36rem;
    height: .37rem;
    background: url(../../../static/images/ExpeLeft01.png) no-repeat center;
    background-size: 100% 100%;
    float: right;
    margin-top: .1rem;
    margin-right: .1rem;
}
.hotLeft{
	float: left;
    margin-top: .15rem;
    width:7%;
}
.hotRight{
	float: left;
    width: 93%;
    height: .63rem;
    position: relative;
}
.chahao{
	width:.37rem;
	height: .37rem;
	background: url(../../../static/images/chahao.png) no-repeat center;
	background-size: 100% 100%;
    position: absolute;
    right: .15rem;
    top: .15rem;
}
.contents{
	    width: 100%;
    background: #fff;
    height: .75rem;
    line-height: .75rem;
    font-size: .28rem;
    color: #333333;
    text-align: left;
    padding-left: .3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.contents span:nth-of-type(2){
    margin-left: .2rem;
	display: inline-block;
}
.conSpan{
	width:.41rem;
	height: .33rem;
	background: url(../../../static/images/fanhui.png) no-repeat center;
	background-size: 100% 100%;
	display: inline-block;
>>>>>>> f0151515026e515e9a72a68470a6c9257ca1d94f
}

.active {
  color: #ff5e3a;
  border-bottom: 0.06rem solid #ff5e3a;
  box-sizing: border-box;
}
</style>