<template>
  <div class="head_nav">
    <p class="welcome">欢迎来到天天生鲜!</p>
    <ul class="nav">
      <li><a href="#">登录</a></li>
      <li>|</li>
      <li><a href="#">注册</a></li>
      <li>|</li>
      <li><a href="#">用户中心</a></li>
      <li>|</li>
      <li><a href="#">我的购物车</a></li>
      <li>|</li>
      <li><a href="#">我的订单</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeadNav'
}
</script>

<style lang="css" scoped>
.head_nav{
  width: 100%;
  height: 30px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
}
.welcome{
  display: block;
  height: 30px;
  line-height: 30px;
  color: #666666;
  margin-left: 10px;
}
.nav {
  margin-right: 10px;
}
.nav li{
  float: left;
  list-style: none;
  height: 30px;
  line-height: 30px;
  margin-left: 7px;
  margin-right: 7px;
  color: #cecece;
}
.nav li a {
  text-decoration: none;
  color: #666666;
  font-family: 'Microsoft YaHei',sans-serif;
  font-size: 12px;
}
.nav li a:hover {
  color: #ff8800;
}
</style>
