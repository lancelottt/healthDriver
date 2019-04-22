<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack"></div>
          <div class="headerAmic">我的收藏</div>
        </div>
      </div>
    </div>

    <div class="message-list" ref="foodsWrapper">
      <div>
        <div style=" padding-top: 1rem;">
          <div class="member" v-if="index == 0">
            <div class="member-list" v-for="(item,index) in foodList" :key="index" @click="goFoodDeltial(item.collectCode)">
              <div class="list-center">
                <ul>
                  <li>
                    <img :src="item.foodImgUrl" alt>
                  </li>
                  <li>
                    <h3>{{item.foodName}}</h3>
                    <p>收藏日期：{{item.createTime |dateFormat }}</p>
                  </li>
                </ul>
                <div class="star" @click="getCollectDelete(item.collectCode)">
                    取消收藏
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { MessageBox, Toast } from "mint-ui";
import { get, post } from "../../../api/fetch";
export default {
  data() {
    return {
      activeId: 0,
      partsIndex: 0,
      PartsUpper: [],
      lowerList: [],
      limit: 6,
      currPage: 1,
      categoryId: "",
      keyword: "",
      options: {
        pullDownRefresh: {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
        click: true,
        probeType: 3,
        startY: 0,
        scrollbar: false
      },
      isLoad: true,
      index: 0,
      foodList: []
    };
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    });
    this.getList(this.limit, this.currPage);
  },
  methods: {
      goFoodDeltial(id){
          this.$router.push({
              path:'/KwnoFood/fruit/details/' + id
          })
      },
    getCollectDelete(id) {
      post("/health-web/modules/userCollect/delete", {
        collectClassify: 1,
        collectCode: id
      }).then(res => {
        if (res.code == 0) {
          this.foodList = [];
          this.currPage = 1;
          this.getList(this.limit, this.currPage);
        }
      });
    },
    getList(limit, currPage) {
      get("/health-web/modules/userCollect/list", {
        pageNums: limit,
        currentPage: currPage,
        collectClassify: 1
      }).then(res => {
        /*  数据长度小于limit */
        if (res.collectListPage.records.length < this.limit) {
          this.isLoad = false;
        }
        this.currPage = this.currPage + 1;
        this.foodList.push(...res.collectListPage.records);

        this.$nextTick(() => {
          this.pullingDownUp();
        });
      });
    },
    checkedHeader(id) {
      this.index = id;
    },
    handlerBack() {
      this.$router.back();
    },
    _initScroll() {
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, this.options);
      // 下拉
      this.foodsScroll.on("pullingDown", () => {
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        // this.goods = []; // 重置数据
        // this.searchCondition.pageNo = 1; // 重置分页数
        // this.setData(); //获取数据方法
      });
      this.foodsScroll.on("pullingUp", () => {
          /*订单列表*/
          if (this.isLoad) {
            this.getList(this.limit, this.currPage);
          } else {
            Toast("加载完毕");
            return;
          }
      });
      this.foodsScroll.on("pullingDown", () => {
        console.log("触顶了");
      });
    },
    pullingDownUp() {
      this.foodsScroll.finishPullDown();
      this.foodsScroll.finishPullUp();
      this.foodsScroll.refresh(); //重新计算元素高度
    }
  }
};
</script>

<style scoped>
.hadHea {
  width: 100%;
  height: auto;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.had {
  width: 94%;
  margin: auto;
  top: 0;
  left: 0;
  padding-right: 10px;
  box-sizing: border-box;
}
.headerAmic {
  margin-left: -5px;
}
.componentHeader-header {
  width: 96%;
  box-sizing: border-box;
  color: black;
  line-height: 0.87rem;
  margin: auto;
  font-size: 0.28rem;
  position: relative;
}

.Tp {
  float: left;
  width: 0.41rem;
  height: 0.33rem;
  background: url("../../../../static/images/ShareIcon.png") no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.28rem;
}
.member-list {
  width: 100%;
  background: #ffffff;
  margin-bottom: 0.1rem;
}

.list-center {
  width: 100%;
  background: #ffffff;
  padding: 15px;
  position: relative;
}
.list-center ul {
  display: flex;
}
.list-center li:first-child {
  width: 1.53rem;
  flex: 0 0 1.53rem;
}

.list-center img {
  width: 1.53rem;
  height: 1.53rem;
}
.list-center h3 {
  padding-top: 9px;
}
.list-center p {
  font-size: 0.24rem;
  padding-top: 9px;
  color: #999;
}
.star{
    position: absolute;
    top: 0.4rem;
    right: 15px;
    color: #ff5e3a;
    font-size: 0.22rem;
}
.message-list {
  height: 100%;
  width: 100%;
  background: #f2f2f2;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
}

.message-list li:last-child {
  padding-left: 0.3rem;
  text-align: left;
}
.message-list li h3 {
  font-size: 0.32rem;
  color: #333;
  padding-top: 0.1rem;
}
.message-list li p {
}
h3,
p {
  display: inline-block;
  width: 100%;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.delete {
  float: right;
  font-size: 0.2rem;
  color: #666;
  position: absolute;
  right: 0;
  top: 1px;
}
.health-header ul {
  width: 100%;
  display: flex;
}
.health-header li {
  width: 50%;
  height: 45px;
  line-height: 45px;
  position: relative;
}

.fruitActive:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 50%;
  height: 40px;
  bottom: 0;
  left: 25%;
  border-bottom: 2px solid #ff5e3a;
}
</style>
