<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack"></div>
          <div class="headerAmic">消息</div>
          <div class="delete" @click="getDelete()">删除已读</div>
        </div>
      </div>
    </div>

    <div class="message-list" ref="foodsWrapper">
      <div>
        <div style=" padding-top: 1rem;">
          <ul
            @click="goMsgMain(item.userMessageCode)"
            v-for="(item, index) in lowerList"
            :key="index"
          >
            <li>
              <img src="../../../../static/images/message.png" alt v-if="item.isRead == 2 ">
              <img src="../../../../static/images/message_2.png" alt v-if="item.isRead == 1">
            </li>
            <li>
              <h3>{{item.messageTitle}}</h3>
              <p>{{item.messageContent}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { MessageBox, Toast } from "mint-ui";
import { get } from "../../../api/fetch";
export default {
  data() {
    return {
      activeId: 0,
      partsIndex: 0,
      PartsUpper: [],
      lowerList: [],
      limit: 10,
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
      isLoad: true
    };
  },
  created() {
    this.getProductList(this.limit, this.currPage);
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    getDelete() {
      MessageBox.confirm("确定删除已读?").then(action => {
        console.log("shacnhu");
        get("/health-web/modules/userMessage/delete").then(res => {
          Toast("删除成功！");
        });
      });
    },
    goMsgMain(id) {
      this.$router.push({
        path: "/messageMain",
        query: { id: id }
      });
    },
    handlerBack() {
      this.$router.back();
    },
    _initScroll() {
      console.log("scroll");
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, this.options);
      // 下拉
      this.foodsScroll.on("pullingDown", () => {
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        // this.goods = []; // 重置数据
        // this.searchCondition.pageNo = 1; // 重置分页数
        // this.setData(); //获取数据方法
      });
      this.foodsScroll.on("pullingUp", () => {
        if (this.isLoad) {
          console.log(this.isLoad);
          this.getProductList(
            this.limit,
            this.currPage
          );
        } else {
          Toast("加载完毕");
          return;
        }
      });
      this.foodsScroll.on("pullingDown", () => {
        console.log("触顶了");
      });
    },
    /*  消息列表 */
    getProductList(limit, currPage) {
      console.log(12);
      get(`/health-web/modules/userMessage/list`, {
        pageSize: limit,
        currPage: currPage
      }).then(res => {
        console.log(res.page.list);
        /*  数据长度小于limit */
        if (res.page.list.length < this.limit) {
          this.isLoad = false;
        }
        this.currPage = this.currPage + 1;
        this.lowerList.push(...res.page.list);
        this.$nextTick(() => {
          this.pullingDownUp();
        });
      });
    },
    /*  搜素商品列表 */
    // getProductSearchList(keyword, limit, currPage) {
    //   get(`/ChargeScheme/list/chargeScheme`, {
    //     chargeSchemeName: keyword,
    //     pageSize: limit,
    //     pageNum: currPage
    //   }).then(res => {
    //     console.log(res.data.list);
    //     /*  数据长度小于limit */
    //     if (res.data.list.length < this.limit) {
    //       this.isLoad = false;
    //     }
    //     this.currPage = this.currPage + 1;
    //     this.lowerList.push(...res.data.list);
    //     this.$nextTick(() => {
    //       this.pullingDownUp();
    //     });
    //   });
    // },
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
.message-list {
  height: 100%;
  width: 100%;
  background: #ffffff;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
}
.message-list ul {
  display: flex;
  display: -webkit-flex;
  border-bottom: 1px solid #f2f2f2;
  padding: 0 0.3rem;
}
.message-list li {
  padding: 0.2rem 0;
}

.message-list li img {
  width: 0.8rem;
  height: 0.8rem;
}
.message-list li:first-child {
  width: 1rem;
  flex: 0 0 1rem;
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
  font-size: 0.24rem;
  color: #999;
  padding-top: 0.1rem;
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
</style>
