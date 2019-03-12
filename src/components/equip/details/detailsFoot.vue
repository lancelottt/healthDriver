<template>
	<div>
	    <div class="goodDetailFooter">
            <div class="left">
            	 <div class="shop">
                     <i class="iconfont icon-service"></i>
                    <span>客服</span>
                </div>
                <div class="collection" >
                    <div class="collection-box">
                        <i class="iconfont icon-shoucang"></i>
                        <span>收藏</span>
                    </div>
                    <!--<div class="collection-box">
                        <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
                        <span style="color:red">取消</span>
                    </div>-->
                </div>
            </div>
           <div class="rigth">
                <div class="add">
                    <a href="javascript:void(0);" @click="add()">加入购物车</a>
                </div>
                <div class="purchase">
                    <a href="javascript:void(0);" @click="pay()">立即购买</a>
                </div>
            </div>
                </div>
	</div>
</template>
<script>
	export default{
		data () {
			return{
			}
		}
	}
</script>
<style scoped="scoped">
.goodDetailFooter {
    position: fixed;
    width: 100%;
    bottom: 0rem;
    height: .93rem;
    background: #fff;
}
.left {
    width: 45%;
    float: left;
    position: relative;
    font-size: .24rem;   
    height: .93rem;
    }
 .rigth {
    width: 55%;
    float: right;
    height: .93rem;
} 
.add a{
        display: block;
        width: 50%;
        height: .93rem;
        line-height: .93rem;
        text-align: center;
        background: #ff5e3a;
        color: white;
        font-size: 0.24rem;
        float: left;
        
    }

.purchase a {
    float: left;
    display: block;
    width: 50%;
    height: .93rem;
    line-height: .93rem;
    text-align: center;
    color: white;
    font-size: 0.24rem;
    background: #ff0000;
    }   
.shop {
    width: 44%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    float: left;
    border-right: .01rem solid #eee;
      }
.shop  span {
    display: block;
    text-align: center;
    color: #767676;
}
.goodDetailFooter .left .shop i {
    font-size: 0.45rem;
    display: block;
    text-align: center;
}
.collection span{
    font-size: .18rem;
    line-height: 0.35rem;
	color: #999999;
	display: inline-block;
}
.shop span{
	color: #999999;
	line-height: 0.35rem;
}
.collection{
	
    margin-top: .1rem;
}
.shop{
	font-size: .18rem;
	
	
    margin-top: .1rem;
}
.goodDetailFooter .left .collection i {
    font-size: 0.45rem;
    display: block;
    text-align: center;
}
</style>