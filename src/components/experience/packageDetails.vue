<template>
	<div>
		<div class="packageDetails">
			<div class="packageImg">
				<img src="../../../static/images/package01.png"/>
				<div class="gouwu">
					<div class="gou">
					</div>
					<div class="gouRi">
					</div>
				</div>
			</div>
			<div class="packCAontent">
				<div class="storePrice">
					<div class="storePriceL">
						<span>
                            ¥899
                        </span>
						<span><del>门店价1792</del></span>
					</div>
					<div class="storePriceR">已售1792件</div>
				</div>
				<div class="packContent">
					<p>【899价保双12】【热销爆款】125项青中老全面体</p>
					<p>检</p>
				</div>
				<div class="packCAontentTree">
					<span>12项肿瘤筛查</span>
					<span>脑TCD</span>
					<span>血流变</span>
				</div>
			</div>
			<!--高级餐厅**-->
			<div class="taurant">高级套餐</div>
			<!--分类**-->
			<div class="fication">
				<!--分类**-->
				<div class="ficationCon">
					<span>分类</span>
					<span>女性</span>
				</div>
				<!--支持门店**-->
				<div class="stores">
					<span>支持门店</span>
					<span>(190)</span>
				</div>
		<!--地址**-->
				<div class="dizhi">
					<span>西安市高新区高新路与南二环十字向东50米易和蓝...</span>
				</div>
			</div>
		</div>
		<DetailsFoot/>
	</div>
</template>

<script>
import 	DetailsFoot from '../equip/details/detailsFoot'
export default{
	components:{
		DetailsFoot
	}
}
</script>

<style scoped="scoped">
@import '../../assets/experience/packageDetails.css';
</style>