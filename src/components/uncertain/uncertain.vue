<template>
	<div class="unheaZ">
		<Unheal/>
		<div>
			<div class="simi">
				-以下数据均为私密状态-
			</div>
			<!-- 对比照** -->
			<div class="contrast">
				<div class="conO">
					<div class="myCon">我的对比照</div>
					<div class="myTet">拍下你身体的剪影，你将会看到自己的变化</div>
					<div class="imgTu">
						<!--渲染图片**-->
						<el-upload style="width:92%;height: auto;margin: auto;" action="http://bossdu.zicp.vip:55090/health-web/modules/userCompImg/addBatch"  
							:headers="headerImg" 
							list-type="picture-card"  
							:on-remove="handleRemove"
							:on-preview="handlePictureCardPreview" 
							:file-list="fileList" 
							:on-success="handleSuccess">
							<i class="iconPlus">
						  	<img src="../../../static/images/photo.png"/>
						  	 </i>
						  	<div style="font-style: normal !important;display: inline-block;font-size: .24rem;margin-left: .06rem;color:#ff5e3a">添加照片</div>
						 
						</el-upload>
						<el-dialog :visible.sync="dialogVisible" size="tiny">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
				</div>
			</div>
			<!-- 我的状态** -->
			<div class="contrast status">
				<div class="statusConO">
					<div class="myCon">我的体重</div>
					<div class="statusMyTet">
						<p>{{weightValue}}</p>
						<P>当前体重(kg)</p>
					</div>
					<div class="statusCircl" @click="handStatus()">
						<ul>
							<li></li>
							<li>记录体重</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 我的纬度 -->
			<div class="circum">
				<div class="feren">
					<div class="myFen">我的围度</div>
					<div class="meas">
						<span>如何测量</span>

						<i class="iconfont icon-fanhui1 fontD"></i>
					</div>
				</div>
				<div class="feFont">
					<div>171</div>
					<div>身高（cm）</div>
				</div>
				<div class="bust">
					<ul>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
						<li>
							<p>0.0</p>
							<p>臀围</p>
						</li>
					</ul>
				</div>
			</div>
			<!--我的血压**-->
			<div class="blZon">
				<div class="blooCon">
					<div class="blCon">我的血压</div>
					<div class="highPre">
						<div class="highLeft"></div>
						<div class="hightRight">
							<div class="hiL">
								<p>{{bloodPressureHigh}}</p>
								<p>高压mmHg</p>
							</div>
							<div class="hiR">
								<p>{{bloodPressureLow}}</p>
								<p>低压mmHg</p>
							</div>
						</div>
					</div>
					<div class="statusCircl" @click="handBlood()">
						<ul>
							<li></li>
							<li>记录血压</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 记录血糖** -->
			<div class="blZon sugar">
				<div class="blooCon">
					<div class="blCon">我的血糖</div>
					<div class="highPre">
						<div class="highLeft"></div>
						<div class="hightRight">
							<div class="hiL">
								<p>{{bloodGlucoseValue}}</p>
								<p>mmol/L</p>
							</div>
						</div>
					</div>
					<div class="statusCircl" @click="statusHandbloodGlucose()">
						<ul>
							<li></li>
							<li>记录血糖</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 我的脂肪称** -->
			<!--<div class="fat">
				<div class="fatZ">
					<div class="fatO">我的脂肪称</div>
					<div class="fatT">
						<ul>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
							<li>
								<P>0</p>
								<P>脂肪率（%）</p>
								<P class="lip">
									无数据
								</p>
							</li>
						</ul>
					</div>
					<div class="fatS">
						<div class="statusCircl">
							<ul>
								<li></li>
								<li>记录血压</li>
							</ul>
						</div>
					</div>
				</div>
			</div>-->
		</div>
		<div class="cation" v-show="showTop" @click="toTop"></div>
		<el-dialog title="我的血压" :visible.sync="dialogFormVisible">
				  <el-form :model="formBlood">
				    <el-form-item label="高压(mmHg)" :label-width="formLabelWidth">
				      <el-input v-model="formBlood.high" autocomplete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="低压(mmHg)" :label-width="formLabelWidth">
				      <el-input v-model="formBlood.low " autocomplete="off"></el-input>
				    </el-form-item>
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="Determine()">确 定</el-button>
				  </div>
		</el-dialog>
	</div>
</template>
<script>
	import qs from 'qs';
	import { get ,deletes,post} from '../../api/fetch.js';
	import { Toast, MessageBox } from 'mint-ui';
	import Unheal from './unheal'
	export default {
		components: {
			Unheal
		},
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				scrollTop: 0,
				time: 0,
				dParams: 20,
				scrollState: 0,
				headerImg: {
					token: 'faad5a64-2f11-4b4a-9136-f7f50c333947'
				},
				fileList: [],
				weightValue:'',
				dialogFormVisible: false,  //取消弹窗
				formBlood:{
					  high:'',
					  low: '',
			          type: [],
				},
				formLabelWidth: '89px',
				bloodPressureHigh:'',
				bloodPressureLow:'',
				bloodGlucoseValue:''
			}
		},
		methods: {
			//  	图片上传**
			handleSuccess(file, fileList) {
				if(file.code == 0) {
					Toast({
						message: '上传成功',
						duration: 1500
					});
				}else{
					Toast({
						message: file.msg,
						duration: 1500
					});
				}
			},
//			删除事件**
            handleRemove(file, fileList) {
            	alert("确认取消吗？")
//          	return;
            	deletes('/health-web/modules/userCompImg/delete?userCompImgCodes='+file.name).then((res)=>{
            		if(res.code == 0) {
							Toast({
								message: '删除成功',
								duration: 1500
							});
						}else{
							Toast({
								message: res.msg,
								duration: 1500
							});
						}
            	})
            },
            //			点击记录体重**
            handStatus(){
            	MessageBox({
					    $type:'prompt',
					    message:'请填写您的最新体重',
					    showCancelButton:true,
					    showInput:true
					}).then(({ value, action }) => {
					post('/health-web/modules/userDataRecord/save?weightValue=' + value).then((res) => {
						if(res.code == 0) {
							 this.$message({
                                message: '记录体重成功 !',
                                type: 'success'
                            })
//							this.weightValue= value
                             this.saveHandle();
						}else{
							Toast({
								message: res.msg,
								duration: 1500
							});
						}
//						 this.$router.go(0); /**刷新整个页面**/
					})
					});
            },
//          记录血糖**
            statusHandbloodGlucose(){
            	    	MessageBox({
					    $type:'prompt',
					    message:'请记录您的最新血压',
					    showCancelButton:true,
					    showInput:true
					}).then(({ value, action }) => {
					post('/health-web/modules/userDataRecord/save?bloodGlucoseValue=' + value).then((res) => {
						if(res.code == 0) {
							 this.$message({
                                message: '记录体重成功 !',
                                type: 'success'
                            })
//							this.weightValue= value
                             this.bloodGlucose();
						}else{
							Toast({
								message: res.msg,
								duration: 1500
							});
						}
//						 this.$router.go(0); /**刷新整个页面**/
					})
					});
            },
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			toTop(e) {
				if(!!this.scrollState) {
					return;
				}
				this.scrollState = 1;
				e.preventDefault();
				let distance = document.documentElement.scrollTop || document.body.scrollTop;
				let _this = this;
				this.time = setInterval(function() {
					_this.gotoTop(_this.scrollTop - _this.dParams)
				}, 20);
			},
			gotoTop(distance) {
				this.dParams += 20;
				distance = distance > 0 ? distance : 0;
				document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
				if(this.scrollTop < 10) {
					clearInterval(this.time);
					this.dParams = 20;
					this.scrollState = 0;
				}
			},
			getScrollTop() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			},
			userCompImgList() {
				get('/health-web/modules/userCompImg/list', {}).then((res) => {
					if(res.code == 0) {
						let imgBasePath = res.imgBasePath
						let imgPathList = []
						res.userCompImgList.forEach(function(item) {
							let imgPath = {}
							imgPath.url = imgBasePath + item.imgUrl
							imgPath.name=item.userCompImgCode
							imgPathList.push(imgPath);
						})
						this.fileList = imgPathList
					}
				})
			},
			saveHandle(){
				get('/health-web/modules/userDataRecord/latestInfo/weight_value').then((res) => {
					 if(res.code==0){
					 	this.weightValue = res.userLatestRecord.weightValue
					 }
				});
			},
//			添加血压**
            handBlood () {
            	this.dialogFormVisible = true
            },
//          点击确定**
            Determine(){
            	this.dialogFormVisible = false
//          	if(this.formBlood.val>=0){
            		get('/health-web/modules/userDataRecord/save',{
            			bloodPressureLow:this.formBlood.low,
            			bloodPressureHigh:this.formBlood.high
            		}).then((res)=>{
            			if(res.code==0){
            				this.$message({
            					message:'记录血压成功',
            					type:'success'
            				})
            				this.bloodPressure();
            			}
            		})
//          	}
            	
            	
            },
//          一进页面调血压接口**
            bloodPressure(){
            	get('/health-web/modules/userDataRecord/latestInfo/blood_pressure').then((res) => {
            		if(res.code == 0) {
            			this.bloodPressureHigh=res.userLatestRecord.bloodPressureHigh
            			this.bloodPressureLow=res.userLatestRecord.bloodPressureLow
            		}
            	})
            },
//     我的血糖**
            bloodGlucose(){
            	get('/health-web/modules/userDataRecord/latestInfo/blood_glucose').then((res) => {
            		if(res.code == 0) {
            			this.bloodGlucoseValue=res.userLatestRecord.bloodGlucoseValue
            		}
            	})
            }
		},
		computed: {
			showTop: function() {
				let value = this.scrollTop > 50 ? true : false;
				return value;
			},
		},
		mounted() {
			window.addEventListener('scroll', this.getScrollTop);
		},
		created() {
			this.userCompImgList();
			this.saveHandle();
//			血压**
           this.bloodPressure();
//         我的血糖**
           this.bloodGlucose();
		}
	}
</script>
<style lang="" scoped>
	@import './unheal/uncertain.css';
	.cation {
		position: fixed;
		bottom: .9rem;
		right: .2rem;
		width: .86rem;
		height: .86rem;
		background: url(../../../static/images/details06.png) no-repeat center;
		background-size: 100% 100%;
	}
	.upload {
		width: 100%;
		margin-top: .3rem;
		height: 3rem;
	}
	
	.upload ul li {
		width: 33.3%;
		height: 1.5rem;
		border: 1px dashed #F2F2F2;
		box-sizing: border-box;
		margin-right: .01rem;
		float: left;
	}
	
	.upload ul li:nth-child(3n) {
		margin-right: 0;
	}
	
	.conO>>>.el-upload--picture-card {
		width: 100% !important;
		font-size: .24rem;
		height: .8rem !important;
		color: #ff5e3a;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border-radius: .1rem;
		border: 1px solid #999999;
		margin-top: .47rem;
		line-height: 30px !important;
	}
	.conO>>>.el-upload-list--picture-card .el-upload-list__item {
		    width: 3rem;
		    height: 3rem;
		}
	
	.iconPlus img {
		width: .45rem;
		height: .4rem;
	}
	.unheaZ >>> .el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 86%;
}
.unheaZ >>>.el-dialog__footer{
	    padding: 10px 20px 20px;
}
.unheaZ >>>.el-form-item__content{
	    margin-left: 90px;
}

</style>