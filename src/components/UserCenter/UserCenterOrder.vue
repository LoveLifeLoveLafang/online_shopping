<template>
  <div class="user_center_order">
    <p class="title">全部订单</p>
    <div class="header">
      <ul class="order_header">
        <li class="col01">2016-8-21 17:36:24</li>
        <li class="col02">订单号：56872934</li>
        <li class="col02 stress">未支付</li>
      </ul>
    </div>
    <table class="order_table">
      <tbody>
        <tr>
          <td width="55%">
            <ul class="order_list">
              <li class="col01">
                <img src="../../assets/images/goods02.jpg">
              </li>
              <li class="col02">
                嘎啦苹果嘎啦苹果<em>11.80元/500g</em>
              </li>
              <li class="col03">1</li>
              <li class="col04">11.80元</li>
            </ul>
            <ul class="order_list">
              <li class="col01">
                <img src="../../assets/images/goods02.jpg">
              </li>
              <li class="col02">
                嘎啦苹果嘎啦苹果<em>11.80元/500g</em>
              </li>
              <li class="col03">1</li>
              <li class="col04">11.80元</li>
            </ul>
          </td>
          <td width="15%">33.60元</td>
          <td width="15%">待付款</td>
          <td width="15%">
            <a href="#" class="btn">去付款</a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenterOrder'
}
</script>

<style lang="css" scoped>
  .user_center_order{
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
  .header {
    height: 30px;
    background-color: #f7f7f7;
    border: 1px solid #dddddd;
    margin: 20px auto 0;
  }
  .order_header{
    width: 980px;
    clear: both;
  }
  .order_header li {
    list-style: none;
    float: left;
    height: 30px;
    line-height: 30px;
    text-align: left;
  }
  .order_header .col01 {
    width: 20%;
    margin-left: 20px;
  }
  .order_header .col02{
    width: 20%;
  }

  .order_table {
    width: 980px;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
    margin: -1px auto 0;
  }
  .order_table td {
    border: 1px solid #dddddd;
    text-align: center;
  }
  .order_list {
    border-bottom: 1px solid #dddddd;
    margin-bottom: -2px;
  }
  .order_list li {
    float: left;
    height: 80px;
    line-height: 80px;
    list-style: none;
  }
  .order_list .col01 {
    width: 20%;
  }
  .order_list img {
    width: 60px;
    height: 60px;
    border: 1px solid #dddddd;
    margin: 10px auto;
  }
  .order_list .col02 {
    width: 50%;
    text-align: left;
  }
  .order_list .col02 em {
    color: #999999;
    margin-left: 10px;
  }
  .order_list .col03 {
    width: 10%;
  }
  .order_list .col04 {
    width: 20%;
  }
  .btn {
    display: inline-block;
    border: 1px solid #dddddd;
    color: #666666;
    padding: 5px 10px;
    text-decoration: none;
  }
  .pagination {
    position: absolute;
    bottom: 30px;
    height: 40px;
    width: 980px;
  }
</style>
