<template>
  <div class="cart">
    <a href="#" class="cart_name">我的购物车</a>
    <div class="counter">1</div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="css" scoped>
.cart {
  width: 200px;
  height: 40px;
  margin-top: 34px;
  clear: both;
}
.cart_name {
  width: 158px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #dddddd;
  display: block;
  background: url(../../assets/images/icons.png) 13px -300px no-repeat;
  font-size: 14px;
  color: #37ab40;
  text-indent: 40px;
  float: left;
  text-decoration: none;
}
.counter {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: #ff8800;
  float: right;
}
</style>
