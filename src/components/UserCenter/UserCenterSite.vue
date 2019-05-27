<template>
  <div class="user_center_site">
    <p class="title">收货地址</p>
    <div class="site_show">
      <p class="first">当前地址 :</p>
      <p class="second">北京市 海淀区 东北旺西路8号中关村软件园 （李思 收） 182****7528</p>
    </div>
    <p class="title">编辑地址</p>
    <div class="edit">
      <div>
        <span>收件人 :</span>
        <el-input type="string" v-model="receiver"></el-input>
      </div>
      <div>
        <span>详细地址 : </span>
        <el-input type="string" v-model="site"></el-input>
      </div>
      <div>
        <span>邮编 : </span>
        <el-input type="string" v-model="site"></el-input>
      </div>
      <div>
        <span>手机 : </span>
        <el-input type="string" v-model="telephone"></el-input>
      </div>
      <el-button type="success">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenterSite',
  data () {
    return {
      receiver: '',
      site: '',
      mail_code: '',
      telephone: ''
    }
  }
}
</script>

<style lang="css" scoped>
  .user_center_site{
    width: 980px;
  }
  .title {
    text-align: left;
    display: block;
    font-size: 16px;
    font-family: 'Microsoft YaHei',serif;
    color: #666666;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .site_show{
    height: 60px;
    width: 980px;
    background-color: #f7f7f7;
    padding: 10px 0 10px;
  }
  .first {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    margin-left: 30px;
  }
  .second {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: left;
    margin-left: 30px;
  }
  .edit {
    background-color: #f7f7f7;
    width: 980px;
    padding: 10px 0 10px;
  }
  .edit div {
    display: flex;
  }
  .edit div .el-input {
    width: 400px;
    display: inline-block;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .edit div span {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    width: 100px;
    text-align: right;
  }
  .el-button {
    display: block;
    margin-left: 110px;
  }
</style>
