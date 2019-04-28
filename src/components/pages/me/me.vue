<template>
	<div class="meData">
		<div>
			<div class="meHeader">
				我的
			</div>
			<!-- 发布动态** -->
			<div class="dyna">
				<!-- 新人报道** -->
				<div class="report">
					<div class="reportZ">
						<div class="reportRen">
							<el-upload
							  class="avatar-uploader"
							  :headers="headerImg" 
							  action="http://192.168.1.145:8081/health-web/modules/umsmember/addImg"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl" :src="imageUrl" class="avatar">
							  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
<!--							<img :src="user.icon" alt="">-->
						</div>
						<div class="reportCon" @click="meHeader(user.id)">
							<div class="reponConZ">
								<span>{{user.username}}</span>
							</div>
							<!-- 箭头** -->
							<div class="arrow">
								<i class="iconfont fontZt icon-fanhui1"></i>
							</div>
						</div>

					</div>
				</div>

				<!-- 发布第一条动态** -->
				<router-link to="./amic">
					<div class="dynamic">发布第一条动态</div>
				</router-link>
			</div>
			<!-- 数据中心** -->
			<div class="dataZ">
				<ul>
					<li>
						<router-link to="/device">
							<p>
								<img src="../../../../static/images/me01.png" alt="" />
							</p>
							<p>数据中心</p>
						</router-link>
					</li>
					<li @click="handHealday()">
						<p>
							<img src="../../../../static/images/me02.png" alt="" />
						</p>
						<p>身体档案</p>
					</li>
					<li @click="handVoice()">
						<p>
							<img src="../../../../static/images/me03.png" alt="" />
						</p>
						<p>语音录制</p>
					</li>
					<li @click="handlerMyFamily()">
						<p>
							<img src="../../../../static/images/me05.png" alt="" />
						</p>
						<p>我的家人</p>
					</li>
					<li>
						 <router-link to="/Collections">
						<p>
							<img src="../../../../static/images/me08.png" alt="" />
						</p>
						<p>我的收藏</p>
						</router-link>
					</li>
					<li @click="goOrder">
            <p>
              <img src="../../../../static/images/me04.png" alt>
            </p>
            <p>我的订单</p>
          </li>
					<li @click="handlerMembership()">
						<p>
							<img src="../../../../static/images/me09.png" alt="" />
						</p>
						<p>语音列表</p>
					</li>
				</ul>
			</div>
			<!-- 我的计划** -->
			<!--<div class="plan">
				<div class="planIcon">
					<img src="../../../../static/images/me10.png" alt="" />
				</div>
				<div class="planContent">我的计划</div>
				<i class="iconfont planJ icon-fanhui1"></i>
			</div>-->
			<!-- 系统设置** -->
			<div class="planSz" @click="xitong">
				<div class="planIcon">
					<img src="../../../../static/images/me11.png" alt="" />
				</div>
				<div class="planContent">系统设置</div>
				<i class="iconfont planJ icon-fanhui1"></i>
			</div>
		</div>
		<foot-tabbar></foot-tabbar>
	</div>
</template>
<script>
	import { get } from '../../../api/fetch.js'
	import FootTabbar from '../../foorterGuid/footerGuild'
	export default {
		components: {
			FootTabbar
		},
		data() {
			return {
				user:{},
				imageUrl: '',
				headerImg: {
					token: 'faad5a64-2f11-4b4a-9136-f7f50c333947'
				}
			}
		},
		methods: {
			goOrder() {
      this.$router.push({
        path: "/MeOrder",
        query: { id: this.userId }
      });
    },
			handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		      },
            beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/png';
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		     },
			handlerMyFamily() {
				this.$router.push({
					name: 'family'
				})
			},
			handlerMembership() {
				this.$router.push({
					name:'voiceList'
				})
			},
			getUser() {
				get('/health-web/modules/umsmember/getUser', {}).then((res) => {
					if(res.code == 0) {
						this.imageUrl = res.user.icon
						this.user=res.user
					}
				})
			},
			//			添加照片**
			meHeader(id) {
			  this.$router.push({path:'/phone',query:{id:id}})	
			},
			//			身体档案**
			handHealday() {
				this.$router.push({
					name: 'archi'
				})
			},
			xitong() {
				this.$router.push({
					name: 'setUp'
				})
			},
			handVoice () {
				this.$router.push({name:'handVoice'})
			}
		},
		created() {
			this.getUser();
		}
	}
</script>
<style scoped>
	@import './style/me.css';
	.reportRen img{
		border-radius: 50%;
	}
	.reportCon[data-v-61b0af84] {
        line-height: 1.2rem;
    }
    .arrow[data-v-61b0af84] {
       top: 0.05rem;
	}
	
  .avatar-uploader{
  	width:1.2rem;
  	height: 1.2rem;
  	position: relative;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height:100%;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
	
	
	
	
</style>