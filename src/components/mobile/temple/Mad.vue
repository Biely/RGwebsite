<template>
  <div class="Mad">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="peiyan">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\mad\step12@2x.png" alt="">
      </div>
      <div class="py-content mwidth">
         <img class="im1" src="..\..\..\assets\images\mobile\mad\22@2x.jpg" alt="">
         <img class="im2" src="..\..\..\assets\images\mobile\mad\music@2x.png" alt="">
         <img class="im3" src="..\..\..\assets\images\mobile\mad\21@2x.jpg" alt="">
         <img class="im4" src="..\..\..\assets\images\mobile\mad\11@2x.png" alt="">
         <img class="im5" src="..\..\..\assets\images\mobile\mad\2@2x.jpg" alt="">
         <img class="im6" src="..\..\..\assets\images\mobile\mad\1@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mad',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/mad/bannerMAD@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/mad/bannerMAD@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.peiyan{
  width: 100%;
  background: url('..\..\..\assets\images\mobile\mad\bg1@2x.jpg') center no-repeat;
  background-size: 100% 100%;
}
.py-content{
  width: 90%;
  height: 1000px;
  position: relative;
}
.py-content img{
  width: 51%;
  height: auto;
  position: absolute;
}
.im1{
  right: 15px;
  top: 0px;
}
.im2{
  left: 15px;
  top: 40px;
}
.im3{
  left: 15px;
  top: 350px;
}
.im4{
  right: 15px;
  top: 400px;
}
.im5{
  right: 15px;
  top: 700px;
}
.im6{
  left: 15px;
  top: 750px;
}
</style>
