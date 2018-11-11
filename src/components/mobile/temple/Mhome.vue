<template>
    <div class="container">
      <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
      <div class="service">
         <div class="top-title mwidth">
           <img src="..\..\..\assets\images\mobile\index\step11@2x.png" alt="">
         </div>
         <div class="service-list">
           <flexbox :gutter="0" wrap="wrap">
             <flexbox-item :span="1/2">
               <img src="..\..\..\assets\images\mobile\index\jpjx@2x.png" alt="">
             </flexbox-item>
             <flexbox-item :span="1/2">
               <img src="..\..\..\assets\images\mobile\index\smsk@2x.png" alt="">
             </flexbox-item>
             <flexbox-item :span="1/2">
               <img src="..\..\..\assets\images\mobile\index\sdss@2x.png" alt="">
             </flexbox-item>
             <flexbox-item :span="1/2">
               <img src="..\..\..\assets\images\mobile\index\sqfd@2x.png" alt="">
             </flexbox-item>
             <flexbox-item>
               <img class="lastimg" src="..\..\..\assets\images\mobile\index\5a433258c55a3@2x.png" alt="">
             </flexbox-item>
           </flexbox>
         </div>
      </div>
      <div class="system" style="">
        <div class="top-title mwidth">
          <img src="..\..\..\assets\images\mobile\index\step1@2x.png" alt="">
        </div>
        <div class="system-content">
          <div class="s-item a" style="">
             <img src="..\..\..\assets\images\mobile\index\1@2x.png" alt="" style="width:100%;">
          </div>
          <div class="s-item b" style="">
             <img src="..\..\..\assets\images\mobile\index\2@2x.png" alt="" style="width:100%;">
          </div>
          <div class="s-item c" style="">
             <img src="..\..\..\assets\images\mobile\index\3@2x.png" alt="" style="width:100%;">
          </div>
          <div class="s-item d" style="">
             <img src="..\..\..\assets\images\mobile\index\4@2x.png" alt="" style="width:100%;">
          </div>
          <div class="e" style="">
             <img src="..\..\..\assets\images\mobile\index\5@2x.png" alt="" style="width:100%;">
          </div>
          <div class="f" style="">
             <img src="..\..\..\assets\images\mobile\index\earth.png" alt="" style="width:100%;">
          </div>
          <!-- <img src="..\..\..\assets\images\mobile\index\earth.png" alt="" style="width:90%;margin:0 auto;position:"> -->
        </div>
      </div>
      <div class="plann">
        <div class="top-title mwidth">
          <img src="..\..\..\assets\images\mobile\index\mothtitle.png" alt="">
        </div>
        <div class="inner-plann">
           <div class="top-road">
           </div>
           <img class="phone" src="..\..\..\assets\images\mobile\index\phone.png" alt="">
           <img class="word" src="..\..\..\assets\images\mobile\index\word.png" alt="">
        </div>
      </div>
      <div class="nenli">
        <img class="w1" src="..\..\..\assets\images\mobile\index\w1@2x.png" alt="">
        <img class="wj" src="..\..\..\assets\images\mobile\index\wj@2x.png" alt="">
      </div>
      <div class="stone">
        <img src="..\..\..\assets\images\mobile\index\stone@2x.png" alt="">
        <img src="..\..\..\assets\images\mobile\index\w2@2x.png" alt="">
      </div>
      <div class="btm">
        <div class="top-title mwidth">
          <img src="..\..\..\assets\images\mobile\index\toplogo@2x.png" alt="">
        </div>
        <div class="btm-content mwidth">
          <p>雅際英語為雅際教育（HK）有限公司旗下教育品牌，成立於2015年3月，全職母語外教比例85%，以專業英語培訓結合“互聯網+”外教上門培訓模式的教育企業為覈心，智慧個性化教學系統實現數據化明理化教學；致力於綜合具有合格教師資格的外教資源，嚴格的錄用標準，為3歲以上幼少年及成人提供專業多元化的外教上門授課服務。通過線上約課，雅際語言中心（線下校區）趣味體驗的管道，線上線下結合教育，自主研發課程，令學員更快，更有趣地享受語言所帶來的快樂。</p>
        </div>
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'Mhome',
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      show: true,
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/index/Slogan@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/index/Slogan@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top-title{
  width: 70%;
  padding: 50px 0px;
}
.service-list{
  padding: 0px 10px 0px 10px;
}
.service-list img{
  display: block;
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
}
.service-list img:hover{
  border: 1px solid #6FAC2E;
}
.service-list .lastimg{
  width: 95%;
}
.nenli{
  width: 100%;
  height: 600px;
  background: url('..\..\..\assets\images\mobile\index\bg@2x.png') center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.w1{
  width: 60%;
  height: auto;
  position: absolute;
  top: 0px;
  left: 0px;
}
.wj{
  width: 65%;
  height: auto;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.stone{
  width: 100%;
  height: 650px;
  position: relative;
}
.stone img{
  width: 100%;
  height: auto;
}
.stone img:first-of-type{
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.stone img:last-of-type{
  position: absolute;
  top: 0px;
  left: 0px;
}
.btm-content{
  width: 80%;
  line-height: 1.8;
  text-align: justify;
  font-size: 22px;
}
.btm{
  background-color: #F7F7F7;
}
.system{
  background: url('..\..\..\assets\images\mobile\index\systembg.jpg') center no-repeat;
  background-size: 100% 100%;
  height: 1000px;
}
.system-content{
  width:614px;
  margin: 0 auto;
  position: relative;
}
.system .s-item{
  position: absolute;
  width:292px;
  height: 159px;
}
.s-item img{
  height: 100%;
  width: 100%;
}
.a{
  left: 18px;
  top:300px;
}
.b{
  right: 18px;
  top:300px;
}
.c{
  left: 18px;
  top:454px;
}
.d{
  right: 18px;
  top:454px;
}
.e{
  position: absolute;
  width: 580px;
  height: 159px;
  left: 18px;
  top:605px;
}
.e img{
  height: 100%;
  width: 100%;
}
.f{
  position: absolute;
  width: 448px;
  height: 377px;
  left: 75px;
  text-align: center;
}
.f img{
  height: 100%;
  width: 100%;
}
.plann{
  background: url('..\..\..\assets\images\mobile\index\mothbg.jpg') center no-repeat;
  background-size: 100% 100%;
}
.inner-plann{
  width:600px;
  margin: 0 auto;
  height: 1123px;
}
.top-road{
  width: 526px;
  height: 236px;
  margin: 0 auto;
  background: url('..\..\..\assets\images\mobile\index\a691e1e45441c5ab84fd7d4f07936212.png') center no-repeat;
  background-size: 100% 100%;
}
.phone{
  width: 498px;
  height: 426px;
  margin: 0 auto;
  margin-top: 53px;
}
.plann .word{
  width: 495px;
  height: 322px;
  margin: 0 auto;
  margin-top: 33px;
}
</style>
