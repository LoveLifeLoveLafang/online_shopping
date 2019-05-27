<template>
  <div class="footer">
    <ul class="link_list">
      <li class="link"><a href="#">关于我们</a></li>
      <li class="link">|</li>
      <li class="link"><a href="#">联系我们</a></li>
      <li class="link">|</li>
      <li class="link"><a href="#">招聘人才</a></li>
      <li class="link">|</li>
      <li class="link"><a href="#">友情链接</a></li>
    </ul>
    <p>CopyRight © 2016 北京天天生鲜信息技术有限公司 All Rights Reserved</p>
    <p>电话：010-****888 京ICP备*******8号</p>
  </div>
</template>

<script>
export default {
  name: 'PageFoot'
}
</script>

<style lang="css" scoped>
.footer{
  width: 100%;
  height: 125px;
  border-top: 2px solid #4fa742;
}
  a{
    text-decoration: none;
    color: #4e4e4e;
    font-size: 13px;
    cursor: pointer;
  }
  a:hover{
    color: #ff8800;
  }
  .link{
    float: left;
    list-style: none;
    margin-right: 10px;
  }
  .link_list{
    display: inline-block;
    margin: 30px auto 10px;
    text-align: center;
  }
  p{
    text-align: center;
    margin-bottom: 10px;
  }
</style>
