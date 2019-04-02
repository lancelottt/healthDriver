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

    <div class="story-list">
      <div  >
        <ul v-for="(list,index) in targetList" :key="index" @click="goMain(list.id , listType)">
          <li class="list-mg">
            <img :src="list.pic" alt>
          </li>
          <li>
            <h3>{{list.productCategoryName}}</h3>
            <h4>{{list.source}} {{list.creatTime | dateFormat}}</h4>
          </li>
        </ul>
      </div>
 
    </div>
  </div>
</template>
<script>
import { get, post } from "../../api/fetch";
export default {
  data() {
    return {
      listType: "", // 1: 蜕变故事 2：健康咨询
      targetList: [],
      newsList: [],
      title: ""
    };
  },
  created() {
    this.title = this.$route.query.name;
    this.getTargetList(this.$route.query.id);
  },
  methods: {
    handlerBack() {
      this.$router.back();
    },
    goMain(id, typeId) {
      this.$router.push({
        path: "/healthPlan/HealthTargetMain",
        query: { id: id }
      });
    },
    getTargetList(id) {
      console.log('12313')
      get("/health-web/modules/hfmprogram/list?programCategoryId=" + id).then(
        res => {
          this.targetList = res.page.list
          console.log(res);
        }
      );
    }
  }
};
</script>
<style scoped>
.story-list {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.story-list ul {
  text-align: left;
  display: flex;
  line-height: 0.45rem;
  color: #666;
  font-size: 0.28rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f2f2f2;
}
.story-list ul li:last-child {
}
.list-mg {
  width: 2rem;
  height: 1.7rem;
  flex: 0 0 2.3rem;
  margin-right: 0.35rem;
}
.list-mg img {
  width: 100%;
  height: 100%;
}
h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
h4 {
  font-size: 0.24rem;
  color: #999;
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
