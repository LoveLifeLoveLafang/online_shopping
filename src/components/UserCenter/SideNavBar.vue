<template>
  <div class="side_nav_bar">
    <div class="title">
      用户中心
    </div>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/user_info">个人信息</router-link>
        </li>
        <li>
          <router-link to="/user_order">全部订单</router-link>
        </li>
        <li>
          <router-link to="/user_site">收货地址</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar'
}
</script>

<style lang="css" scoped>
.side_nav_bar{
  width: 200px;
  background-color: #f6f6f6;
}
.side_nav_bar .title{
  font-size: 16px;
  font-family: "Microsoft YaHei",sans-serif;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
}
.menu{
  margin-top: 10px;
}
.menu ul li{
  width: 200px;
  height: 40px;
  line-height: 40px;
  list-style: none;
}
.menu ul li a {
  display: block;
  width: 200px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  color: #666666;
  font-family: "Microsoft YaHei",sans-serif;
  font-size: 14px;
}
.router-link-exact-active {
  background-color: #ff8800;
}
</style>
