<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img src="../../assets/images/slide.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/slide02.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/slide03.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/slide04.jpg">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSlider',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.slider {
  width: 760px;
  height: 270px;
}
</style>
