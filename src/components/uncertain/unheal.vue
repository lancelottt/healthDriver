<template>
    <div>
        <div class="had">
            <div>
                <div class="componentHeader-header">
                    <div class="Tp" @click="handBack()">
                        <i class="iconfont icon-jiantou-left"></i>
                    </div>
                    <div class="headerAmic">身体档案</div>
                </div>
            </div>
        </div>
        <!-- 私密状态** -->
       
    </div>
</template>
<script>
export default {
	data () {
		return {
			
		}
	},
	methods:{
		handBack(){
			this.$router.back()
		}
	}
    
}
</script>
<style lang="" scroped>
@import './unheal/unheal.css';
/*.Tp i::before{
	content:none
}*/
/*.Tp{
	height: 0;
}*/
/*.simi{
	display: flex;
    flex-direction: row;
    justify-content: center;
}*/
    
</style>