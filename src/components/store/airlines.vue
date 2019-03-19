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
        <textarea rows="" cols="" placeholder="请详细描述您的问题，包括身体状况、疾病和病症等，我们会为您分配最专业的医生，并且保证您的隐私安全（最少10个字）"></textarea>
      </div>

    <div class="upfile">
      <div class="addImg">
        <img src="../../../static/images/ioncamera.png" alt="">
        <div class="addImgTitle">
          <h3> <strong>添加照片</strong> <span>（非必填）</span></h3>
          <p>症状部位，检查报告或其他材料s</p>
        </div>
        </div>

           <el-upload action=""
        class="upload-demo":auto-upload="false"
       :on-preview="handlePreview"
       :on-remove="handleRemove" :on-change="handleChange"
       :file-list="fileList" 
       list-type="picture" :limit="6" >
        <el-button size="small" type="primary" class="upBtn"></el-button>
        </el-upload>
      </div>
    </div> 

    <button @click="goUpImg()">上传</button>

    
  </div>
</template>
<script>
    import {
        post
    } from '../../api/fetch.js';
    import axios from 'axios';
    export default {
        data() {
            return {
                serviceType: 2, // 客服类型
                fileList: []
            }
        },
        created() {
            this.serviceType = this.$route.params.id;
            console.log(this.serviceType)
        },
        methods: {
            handleBack() {
                this.$router.back()
            },
            handleRemove(file, fileList) {
                // console.log(file, fileList);
            },
            handlePreview(file) {
                // console.log(file);
            },
            handleChange(file, fileList) {
                console.log(file)
                let reader = new FileReader()
                reader.readAsDataURL(file, "gbk");
                // getBase64Image
                // fileList.push(file)

                console.log(file)
            },
            goUpImg() {
                console.log(1223)
                get('/health-web/modules/userFeedback/save', {
                        feedbackContent: '1121313',
                        file: ['blob:http://localhost:8080/ca6010cd-2627-4e38-b8ab-7ad2a7d90b1d']
                    })
                    // axios.post('http://192.168.1.170:8081/health-web/modules/userFeedback/save',{
                    //      headers: headers,
                    // })

            }
        },
        watch: {

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
</style>