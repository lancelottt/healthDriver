<template>
    <div>
    	<div class="march">
    			<div class="distance">累计跑步距离</div>
	    		<div class="grade">
	    			<div class="gradeKilometre">
	    				<div class="gradeKilometreLeft">
	    					<span>41.94</span>
	    					<span>公里</span>
	    				</div>
	    				<div class="gradeKilometreRight">等级 R3</div>
	    			</div>
	    			<div class="pageProgress">
	    				
	    			</div>
	    		</div>
	    		<!--户外跑，跑步机，燃脂跑**-->
	    		<div class="outdoors">
	    			<div class="page-navbar">
	    		    <mt-navbar id="mint-navbar" class="page-part" v-model="selected">
		                <mt-tab-item id="1">户外跑</mt-tab-item>
		                <mt-tab-item id="2">跑步机</mt-tab-item>
		                <mt-tab-item class="itemMt" id="3">燃脂跑</mt-tab-item>
		             </mt-navbar>
			        <mt-tab-container v-model="selected">
					      <mt-tab-container-item id="1">
					        <div class="selectImg">
					        	<img src="../../../../static/images/daohang.png"/>
					        </div>
					      </mt-tab-container-item>
					      <mt-tab-container-item id="2">
					       2
					      </mt-tab-container-item>
					      <mt-tab-container-item id="3">
					       3
					      </mt-tab-container-item>
	                </mt-tab-container>
	    			</div>
	    		</div>
	    		<!--为你推荐**-->
    	          <div class="nominate">
    	          	<div class="nominateTop">为你推荐</div>
    	          	<div class="nominateImg">
    	          		 <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
						    <!-- slides -->
						    <swiper-slide>
						    	<img class="swiImg" src="../../../../static/images/niaocao.png" alt="" />
						    	<p>鸟巢</p>
						    </swiper-slide>
						    <swiper-slide>
						    	<div class="swiperSli">
						    		<img src="../../../../static/images/wangjiang.png" alt="" />
						    		<p>望京</p>
						    	</div>
						    </swiper-slide>
						    <swiper-slide>
						    	<div class="swiperSli">
						    		<img src="../../../../static/images/wangjiang.png" alt="" />
						    		<p>望京</p>
						    	</div>
						    </swiper-slide>
						    <swiper-slide>
						    	<img class="swiImg" src="../../../../static/images/niaocao.png" alt="" />
						    	<p>鸟巢</p>
						    </swiper-slide>
						  </swiper>
    	          	</div>
    	          </div>
    	</div>
    	
    </div>
</template>
<script>
export default {
	 data() {
      return {
      	 selected: '1',
      	  swiperOption: {
      	  	slidesPerView : 2,
      	  	freeMode : true,
      	  	spaceBetween : 5,
        }
      }
        }
	}
</script>
<style lang="" scoped>  
@import '../../../assets/sports/run.css';
</style>
