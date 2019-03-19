<template>
    <div>
       <DialRecord ref="child" :minVal="minVal" :maxVal="maxVal" :rateValue="rateValue" @showDialog="showDialog" :headerText="headerText" :recordBtnText="recordBtnText" :dialTopText="dialTopText" :dialBottonText="dialBottonText"></DialRecord>
       <el-dialog title="体温添加" :visible.sync="dialogFormVisible" width="80%" center >
          <el-form :model="heartForm">
            <el-form-item label="体温" :label-width="formLabelWidth">
                 <el-input v-model="heartForm.val" autocomplete="on"></el-input>
             </el-form-item> 
         </el-form>
  
         <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible = false" id="qxbtn">取 消</el-button>
            <el-button type="" @click="submit" class="submitBTn">确 定</el-button>
           </div>
       </el-dialog>
    </div>
</template>
<script type="text/javascript">
    import DialRecord from '../../components/store/dialComponent.vue';
    import {get
    } from '../../api/fetch.js'
    export default {
        data() {
            return {
                dialogFormVisible: false,
                rateValue: 35.5, // 当前数据
                headerText: '体温', // 导航标题
                recordBtnText: '记录体温', // 记录按钮文字
                dialTopText: '', // 仪表标题1
                dialBottonText: '摄氏度', // 仪表标题1
                minVal: 30,
                maxVal: 40,
                heartForm: {
                    val: '',
                    name: '',
                    region: '',
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '45px'
            }
        },
        components: {
            DialRecord
        },
        methods: {
            getHeart() {
                get('/health-web/modules/userDataRecord/latestInfo/animal_heat').then((res) => {
                    this.rateValue = res.userLatestRecord.animalHeatValue;
                    console.log(this.rateValue)
                    if (this.rateValue == null) {
                        this.rateValue = 37.2;
                    }
                })
            },
            showDialog() {
                this.dialogFormVisible = true
            },
            submit() {
                this.dialogFormVisible = false;
                if (this.heartForm.val >= this.minVal && this.heartForm.val <= this.maxVal) {
                    this.upData(this.heartForm.val)
                }
            },
            upData(val) {
                console.log(val)
                get('/health-web/modules/userDataRecord/save', {
                    animalHeatValue: val
                }).then((res) => {
                    if (res.code == 0) {
                        this.$message({
                            message: '提交成功 !',
                            type: 'success'
                        })
                        this.getHeart();
                    }
                })
            }
        },
        created() {
            this.getHeart()
        },
        watch: {
            rateValue(newVal, oldVal) {
                console.log(newVal, oldVal);
                if (newVal == oldVal) {
                    return
                } else {
                    this.rateValue = newVal
                }
            }
        }
    }
</script>
<style scoped>
    .el-dialog__footer {
        padding: 10px 20px 20px;
    }
    
    .el-dialog__title {
        font-size: 0.24rem !important;
    }
    
    #qxbtn:hover {
        background: rgba(153, 153, 153, 0.2);
        color: #999;
    }
</style>