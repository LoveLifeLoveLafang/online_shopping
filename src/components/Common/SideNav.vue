<template>
  <div class="side_nav">
    <ul class="sub_nav">
      <li><a href="#" class="fruit">新鲜水果</a></li>
      <li><a href="#" class="seafood">海鲜水产</a></li>
      <li><a href="#" class="meet">猪牛羊肉</a></li>
      <li><a href="#" class="egg">禽类蛋品</a></li>
      <li><a href="#" class="vegetables">新鲜蔬菜</a></li>
      <li><a href="#" class="ice">速冻食品</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style lang="css" scoped>
.side_nav {
  width: 200px;
  height: 270px;
  border-left: 1px solid #eeeeee;
}
.sub_nav li {
  height:44px;
  border-bottom:1px solid #eee;
  background:url(../../assets/images/icons.png) 178px -257px no-repeat #fff;
  list-style: none;
}
.sub_nav li a {
  display:block;
  height:44px;
  line-height:44px;
  text-indent: 20px;
  font-size:14px;
  color:#333333;
  text-decoration: none;
}
.sub_nav li a:hover {
  color: #ff8800;
}
.sub_nav li .fruit{background:url(../../assets/images/icons.png) 28px 0px no-repeat;}
.sub_nav li .seafood{background:url(../../assets/images/icons.png) 28px -43px no-repeat;}
.sub_nav li .meet{background:url(../../assets/images/icons.png) 28px -86px no-repeat;}
.sub_nav li .egg{background:url(../../assets/images/icons.png) 28px -132px no-repeat;}
.sub_nav li .vegetables{background:url(../../assets/images/icons.png) 28px -174px no-repeat;}
.sub_nav li .ice{background:url(../../assets/images/icons.png) 28px -220px no-repeat;}
</style>
