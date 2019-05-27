<template>
  <div class="good_show">
    <div class="good_image">
      <img :src=imgSrc alt="shopping_image">
    </div>
    <a class="good_name" href="#">{{good_name}}</a>
    <div class="good_info">
      <span class="price">￥{{good_price}}</span>
      <span class="sale">{{sale}}</span>
      <span class="shopping_cart"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodShow',
  props: ['imgSrc', 'good_name', 'good_price'],
  computed: {
    sale () {
      return this.good_price + '/500g'
    }
  }
}
</script>

<style lang="css" scoped>
.good_show{
  width: 196px;
}
.good_image {
  width: 100%;
}
img{
  width: 160px;
  height: 160px;
  margin: 10px 18px;
}
.good_name {
  font-size: 12px;
  color: #666666;
  text-decoration: none;
  text-align: left;
  display: block;
  margin-left: 18px;
}
.good_info{
  color: #DA260E;
  font-size: 14px;
  font-family: 'Microsoft YaHei',sans-serif;
  text-align: left;
  margin: 10px 18px;
  display: flex;
  justify-content: space-between;
}
.good_info span{
  display: inline-block;
}
.sale{
  font-size: 12px;
  font-family: 'Microsoft YaHei',serif;
  color: #999999;
}
.shopping_cart{
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("../../assets/images/shop_cart.png") no-repeat;
}
</style>
