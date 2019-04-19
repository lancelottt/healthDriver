<template>
	<div>
		<div class="headList">
			<div class="headHeader">
				<div class="handBack">
					<div class="voiceHeader">
						<div class="voiceHeaderLeft" @click="voiceHea()">
							<img src="../../../../static/images/fanhui.png" />
						</div>
						<div class="voiceHeaderRight">语音设置</div>
					</div>
				</div>
			</div>
				<!--语音列表内容**-->
				<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :style="{'-webkit-overflow-scrolling': scrollMode}">
					<div class="headZong">
						<div class="headContent">
							<div class="headUl" v-for="(record,index) in pageList " :index='index'>
								<!--<audio :src="record.isaShow" controls="controls" preload id="music" hidden="hidden"> </audio>-->
								<!--<audio src="http://192.168.1.145:8001/userVideoBank/11.mp3" controls="controls" preload id="music" > </audio>-->
								
								<div class="liOne" :class="{liOne1:nowindex == index}" @click="bofang(record.isaShow,index)">
									<!--<img src="../../../../static/images/biguan.png" />-->
								</div>
								<!--暂停**-->
								<!--<div class="liOne" @click="zZbofang(record.isaShow)"  v-show='isStopAudio' >-->
									<!--<img src="../../../../static/images/kaiguan.png" />-->
								<!--</div>-->
								<div class="liTwo">
									{{record.voiceName}}
								</div>
								<div class="liTree" @click="deleteVolice(record.userVoiceBankCode)">
									删除
								</div>
							</div>
						</div>
					</div>
					<div class="noData" v-show="noData">已无数据</div>
				</mt-loadmore>	
			<div class="dialog_fixed" v-show='isDialog' @click="hideDialog">
				<div class="dialog_fixed_play">
					<img src="../../../../static/images/123.gif" />
				</div>
			</div>
			<!--<button class="playButton" v-show='isPlayAudio' @click="playAudio"></button>
			<button class="stopButton" v-show='isStopAudio' @click="stopAudio"></button>-->
		</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	import { Loadmore } from 'mint-ui';
	import { get  ,deletes} from '../../../api/fetch.js'
	let play = null
	export default {
		data() {
			return {
				pageList: [],
				nowindex:100000000,
				isPlayAudio: true,
				isStopAudio: false,
				isDialog:false,
				allLoaded:false,
		        searchCondition:{                       //分页属性  
		          currPage:1,                           //页数
		          pageSize:10                     //每页条数
		        }, 
		         scrollMode:"auto" ,
		         noData:false,
		         scrollMode:"touch" 
			}
		},
		methods: {
			voiceHea(){
				this.$router.back();
			},
			loadBottom(){
				 this.more();                             // 上拉触发的分页查询  
	             this.$refs.loadmore.onBottomLoaded();    // 固定方法，查询完要调用一次，用于重新定位  
			},
			uservoicebank() {
				get('/health-web/modules/uservoicebank/list', this.searchCondition).then((res) => {
					if(res.code == 0) {
						let aaa = res.basePath
						res.page.records.forEach((item,index) => {
							item.isaShow = aaa + item.voicePath
							item.isplay = false
						})
						this.isHaveMore(1);
						let newlist = res.page.records
//						if (newlist.length <= 0) {
//							this.noData = true
//						} else{
//							this.noData = false
							this.pageList = [...this.pageList,...newlist]
				       		this.$nextTick(function () {  
           						this.scrollMode = "touch"
         					}); 
//						}
					}
				})
			},
			bofang(path,i) {
				this.isDialog = true
				this.playAudioNow(path)
			},
			playAudioNow(path) {
				console.log(path)
				if(path == '' || path === null || path === 'null' || path === 'undefind') {
					alert('无录音文件')
					return
				}
				if(play == '' || play === null || play === 'null' || play === 'undefind') {
					play = plus.audio.createPlayer(path);
					play.play(function() {
						play.stop()
						play = null;
					}, function() {
						this.isDialog = false
						play.stop()
						play=null
					})
				} else {
					this.isDialog = false
					play.stop();
					play = null;
				}
			},
			hideDialog(){
				this.isDialog = false
				play.stop();
				play = null;
			},
			deleteVolice(code){
				console.log(code);
				MessageBox.confirm('确定删除此录音吗?').then(action => {
					deletes('/health-web/modules/uservoicebank/delete?userVoiceBankCodes='+code).then((res) => {
						if(res.code == 0) {
							this.$message({
            					message:'删除成功',
            					type:'success'
            				})
						}
					})
				})
			},
			more(){
			  this.searchCondition.currPage +=1
		      this.uservoicebank();                      // 分页查询  
		    },  
		    isHaveMore(HaveMore){     
		    	console.log(HaveMore)// 是否还有下一页，如果没有就禁止上拉刷新
		        this.allLoaded = true;     //true是禁止上拉加载
		        if(HaveMore){  
		          this.allLoaded = false;  
		        }  
		      }
		},
		created() {
			this.uservoicebank()
		}
	}
</script>

<style scoped="scoped">
	@import '../../../assets/me/vioceList.css';
</style>