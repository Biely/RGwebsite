<template>
  <div class="Moversea">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="ts">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\oversea\step13@2x.png" alt="">
      </div>
      <div class="ts-block">
        <img class="t-right" src="..\..\..\assets\images\mobile\oversea\25@2x.png" alt="">
        <img class="t-left" src="..\..\..\assets\images\mobile\oversea\15@2x.png" alt="">
      </div>
    </div>
    <div class="ld">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\oversea\step12@2x.png" alt="">
      </div>
      <div class="ld-block">
        <div class="ld-inner">
          <img class="item i1" src="..\..\..\assets\images\mobile\oversea\2@2x.png" alt="">
          <img class="item-img i2" src="..\..\..\assets\images\mobile\oversea\1@2x.png" alt="">
          <img class="item-img i3" src="..\..\..\assets\images\mobile\oversea\11@2x.png" alt="">
          <img class="item i4" src="..\..\..\assets\images\mobile\oversea\21@2x.png" alt="">
          <img class="item i5" src="..\..\..\assets\images\mobile\oversea\23@2x.png" alt="">
          <img class="item-img i6" src="..\..\..\assets\images\mobile\oversea\13@2x.png" alt="">
          <img class="item-img i7" src="..\..\..\assets\images\mobile\oversea\12@2x.png" alt="">
          <img class="item i8" src="..\..\..\assets\images\mobile\oversea\22@2x.png" alt="">
          <img class="item i9" src="..\..\..\assets\images\mobile\oversea\24@2x.png" alt="">
          <img class="item-img i10" src="..\..\..\assets\images\mobile\oversea\14@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="dream">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\oversea\step11@2x.png" alt="">
      </div>
      <div class="d-block">
        <img src="..\..\..\assets\images\mobile\oversea\story@2x.png" alt="">
      </div>
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\oversea\step1@2x.png" alt="">
      </div>
      <div class="d-block">
        <img src="..\..\..\assets\images\mobile\oversea\bx.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Moversea',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/oversea/slogan@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/oversea/slogan@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ts-block{
  width: 90%;
  margin: 0 auto;
  position: relative;
  height: 300px;
}
.t-right{
  width: 55%;
  position: absolute;
  top: 0px;
  right: 0px;
}
.t-left{
  width: 52.5%;
  position: absolute;
  top: 20px;
  left: 0px;
}
.ld-block{
  background: url('..\..\..\assets\images\mobile\oversea\link@2x.jpg') center no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 1700px;
}
.ld-inner{
  width: 90%;
  height: 1700px;
  margin: 0 auto;
  position: relative;
}
.item{
  width: 42.5%;
  height: auto;
  position: absolute;
}
.item-img{
  width: 52.5%;
  height: auto;
  position: absolute;
}
.i1{
  left: 0px;
  top: 0px;
}
.i2{
  right: 0px;
  top: 80px;
}
.i3{
  left: 0px;
  top: 415px;
}
.i4{
  right: 0px;
  top: 400px;
}
.i5{
  left: 0px;
  top: 700px;
}
.i6{
  right: 0px;
  top: 740px;
}
.i7{
  left: 0px;
  top: 1075px;
}
.i8{
  right: 0px;
  top: 1010px;
}
.i9{
  left: 0px;
  bottom: 30px;
}
.i10{
  right: 0px;
  bottom: 60px;
}
.dream{
  width: 100%;
  background: url('..\..\..\assets\images\mobile\oversea\bg@2x.jpg') center no-repeat;
  background-size: 100% 100%;
}
.d-block{
  width: 80%;
  margin: 0 auto;
}
.d-block img{
  width: 100%;
  height: auto;
}
.d-block:last-of-type{
  padding-bottom: 50px;
}
</style>
