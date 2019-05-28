<template>
  <div class="home">
    <head-nav></head-nav>
    <nav-bar></nav-bar>
    <div class="top">
      <side-nav></side-nav>
      <home-slider></home-slider>
      <div class="advertisement">
        <img src="../assets/images/adv01.jpg">
        <img src="../assets/images/adv02.jpg">
      </div>
    </div>
    <!--<div class="hot" v-for="(item, index) in hotGoods" :key="index">-->
      <!--<hot-goods :data=item></hot-goods>-->
    <!--</div>-->
    <hot-goods></hot-goods>
    <hot-goods></hot-goods>
    <hot-goods></hot-goods>
    <hot-goods></hot-goods>
    <hot-goods></hot-goods>
    <hot-goods></hot-goods>

    <page-foot></page-foot>
  </div>
</template>

<script>
import HeadNav from '@/components/Common/HeadNav.vue'
import NavBar from '@/components/Common/NavBar.vue'
import SideNav from '@/components/Common/SideNav.vue'
import HomeSlider from '@/components/Home/HomeSlider.vue'
import HotGoods from '@/components/Home/HotGoods.vue'
import PageFoot from '@/components/Common/PageFoot.vue'
export default {
  name: 'Home',
  components: {
    HeadNav,
    NavBar,
    SideNav,
    HomeSlider,
    HotGoods,
    PageFoot
  }
}
</script>

<style lang="css" scoped>
.top {
  width: 1200px;
  height: 270px;
  display: flex;
  margin: 0 auto;
}
.advertisement img {
  width: 240px;
  height: 135px;
  display: block;
}
</style>
