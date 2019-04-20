<template>
  <div>
    <header>
      <span class="back_btn" @click="handleBack()">
        <img src="../../../static/img/arrow_03.png">
      </span>
      <div class="in_main">
        <i class="el-icon-search"></i>
        <input type="text" placeholder="请输入内容..." class="search_input" v-model="searchText">
      </div>
      <span class="searc_btn" @click="searchList">搜索</span>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    searchList() {
      this.$emit("searchList", this.searchText);
    }
  }
};
</script>
<style>
header {
  padding: 5px 0;
  height: 0.8rem !important;
}
.search_input {
  width: 100%;
  height: 30px;
  border: 1px solid #f2f2f2;
  line-height: 30px;
  border-radius: 3px;
  padding: 0 26px;
  box-sizing: border-box;
  outline: none;
  display: inline-block;
}
#kwnoFood > header {
  height: auto;
}
.searc_btn {
  width: 1rem;
}
.back_btn {
  margin-right: 6px;
}
.in_main {
  width: 75%;
  position: relative;
  height: 30px;
}
.in_main i {
  position: absolute;
  left: 5px;
  top: 9px;
  font-size: 14px;
  color: #999;
}
</style>