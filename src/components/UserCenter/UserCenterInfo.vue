<template>
  <div class="user_center_info">
    <div class="basic_info">
      <p class="title">基本信息</p>
      <ul class="detail_info">
        <li>
          <span>用户名:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p class="content">18210569700</p>
        </li>
        <li>
          <span>联系方式:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p class="content">18210569700</p>
        </li>
        <li>
          <span>联系地址:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p class="content">北京市昌平区</p>
        </li>
      </ul>
    </div>
    <div class="last_view">
      <p class="title">最近浏览</p>
      <div class="shopping_show_container">
        <good-show v-for="(item, index) in goods"
                   :key=index
                   :imgSrc=item.imgSrc
                   :good_name = item.name
                   :good_price = item.price
        ></good-show>
      </div>
    </div>
  </div>
</template>

<script>
import GoodShow from '@/components/Common/GoodShow.vue'
export default {
  name: 'UserCenterInfo',
  components: {
    GoodShow
  },
  data () {
    return {
      goods: [
        {
          imgSrc: require('../../assets/images/goods/goods003.jpg'),
          name: '大兴大棚草莓',
          price: '16.8'
        },
        {
          imgSrc: require('../../assets/images/goods/goods004.jpg'),
          name: '吐鲁番梨光杏',
          price: '5.50'
        },
        {
          imgSrc: require('../../assets/images/goods/goods005.jpg'),
          name: '黄肉桃',
          price: '10.00'
        },
        {
          imgSrc: require('../../assets/images/goods/goods006.jpg'),
          name: '进口西梅',
          price: '28.8'
        },
        {
          imgSrc: require('../../assets/images/goods/goods007.jpg'),
          name: '香梨',
          price: '6.45'
        }
      ]
    }
  }
}
</script>

<style scoped>
.user_center_info{
  width: 980px;
  height: 500px;
}
.basic_info{
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
.detail_info{
  width: 100%;
  height: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f6f6f6;
  margin-bottom: 10px;
}
.detail_info li {
  list-style: none;
  display: flex;
  clear: both;
}
.detail_info li span {
  float: left;
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: right;
}
.detail_info li p {
  display: block;
  font-size: 14px;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.last_view{
  margin-top: 20px;
}
.shopping_show_container{
  display: flex;
}
</style>
