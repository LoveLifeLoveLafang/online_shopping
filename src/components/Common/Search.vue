<template>
  <div class="search">
    <input class="search_input" type="text" placeholder="搜索商品">
    <input class="search_btn" type="submit" value="搜索">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="css" scoped>
.search{
  width: 616px;
  height: 38px;
  border: 1px solid #37ab40;
  background: url("../../assets/images/icons.png") 10px -338px no-repeat;
  display: inline-block;
  margin: auto 0;
  padding: 0;
}
.search .search_input{
  width: 470px;
  height: 34px;
  border: 0;
  margin: 2px 0 0 36px;
  outline: none;
  font-size: 12px;
  color: #737272;
  font-family: 'Microsoft YaHei',sans-serif;
}
.search .search_btn {
  float: right;
  width: 100px;
  height: 38px;
  background-color: #37ab40;
  border: 0;
  font-size: 14px;
  color: #ffffff;
  font-family: 'Microsoft YaHei',sans-serif;
  outline: none;
  cursor: pointer;
}
</style>
