<template>
  <div class="login-main">
    <div class="main-wrapper">
      <div class="login-banner"></div>
      <div class="login-slogan">日夜兼程 · 急速送达</div>
      <div class="login-form">
        <div class="form_title">
          <h1>用户登录</h1>
          <a href="#">立即注册</a>
        </div>
        <div class="form_input">
          <form>
            <input type="text" name="username" class="name_input" placeholder="请输入用户名">
            <div class="user_error">输入错误</div>
            <input type="password" name="pwd" class="pass_input" placeholder="请输入密码">
            <div class="pwd_error">输入错误</div>
            <div class="more_input">
              <input type="checkbox" name="">
              <label>记住用户名</label>
              <a href="#">忘记密码</a>
            </div>
            <input type="submit" name="" value="登录" class="input_submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.login-main {
  width: 100%;
  height: 480px;
  background-color: #518e17;
}
.main-wrapper {
  width: 960px;
  height: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.login-banner {
  background: url("../../assets/images/login_banner.png") no-repeat;
  width: 380px;
  height: 320px;
  margin-top: 90px;
}
.login-slogan {
  width: 40px;
  height: 300px;
  font-size: 30px;
  color: #f0f9e8;
  margin: 80px 0 120px;
  text-align: center;
  line-height: 36px;
}
.login-form {
  width: 370px;
  height: 380px;
  margin-top: 50px;
  border: 1px solid #f6f6f6;
  background: #ffffff;
}
.form_title{
  height: 60px;
  width: 308px;
  margin: 10px auto;
  border-bottom: 1px solid #e0e0e0;
}
.form_title h1 {
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  color: #a8a8a8;
  float: left;
  font-weight: bold;
  margin-left: 44px;
}
.form_title a {
  width: 100px;
  height: 20px;
  display: block;
  font-size: 16px;
  color: #5fb42a;
  text-indent: 15px;
  text-decoration: none;
  background: url("../../assets/images/icons02.png") left 5px no-repeat;
  float: left;
  margin: 20px 0 0 36px;
}
.form_input{
  width: 308px;
  height: 250px;
  margin: 20px auto;
  position: relative;
}
.name_input, .pass_input {
  width: 306px;
  height: 36px;
  border: 1px solid #e0e0e0;
  background: url("../../assets/images/icons02.png") 280px -41px no-repeat #f8f8f8;
  outline: none;
  font-size: 14px;
  text-indent: 10px;
  position: absolute;
  left: 0;
  top: 0;
}
.pass_input{
  top:65px;
  background-position: 280px -95px;
}
.more_input{
  position: absolute;
  left: 0;
  top: 130px;
  width: 100%;
}
.more_input input{
  float: left;
  margin-top: 2px;
}
.more_input label{
  float: left;
  margin-left: 10px;
}
.more_input a {
  float: right;
  color: #666666;
  text-decoration: none;
}
.more_input a:hover {
  color: #ff8800;
}
.input_submit{
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  top: 180px;
  background-color: #47aa34;
  color: #ffffff;
  font-size: 22px;
  border: 0;
  font-family: 'Microsoft YaHei',serif;
  cursor: pointer;
}
</style>
