<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack()"></div>
          <div class="headerAmic">{{title}}</div>
        </div>
      </div>
    </div>
    <div class="heal-story-main" >
      <h3 v-if ="storyMain.storyTitle">{{storyMain.storyTitle}}</h3>
      <h4  v-if ="storyMain.storyAuthor">{{storyMain.storyAuthor}}  {{storyMain.createTime |dateFormat}}</h4>
      <div   v-if ="storyMain.storyContent" v-html='storyMain.storyContent'> </div>
    </div>

     <div class="heal-story-main"> 
      <h3  v-if ="newsMain.informationName">{{newsMain.informationName}}</h3>
      <h4  v-if ="newsMain.informationSource">{{newsMain.informationSource}}  {{newsMain.createTime | dateFormat}}</h4>
      <div   v-if ="newsMain.informationContent"  v-html='newsMain.informationContent'> </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../api/fetch";
export default {
  data() {
    return {
      listType: "", // 1: 蜕变故事 2：健康咨询
      storyMain: [],
      newsMain: [],
      title: ""
    };
  },
   created() {
    this.listType = this.$route.query.type;
    if (this.listType == 1) {
      this.title = "蜕变故事";
      this.getStoryMain(this.$route.query.id);
    } else if (this.listType == 2) {
      this.title = "健康咨询";
      this.getNewsMain(this.$route.query.id);
    }
  },
  methods: {
    handlerBack() {
      this.$router.back();
    },
    getStoryMain(id) {
            get('/health-web/modules/hfmmetamorphosisstory/info/' + id).then((res)=> {
            this.storyMain = res.hfmMetamorphosisStory;
            this.title = res.hfmMetamorphosisStory.storyTitle;
            this.newsMain = [];
        })
    },
    getNewsMain(id) {
        get('/health-web/modules/hfmhealthinformation/info/' + id).then((res)=> {
            this.newsMain = res.hfmHealthInformation;
            this.title = res.hfmHealthInformation.informationName;
            this.storyMain = [];
        })
    }
  }
};
</script>

<style scoped>
.heal-story-main {
  text-align: left;
  line-height: 0.45rem;
  padding: 0.2rem;
} 
.heal-story-main h3 {
  font-size: 0.3rem;
  color: #333;
}
.heal-story-main h4 {
  font-size: 0.28rem;
  color: #666;
  padding: 0.1rem 0;
}
.shopCom {
  width: 100%;
  height: auto;
  padding-bottom: 1.15rem;
  box-sizing: border-box;
  background: #eeeeee;
}

.hadHea {
  width: 100%;
  height: auto;
  background: #ffffff;
}

.had {
  width: 94%;
  height: 0.99rem;
  margin: auto;
}

.componentHeader-header {
  width: 96%;
  /* height: .87rem; */
  box-sizing: border-box;
  color: black;
  line-height: 0.87rem;
  margin: auto;
  font-size: 0.28rem;
}

.Tp {
  float: left;
  width: 0.41rem;
  height: 0.33rem;
  background: url(../../../static/images/ShareIcon.png) no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
}

.Tpi {
  font-size: 0.54rem;
}

.headerAmic {
  width: 79%;
  height: 100%;
  margin: auto;
  font-size: 0.34rem;
  float: left;
}
</style>
