<template>
	<div id="app">
		<!--<div v-show="show">
			<tab-com></tab-com>
		</div>-->
		<!--    <img src="./assets/logo.png">-->
		<transition name="fadeToBlack">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
    import axios from 'axios'
    import Vuex from "vuex"
    export default {
        beforeCreate() {
            document.addEventListener('plusready', function() {
                console.log('plusEventListenerReady')
            }, false)
        },
        created() {

        },
        mounted() {
            function plusReady() {
                console.log('plusReady')
            }
        },
        //		name: 'App',
        methods: {
            plusReady() {
                console.log('plusReady')
            }
        },
        computed: {
            //			...Vuex.mapState({
            //				show: state => state.show
            //			})
        }
    }
</script>

<style>
    @import 'assets/common/scss/common.css';
    img{
        max-width: 100%;
    }
    html {
        height: 100%;
        width: 100%;
    }
    
    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .page {
        /*公共样式:上面的电池栏、下面的切换栏*/
        /*  padding-top: .4rem;
*/
        padding-bottom: .96rem;
    }
    
    .el-upload--picture-card {
        width: 2rem !important;
        height: 2rem !important;
    }
    
    .el-upload-list--picture-card .el-upload-list__item {
        width: 2rem;
        height: 2rem;
    }
    
    .el-upload-list__item-name {
        width: 0;
        display: none;
    }
    
    .upload-demo {
        padding: 0.2rem;
        overflow: hidden;
        background: #fff;
        margin-top: -0.5rem;
    }
    
    .el-upload-list {}
    
    .el-upload-list__item {
        width: 2.1rem;
        height: 2rem;
        margin: 0.13rem;
        float: left;
        padding: 0;
    }
    
    .el-upload-list--picture .el-upload-list__item {
        height: 2.2rem;
        padding: 0;
    }
    
    .el-upload-list--picture .el-upload-list__item-thumbnail {
        margin-left: 0;
        /*width: 100%;
        height: 100%;*/
    }
    
    .el-upload-list--picture .el-upload-list__item-name {
        display: none;
    }
    
    .el-upload-list--picture .el-upload-list__item-thumbnail {
        width: 100%;
        height: 100%;
    }
    
    .el-upload-list__item .el-icon-close {
        z-index: 10;
    }
    /*弹出框样式*/
    
    .el-button {
        color: #fff;
        background: #FF5E3A;
        font-size: 0.24rem;
        border: 0;
    }
    
    .el-button--info {
        background: rgba(153, 153, 153, 0.2);
        color: #999;
    }
    
    .el-button:focus,
    .el-button:hover {
        background: rgba(153, 153, 153, 0.2);
        color: #999;
    }
    
    .el-dialog--center .el-dialog__body {
        padding: 0 10px;
        padding-top: 5px;
    }
    
    .el-button:hover {
        background: rgba(153, 153, 153, 0.2);
        color: #999;
    }
    
    .el-button:focus,
    .el-button:hover {
        color: #fff;
        background: #FF5E3A;
    }
    
    .el-dialog__title,
    .el-form-item__label {
        font-size: 0.28rem;
    }
    
    .el-message {
        min-width: 0;
    }
    /*视频按钮样式修改*/
    
    .video-js .vjs-big-play-button {
        border-radius: 50%;
        width: 2em;
        height: 2em;
        line-height: 1em !important;
        margin-left: -1em !important;
    }
    /* .footer_guide{
    position: fixed;
    z-index: 100;
    left:0;
    right:0;
    bottom:0;
    background-color: #ffffff;
    width:100%;
    height: 1.31rem;
    display:flex;
}
.shopping{
    margin-top: .15rem;
}
.guide_item{
    display: flex;
    flex: 1;
    margin-top: .1rem;
    text-align: center;
    flex-direction: column;
    align-items: center;   
    color:#999999;
}
.on{
    color: #ff5e3a;
}
span{
    font-size: .24rem;
    margin-top: .02rem;
    margin-bottom: .02rem;
}
.iconfont{
    font-size: .64rem;

}
.img{
    width:.44rem;
    height: .58rem;
}
.cals{
    margin-top: .15rem;
} */
.icon-jiantou-left:before{
	content:none
}
.simi{
	display: flex;
    justify-content: center;
}
</style>