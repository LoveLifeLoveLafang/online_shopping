<template>
  <div class="user_center_header">
    <ul class="left">
      <li>
        <img src="../../assets/images/logo.png" alt="logo">
      </li>
      <li>|</li>
      <li>用户中心</li>
    </ul>
    <search></search>
  </div>
</template>

<script>
import Search from '@/components/Common/Search.vue'
export default {
  name: 'UserCenterHeader',
  components: {
    Search
  }
}
</script>

<style lang="css" scoped>
.user_center_header{
  width: 1200px;
  height: 115px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  margin-left: 10px;
}
.left li {
  list-style: none;
  float: left;
  margin-right: 30px;
  line-height: 115px;
  font-size: 18px;
}
.left li img {
  vertical-align: middle;
}
</style>
