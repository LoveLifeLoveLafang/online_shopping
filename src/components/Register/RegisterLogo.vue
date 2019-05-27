<template>
  <div class="register_logo">
    <a class="logo">
      <img src="../../assets/images/logo02.png" alt="logo" />
    </a>
    <div class="slogan">足不出户 · 新鲜每一天</div>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: 'RegisterLogo'
}
</script>

<style lang="css" scoped>
  .register_logo{
    width: 300px;
  }
.logo{
  width: 200px;
  height: 76px;
  margin: 0 auto;
}
  .slogan{
    width: 300px;
    height: 30px;
    font-size: 24px;
    color: #69a81e;
    margin: 20px 30px 0 0;
  }
  .banner{
    width: 250px;
    height: 330px;
    background: url("../../assets/images/register_banner.png") no-repeat;
    margin: 20px 10px 0 0;
    opacity: 0.5;
  }
</style>
