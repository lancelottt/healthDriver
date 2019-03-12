<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">权限设置</div>
    </div>
    <div class="outerMain">
      <div class="heartMain">
        <div class="rota" ref="userinfo">
          <el-progress type="circle" :percentage="25" :text-inside="true" color="#FF9500" :stroke-width="8"></el-progress>
        </div>
        <div class=heartTitle>
          <h3>58</h3>
          <p>次 / 分</p>
        </div>
        <div class="heartArrows">
          <img src="../../../static/images/icon_heartArrows.png" alt="">
        </div>
      </div>

      <div class="pharmacyType">
        <ul>
          <li>血压 <span>(选项)</span></li>
          <li>
            <img src="../../../static/images/sanjiao.png" alt="" class="nextBtn">
          </li>
        </ul>
        <ul>
          <li>2018-12-08 20:56</li>
          <li>
            <img src="../../../static/images/sanjiao.png" alt="" class="nextBtn">
          </li>
        </ul>
      </div>

      <button type="" class="save">保存</button>
      <button type="" class="test">智能检测</button>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                isActive: true,
                value1: true,
                value2: true,
                num: 10
            }
        },
        methods: {
            handleBack() {
                this.$router.back()
            }
        },
        created() {
            console.log('123')
            axios.get('health-web/modules/userDataRecord/athleticCount', {
                headers: {
                    'X-Custom-Header': 'foobar'
                },
                params: {}
            })
        },
        mounted() {
            document.querySelectorAll('path')[0].setAttribute("stroke", '#fff');
        },
        computed: {

        }
    }
</script>
<style scoped>
    @import '../../assets/store/heartRate.css';
</style>