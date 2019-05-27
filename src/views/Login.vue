<template>
  <div class="login">
    <div class="header-wrapper">
      <div class="login-header">
        <img src="../assets/images/logo02.png" alt="logo">
      </div>
    </div>
    <login-form></login-form>
    <page-foot></page-foot>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm'
import PageFoot from '@/components/Common/PageFoot'
export default {
  name: 'Login',
  components: {
    LoginForm,
    PageFoot
  }
}
</script>

<style lang="css" scoped>
.header-wrapper{
  width: 100%;
  height: 130px;
}
.login-header{
  display: flex;
  width: 960px;
  height: 130px;
  margin: 0 130px;
  align-items: center;
}
.login-header img {
  display: block;
}
</style>
