<template>
        <div class="hadHea">
      <div class="hadHeaContent">
        <div class="had">
            <div class="componentHeader-header">
                <div class="Tp" @click="handlerBack()">
                    
                </div>
                <div class="headerAmic">运动课程</div>
                <div class="headerFb">
                 
                </div>
            </div>
        </div>
        <!--猜你喜欢**-->
        <div class="guessYou">
        	<div class="guessContent">
        		<p>猜你喜欢</p>
        		<div class="guessYouImg">
        			<ul>
        				<li>
        					<img src="../../../../static/images/sport01.png" alt="" />
        				    <p>腹部燃脂训练 初级</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport02.png" alt="" />
        				    <p>缓减肩颈僵硬</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport03.png" alt="" />
        				    <p>动作讲解：卷腹</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport04.png" alt="" />
        				    <p>马甲线 你好</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport05.png" alt="" />
        				    <p>跑后拉伸</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport06.png" alt="" />
        				    <p>腰腹零基础塑形</p>
        				</li>
        			</ul>
        		</div>
        	</div>
        </div>
        </div>
        <!--热门课程**-->
        <div class="coursesContent">
         <div class="courses">
         	<div class="guessContent">
        		<p>猜你喜欢</p>
        		<div class="guessYouImg">
        			<ul>
        				<li>
        					<img src="../../../../static/images/sport07.png" alt="" />
        				    <p>消除小肚子</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport10.png" alt="" />
        				    <p>身材雕刻初级</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport11.png" alt="" />
        				    <p>躺着瘦 马甲线课程</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport12.png" alt="" />
        				    <p>躺着瘦 臀腿课程</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport13.png" alt="" />
        				    <p>搏击·火力全开</p>
        				</li>
        				<li>
        					<img src="../../../../static/images/sport15.png" alt="" />
        				    <p>燃脂大作战</p>
        				</li>
        			</ul>
        		</div>
        	</div>
         </div>
         </div>
       </div>
    <!-- </div> -->
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
    	handlerBack(){
    		this.$router.back()
    	}
    }
}
</script>
<style lang="" scoped>
@import '../../../assets/sports/sportCurric.css';
.shopCom{
    width:100%;
    height: auto;
    padding-bottom: 1.15rem;
    box-sizing: border-box;
    background: #eeeeee;
}
.hadHea{
    width:100%;
    height: auto;
    background: #eee;
}
.had{
    width:94%;
    height: .99rem;
    margin: auto;
}
  .componentHeader-header{
    width: 96%;
    /* height: .87rem; */
    box-sizing: border-box;
    color: black;
    line-height: .87rem;
    margin: auto;
    font-size: .28rem;
}
.Tp{
    float: left;
    width:.41rem;
    height: .33rem;
   background: url(../../../../static/images/ShareIcon.png) no-repeat center;
    background-size: 100% 100%;
    margin-top: .3rem;
}
.Tpi{
    font-size: .54rem;
}
.headerAmic{
    width: 79%;
    height: 100%;
    margin: auto;
    font-size: .34rem;
    margin-left: .35rem;
    text-align: left;
    float: left;
}
.headerFb{
    width: .28rem;
    height: .28rem;
    line-height: .29rem;
    color: #ffffff;
    float: right;
    margin-top: .3rem;
    background: url(../../../../static/images/search.png) no-repeat center;
    background-size: 100% 100%;
} 
</style>
