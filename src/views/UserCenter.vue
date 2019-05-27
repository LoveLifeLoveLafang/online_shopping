<template>
  <div class="user-center">
    <head-nav></head-nav>
    <user-center-header></user-center-header>
    <div class="user_center_main">
      <side-nav-bar></side-nav-bar>
      <router-view></router-view>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script>
import HeadNav from '@/components/Common/HeadNav.vue'
import UserCenterHeader from '@/components/UserCenter/UserCenterHeader.vue'
import SideNavBar from '@/components/UserCenter/SideNavBar.vue'
import PageFoot from '@/components/Common/PageFoot.vue'
export default {
  name: 'UserCenter',
  components: {
    HeadNav,
    UserCenterHeader,
    SideNavBar,
    PageFoot
  }
}
</script>

<style lang="css" scoped>
.user_center_main {
  width: 1200px;
  height: 500px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
}
</style>
