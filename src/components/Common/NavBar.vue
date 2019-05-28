<template>
  <div class="home-nav">
    <div class="nav-bar">
      <a href="#" class="logo">
        <img src="../../assets/images/logo.png">
      </a>
      <search></search>
      <cart></cart>
    </div>
    <div class="navigation">
      <div class="wrapper">
      <div class="slogan">全部商品分类</div>
      <ul class="nav_link">
        <li>
          <a href="#">首页</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">手机生鲜</a>
        </li>
        <li>|</li>
        <li>
          <a href="#">抽奖</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Common/Search.vue'
import Cart from '@/components/Common/Cart.vue'
export default {
  name: 'NavBar',
  components: {
    Search,
    Cart
  }
}
</script>

<style lang="css" scoped>
  .home-nav {
    border-bottom: 2px solid #37ab40;
  }
  .nav-bar {
    margin: 0 auto;
    width: 1200px;
    height: 115px;
    display: flex;
    justify-content: space-between;
  }
  .nav-bar .logo {
    height: 115px;
    margin-left: 20px;
  }
  .nav-bar .logo img{
    transform: translateY(50%);
  }
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .slogan {
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: #37ab40;
    color: #FFFFFF;
    font-size: 14px;
    display: inline-block;
  }
  .nav_link {
    list-style: none;
    height: 40px;
    margin-left: 35px;
    clear: both;
    display: inline-block;
  }
  .nav_link li {
    float:left;
    margin: 0 10px;
    line-height: 40px;
  }
  .nav_link li a {
    text-decoration: none;
    font-size: 14px;
    color: #666666;
  }
  .nav_link li a:hover {
    color: #FF8800;
  }
</style>
