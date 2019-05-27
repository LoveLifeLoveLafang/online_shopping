<template>
  <div class="register">
    <div class="wrapper">
      <register-logo></register-logo>
      <register-form></register-form>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script>
import RegisterForm from '@/components/Register/RegisterForm.vue'
import PageFoot from '@/components/Common/PageFoot.vue'
import RegisterLogo from '@/components/Register/RegisterLogo.vue'
export default {
  name: 'Register',
  components: {
    RegisterForm,
    PageFoot,
    RegisterLogo
  }
}
</script>

<style lang="css" scoped>
  .register{
    width: 100%;
    height: 100%;
  }
  .wrapper{
    width: 700px;
    margin: 50px auto;
    display: flex;
    padding: 0;
  }
</style>
