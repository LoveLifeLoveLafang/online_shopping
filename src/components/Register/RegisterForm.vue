<template>
  <div class="register_form">
    <div class="title">
      <h1>用户注册</h1>
      <a href="#">登录</a>
    </div>
    <div class="form">
      <form>
      <ul>
        <li>
          <label for="username">用户名:</label>
          <input type="text" name="username" id="username">
          <span></span>
        </li>
        <li>
          <label for="password">密码:</label>
          <input type="password" name="password" id="password">
          <span></span>
        </li>
        <li>
          <label for="cpwd">确认密码:</label>
          <input type="password" name="cpwd" id="cpwd">
          <span></span>
        </li>
        <li>
          <label for="mail">邮箱:</label>
          <input type="text" name="mail" id="mail">
          <span></span>
        </li>
        <!--<li class="agreement">-->
          <!--<input type="checkbox" name="allow" id="allow">-->
          <!--<label>同意"天天生鲜用户使用协议"</label>-->
          <!--<span></span>-->
        <!--</li>-->
        <li class="sub">
          <input type="submit" value="注册">
        </li>
      </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style lang="css" scoped>
.register_form{
  width: 400px;
  padding: 0;
}
.title{
  width: 400px;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
}
.title h1{
  height: 50px;
  line-height: 50px;
  display: block;
  font-size: 24px;
  color: #a8a8a8;
  font-weight: bold;
}
.title a{
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #5fb42a;
  padding-right: 20px;
  background: url("../../assets/images/icons02.png") 35px 3px no-repeat;
  margin-top: 15px;
}
.form {
  width: 400px;
  margin: 30px auto;
  position: relative;
}
.form li {
  height: 70px;
}
.form label{
  width: 70px;
  height: 40px;
  line-height: 40px;
  float: left;
  font-size: 14px;
  color: #a8a8a8;
  text-align: left;
}
.form input {
  width: 320px;
  height: 38px;
  border: 1px solid #a8a8a8;
  float: left;
  outline: none;
  text-indent: 10px;
  background-color: #f8f8f8;
}
/*li .agreement input{*/
  /*display: inline-block;*/
  /*width: 70px;*/
  /*height: 40px;*/
  /*float: left;*/
  /*margin-left: 13px;*/
/*}*/
/*li .agreement label{*/
  /*width: 320px;*/
  /*display: inline-block;*/
  /*float: left;*/
/*}*/
  .form ul {
    list-style: none;
  }
  .sub input {
    width: 392px;
    height: 40px;
    background-color: #47aa34;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Microsoft YaHei',serif;
  }
</style>
