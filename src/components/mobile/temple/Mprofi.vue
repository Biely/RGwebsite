<template>
  <div class="Mprofi">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="desc">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\about\step11@2x.png" alt="">
      </div>
      <div class="d-word">
        <p>雅際英語為雅際教育（HK）有限公司旗下教育品牌，成立於2015年3月，全職母語外教比例85%，以專業英語培訓結合“互聯網+”外教上門培訓模式的教育企業為覈心，智慧個性化教學系統實現數據化明理化教學；致力於綜合具有合格教師資格的外教資源，嚴格的錄用標準，為3歲以上幼少年及成人提供專業多元化的外教上門授課服務。通過線上約課，雅際語言中心（線下校區）趣味體驗的管道，線上線下結合</p>
      </div>
    </div>
    <div class="map">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\about\step1@2x.png" alt="">
      </div>
      <div class="m-content">
        <iframe src="../../../static/mmap.html" width="100%" height="250px" scrolling="no" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mprofi',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/about/Slogan@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/about/Slogan@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d-word{
  width: 85%;
  margin: 0 auto;
  font-size: 28px;
  line-height: 1.8;
  text-align: justify;
}
.m-content{
  width: 90%;
  margin: 0 auto;
}
</style>
