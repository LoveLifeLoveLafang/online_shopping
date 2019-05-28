<template>
  <div class="wrapper">
    <div class="hot-good">
      <h3 class="title">新鲜水果</h3>
      <div class="subtitle">
        <span>|</span>
        <a href="#">鲜芒</a>
        <a href="#">加州提子</a>
        <a href="#">亚马逊牛油果</a>
      </div>
      <a class="more" href="#">查看更多 ></a>
    </div>
    <div class="goods_show">
      <img src="../../assets/images/banner01.jpg" class="title_img">
      <div class="goods">
        <div class="good">
          <h4 class="name">草莓</h4>
          <img src="../../assets/images/goods/goods003.jpg">
          <p>￥30.00</p>
        </div>
        <div class="good">
          <h4 class="name">葡萄</h4>
          <img src="../../assets/images/goods/goods002.jpg">
          <p>￥5.5</p>
        </div>
        <div class="good">
          <h4 class="name">柠檬</h4>
          <img src="../../assets/images/goods/goods001.jpg">
          <p>￥3.90</p>
        </div>
        <div class="good">
          <h4 class="name">奇异果</h4>
          <img src="../../assets/images/goods/goods012.jpg">
          <p>￥25.80</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotGoods'
}
</script>

<style lang="css" scoped>
.wrapper {
  margin: 15px auto;
  width: 1200px;
}
.hot-good {
  height: 42px;
  width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid #37ab40;
}
.title {
  width: 64px;
  height: 42px;
  line-height: 42px;
  color: #37ab40;
  font-size: 16px;
  display: block;
  float: left;
}
.subtitle {
  height: 20px;
  margin: 20px 0 0;
  display: block;
  float: left;
}
.subtitle span {
  margin: 0 10px 0 20px;
}
.subtitle a {
  margin: 0 5px;
  text-decoration: none;
  color: #666666;
}
.more {
  display: block;
  text-decoration: none;
  float: right;
  line-height: 42px;
  color: #666666;
}
.goods_show {
  height: 300px;
  width: 1200px;
  margin: 0 auto;
  clear: both;
}
.goods_show .title_img {
  width: 200px;
  height: 300px;
  display: block;
  float: left;
}
.goods {
  display: flex;
}
.goods .good {
  width: 249px;
  height: 299px;
  border: 1px solid #ededed;
}
.goods .good .name {
  display: block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  color: #666666;
  font-size: 14px;
  margin: 20px 24px 0;
}
.goods .good img {
  width: 180px;
  height: 180px;
  margin: 0 auto;
}
.goods .good p {
  font-size: 20px;
  display: block;
  margin-top: 5px;
  color: #c40000;
}
</style>
