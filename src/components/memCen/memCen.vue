<template>
    <div class="mem">
         <div class="fanA">
        <div class="memCen">
            <div class="memImg">
                <div class="memTop">
                    <div class="memLe" @click="handlerBack()">
                        <div class="meImg"></div>
                    </div>
                    <div class="memCe">
                                                                             团队中心
                    </div>
                    <div class="memRi">
                        <div></div>
                        <div @click="handShezhi()"></div>
                    </div>
                </div>
            </div>
            <div class="memCon">
                <div class="conCen">
                    <div class="conZ">
                        <div class="cenImg">
                        </div>
                    </div>
                    <div class="hailo">
                        <p>HaiLong</p>
                        <p>推荐人：梁玉军</p>
                    </div>
                    <div class="code">
                       <div class="codeLe">
                          邀请码 x1l6bZRw
                       </div>
                       <div class="codeRi">复制</div>
                    </div>
                </div>
            </div>
        </div>
       
        <!-- 我的粉丝，订单管理** -->
        <div class="fans">
            <div class="fanCen">
                 <ul>
                     <li>
                         <p>0</p>
                         <p>我的粉丝</p>
                     </li>
                     <li>
                         <p>0</p>
                         <p>订单管理</p>
                     </li>
                 </ul>
            </div>
        </div>
        <!-- 预计收入** -->
        <div class="income">
            <div class="inZi">预计收入（元）</div>
        <div class="inUl">
           <ul>
               <li @click="hangLi()">
                   <p>0</p>
                   <P>今日预计收入（元）</p>
                   <div class="xian"></div>
               </li>
               <li>
                   <p>0</p>
                   <p>本周预计收入（元）</p>
               </li>
               <li>
                   <p>0</p>
                   <p>本月预计收入（元）</p>
                     <div class="xian"></div>
               </li>
               <li>
                   <p>0</p>
                   <p>累计预计收入（元）</p>
               </li>
           </ul>
        </div>
        </div>
        <div class="balanZ">
              <!-- 账户余额** -->
              <div class="balan">
                  <div class="balanLe">
                      <span>账户余额（元）</span>
                      <span>0</span>
                  </div>
                  <div class="balanRi">
                      <span>提现</span>
                      <span></span>
                  </div>
              </div>
              <!-- 商学院** -->
              <div class="school">
                  <div class="schTop">商学院</div>
                  <div class="schCon">
                      <ul>
                          <li>
                              <p></p>
                              <p>规则中心</p>
                          </li>
                         <li>
                              <p></p>
                              <p>新手宝典</p>
                          </li>
                         <li>
                              <p></p>
                              <p>大咖讲堂</p>
                          </li>
                         <li>
                              <p></p>
                              <p>明星采访</p>
                          </li>
                      </ul>
                  </div>
              </div>
              </div>
            
        </div>
          <!-- 公告** -->
              <div class="gonggao">公告</div>
    </div>
</template>
<script>
export default {
	data () {
		return{
			
		}
	},
    methods:{
    	handlerBack(){
    		this.$router.back()
    	},
    	hangLi () {
    		this.$router.push({name:'revenue'})
    	},
    	handShezhi () {
    		this.$router.push({name:'setupTong'})
    	}
    }
}
</script>
<style lang="" scoped>
@import './style/memCen.css';

    
</style>
