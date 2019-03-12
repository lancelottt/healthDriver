<template>
	<div class="revenue">
		<div class="revenContent">
			 <div class="memTop">
		        <div class="memLe" @click="handlerBack()">
		            <div class="meImg"></div>
		        </div>
		        <div class="memCe">
		            我的预计收入
		        </div>
		        <div class="memRi">
		            <div></div>
		            <div></div>
		        </div>
		     </div>
       </div>
       <!--当月，当周**-->
       <div class="month">
	       <!--<div class="monthYue">-->
			  <div class="page-navbar">
				    <mt-navbar class="page-part" v-model="selected">
				      <mt-tab-item id="1">当日</mt-tab-item>
				      <mt-tab-item id="2">当周</mt-tab-item>
				      <mt-tab-item id="3">当月</mt-tab-item>
				      <mt-tab-item id="4">累计</mt-tab-item>
				    </mt-navbar>
				    <mt-tab-container v-model="selected">
				      <mt-tab-container-item id="1">
				                           当日 
				      </mt-tab-container-item>
				      <mt-tab-container-item id="2">
				                    当周
				      </mt-tab-container-item>
				      <mt-tab-container-item id="3">
				                          当月
				      </mt-tab-container-item>
				      <mt-tab-container-item id="4">
				          <div class="fanli">
				          	<div class="fanliContent">
				          		<div class="fanTu">
				          			<div class="tuDinwei">
				          				<div class="tuDinLeft">
				          					<p>预计收入（元）</p>
				          					<p>2018.11.04-2018.12.09</p>
				          					<p>0.00</p>
				          				</div>
				          				<div class="tuDinRight">
				          					返利说明
				          				</div>
				          			</div>
				          		</div>
				          		 <!--全部**-->
				          <div class="whole">
				          	<div class="wholeUl">
				          		<ul>
				          			<li>全部</li>
				          			<li>退款</li>
				          			<li>已结算</li>
				          			<li>未结算</li>
				          		</ul>
				          	</div>
				          	<div class="wholeRi">活动奖励</div>
				          </div>
				          	</div>
				          </div>  
				          <!--搜索**-->
				         <div class="serch">
				         	<div class="serchCon">
				         		<div class="serLeft">
				                   <div class="block">
									    <span class="demonstration"></span>
									    <el-date-picker
									      v-model="value1"
									      type="date"
									      placeholder="时间筛选">
									    </el-date-picker>
                                   </div>
				         		</div>
				         		<div class="serCenter">
				         			<div class="serServer">
				         				<div class="serContent">
				         					<div class="serImg">
				         						<img src="../../../static/images/search.png"/>
				         					</div>
				         					<div class="serInout">
				         				          <input type="text" name="" id="" placeholder="请输入订单号" />
				         			        </div>
				         			<div class="cha"></div>
				         				</div>
				         			</div>
				         			
				         		</div>
				         		<div class="serRight">搜索</div>
				         	</div>
				         </div>
				      </mt-tab-container-item>
				    </mt-tab-container>
               </div>
	     <!--</div>-->
       </div>
       
	</div>
</template>

<script>
export default {
  name: 'page-navbar',
  data() {
    return {
      selected: '4',
       pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
    };
  },
  methods:{
  	handlerBack () {
  		this.$router.go(-1);
  	}
  }
};
</script>

<style scoped="scoped">
@import '../../assets/revenue/revenue.css';
</style>