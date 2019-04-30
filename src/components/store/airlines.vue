<template>
  <div class="airlines">
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">在线咨询</div>
      <div class="header-rigth">
        我的问诊
      </div>
    </div>

    <div class="airlinesMain">
      <div class="airlinesArea">
        <textarea rows="" cols="" placeholder="请详细描述您的问题，包括身体状况、疾病和病症等，我们会为您分配最专业的医生，并且保证您的隐私安全（最少10个字）" v-model="feedbackContent"></textarea>
      </div>

    <div class="upfile">
      <div class="addImg">
        <img src="../../../static/images/ioncamera.png" alt="" >
        <div class="addImgTitle">
          <h3> <strong>添加照片</strong> <span>（非必填）</span></h3>
          <p>症状部位，检查报告或其他材料</p>
        </div>
       </div> 
      <el-upload class="upload-demo" id="upload-demo" ref="upload" action="http://bossdu.zicp.vip:55090/health-web/modules/userFeedback/save" :on-preview="handlePreview" :on-success="onSuccess" :limit="6"  :on-remove="handleRemove" :on-change="handleChange" :file-list="fileList" :auto-upload="false" list-type="picture" :headers="{'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947'}" :data="{feedbackType: this.serviceType,feedbackContent: this.feedbackContent}">
         <el-button slot="trigger" size="small" type="primary" id="cheackBtn"></el-button>
         <el-button size="small" type="success" @click="submitUpload" v-if="fileLength>0" id="updataBtn">确定上传</el-button> 
      </el-upload>
      </div>
    </div> 
  </div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import {
        post
    } from '../../api/fetch.js';
    import axios from 'axios';
    export default {
        data() {
            return {
                serviceType: 2, // 1、功能异常 2、在线问 9、其他异常 
                fileList: [],
                fileLength: '',
                feedbackContent: '',
                isShow: false
            }
        },
        created() {
            this.serviceType = this.$route.params.id;
        },
        methods: {
            showToust() {
                Toast('提示信息');
            },
            submitUpload() {
                this.feedbackContent.length < 10 ? Toast('最少10个字 ！') : this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                this.fileLength = fileList.length;
            },
            handlePreview(file) {},
            onSuccess(response) {
                this.$refs.upload.clearFiles()
                Toast('上传成功 ！');
            },
            handleChange(file, fileList) {
                this.fileLength = fileList.length;
            },
            handleBack() {
                this.$router.back();
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/store/store.css';
    .airlines {
        width: 100%;
        height: 100%;
        background: #f2f2f2;
    }
    
    .el-upload-list--picture-card .el-upload-list__item {
        width: 2rem;
    }
    
    .upfile {
        position: relative;
        width: 100%;
    }
    
    .upBtn {
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        width: 1.1rem;
        height: 1.1rem;
        background: none;
        border: 0;
    }
    
    #cheackBtn {
        width: 1.1rem;
        height: 1.1rem;
        position: absolute;
        left: 0.28rem;
        top: 0.28rem;
        background: none;
    }
    
    #updataBtn {
        margin-left: -5.4rem;
        height: 0.54rem;
        line-height: 0.54rem;
        padding: 0 0.2rem;
        margin-top: 0.3rem;
    }
</style>