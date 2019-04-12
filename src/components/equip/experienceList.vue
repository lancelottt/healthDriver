<template>
  <div>
    <div class="upper" v-if="PartsUpper">
      <search-header @searchList="searchList"></search-header>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in PartsUpper" :key="index">
          <div @click="checkCategory(item.id,index)" class="item-title">
            <b :class="{'Active': index == activeId}">{{item.name}}</b>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="equipZ">
      <div class="equip" ref="foodsWrapper">
        <div class="equipMain">
          <div class="lower" v-if="lowerList">
            <div class="lowerZ" ref="list">
              <div
                class="lowerList"
                v-for="(list,index) in lowerList"
                :key="index"
                @click="handLower(list.id)"
              >
                <img :src="list.pic">
                <div class="desp">{{list.name}}</div>
                <div class="desp">{{list.subTitle}}</div>
                <div class="dikou">
                  <p>价格：</p>
                  <p class="datashu">{{list.price}}</p>
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
import SearchHeader from "../searchHeader/searchHeader";
import { get, post } from "../../api/fetch";
import { Toast } from "mint-ui";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        freeMode: true,
        setWrapperSize: false,
        slidesPerView: 5
      },
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
      isLoad: true
    };
  },
  created() {
    this.getCategoryList();
    this.$nextTick(() => {
      this._initScroll();
      this.setData();
    });
  },
  methods: {
    _initScroll() {
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, this.options);
      // 下拉
      this.foodsScroll.on("pullingDown", () => {
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        this.goods = []; // 重置数据
        this.searchCondition.pageNo = 1; // 重置分页数
        this.setData(); //获取数据方法
      });
      this.foodsScroll.on("pullingUp", () => {
        if (this.isLoad) {
          console.log(this.isLoad);
          this.getProductList(
            this.categoryId,
            this.keyword,
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
    pullingDownUp() {
      this.foodsScroll.finishPullDown();
      this.foodsScroll.finishPullUp();
      this.foodsScroll.refresh(); //重新计算元素高度
    },
    /* 搜索 */
    searchList(key) {
      this.keyword = key;
      this.currPage = 1;
      this.lowerList = [];
      this.getProductList(
        this.categoryId,
        this.keyword,
        this.limit,
        this.currPage
      );
    },
    /* 分类 */
    getCategoryList() {
      get("/health-web/modules/pmsproductcategory/list", { parentId: 0 }).then(
        res => {
          var equipId = this.$route.query.id;
          res.list.map(item => {
            if (item.id == equipId) {
              this.PartsUpper = item.productCategoryList;
            }
          });
          this.categoryId = this.PartsUpper[0].id;
          this.getProductList(
            this.categoryId,
            this.keyword,
            this.limit,
            this.currPage
          );
        }
      );
    },
    /*  商品列表 */
    getProductList(id, keyword, limit, currPage) {
      get(`/health-web/modules/pmsproduct/list/`, {
        productCategoryId: id,
        keyword: keyword,
        limit: limit,
        page: currPage
      }).then(res => {
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
    /* 分类切换 */
    checkCategory(id, index) {
      this.activeId = index;
      this.categoryId = id;
      this.currPage = 1;
      this.lowerList = [];
      this.getProductList(
        this.categoryId,
        this.keyword,
        this.limit,
        this.currPage
      );
    },
    handLower(id) {
      this.$router.push({
        path: "packageDetails",
        query: { id: id }
      });
    }
  },
  components: {
    SearchHeader
  }
};
</script>

<style scoped="scoped">
@import "../../assets/equip/equip.css";
.Active:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #ff5e3a;
}
.desp {
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
}
.lowerList img {
  margin-bottom: 0.3rem;
}
</style>