<template>
  <div class="Mact">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="idea">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\act\step1@2x.png" alt="">
      </div>
      <div class="i-content" style="height:160px;">
        <div class="right" style="top:25px;">
          <img src="..\..\..\assets\images\mobile\act\2@2x.png" alt="">
        </div>
        <div class="left">
          <img src="..\..\..\assets\images\mobile\act\1@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="theme">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\act\step11@2x.png" alt="">
      </div>
      <div class="box1">
          <div class="wrap">
              <ul>
                  <li>
                   <img src="..\..\..\assets\images\mobile\act\1.jpg" alt="">

                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\2.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\3.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\4.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\5.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\6.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\7.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\8.jpg" alt="">
                  </li>
                  <li><img src="..\..\..\assets\images\mobile\act\9.jpg" alt="">
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  name: 'Mact',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/act/banner@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/act/banner@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.i-content{
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.i-content img{
  width: 100%;
  height: auto;
}
.right{
  width: 52.5%;
  position: absolute;
  right: 0px;
  top: 50px;
}
.left{
  width: 52.5%;
  position: absolute;
  left: 0px;
  top: 20px;
}
ul, li{
  margin: 0px;
  padding: 0px;
}
.box1 {
  width: 100%;
  overflow: hidden;
  height: 560px;
  background-color: #F5F7FA;
}
.box1 .wrap {
  width: 100%;
  height: 580px;
  overflow-x: scroll;
  overflow-y: hidden;
}
.box1 .wrap ul {
  width: 5000px;
  display: flex;
}
.box1 .wrap ul li {
  flex: 1;
  height: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 30px 20px;
  background-color: #fff;
  border-radius: 10px;
}
li img{
  width: 90%;
  margin: 20px auto;
}
li p{
  width: 90%;
  margin: 0 auto;
  text-align: justify;
  padding-bottom: 20px;
  line-height: 1.5;
  font-size: 25px;
}
</style>
