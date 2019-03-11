<template>
  <div class="permissionSet">
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">权限设置</div>
    </div>
    <div class="permissionMain">
      <h3>由于系统的的省电设置与后台进程限制，会误将正在记录运动的进程杀掉。为保证app的运动记录更好运行，请参照如下设置方法。</h3>
    </div>
    <div class="permissionSave">
      <h2>后台保护设置</h2>
      <h3>
        为保证运动状态记录的准确性，强烈建议添加app到后台保护名单中。
      </h3>
      <h3> 设置方法：手机管家->自启动管理->打开app的开关。</h3>
      <button type="">快速设置</button>
    </div>
    <div class="permissionSave">
      <h2>后台保护设置</h2>
      <h3>
        由于系统的省电设置，会让app进入冻结状态。为保证运动状态的正常记录，请将app加入白名单中。

      </h3>
      设置方法：手机管家->电池管理->受保护应用->打开app的开关。
      <h3> 设置方法：手机管家->自启动管理->打开app的开关。</h3>
      <button type="">快速设置</button>
    </div> 


  </div>
</template>

<script type="text/javascript">
   export default {
     data() {
       return {
         isActive: true,
       }
     },
     methods: {
      handleBack() {
				this.$router.back()
	  	}
    },
   
   }
</script>

<style scoped>
  @import '../../assets/store/permissionSet.css';



</style>
