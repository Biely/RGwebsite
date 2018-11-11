<template>
  <div class="Mbenke">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="adv">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\benke\step12@2x.png" alt="">
      </div>
      <div class="adv-content mwidth">
        <img src="..\..\..\assets\images\mobile\benke\tc@2x.jpg" alt="">
      </div>
    </div>
    <div class="xli">
      <p class="top-title mwidth">頂級教育，一流學歷</p>
      <p class="x-content">英國的教育具有悠久的歷史和古老的傳統，高等教育中無論是從科研質量，還是畢業生質量，英國在世界上都名列前茅。而且英國含金量相對較高，畢業生回國還能享受多項優惠政策。</p>
    </div>
    <div class="tj">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\benke\step11@2x.png" alt="">
      </div>
      <div class="tj-list">
        <div class="tj-item">
          <img src="..\..\..\assets\images\mobile\benke\nsm@2x.png" alt="">
          <p class='tj-title'>教育背景</p>
          <p>結束國內預科課程或國內本科在讀，學習成績70分以上</p>
        </div>
        <div class="tj-item">
          <img src="..\..\..\assets\images\mobile\benke\yy.png" alt="">
          <p class='tj-title'>語言能力</p>
          <p>本科雅思要求6.7-7.0<br>預科雅思要求為4.5-6.0</p>
        </div>
        <div class="tj-item">
          <img src="..\..\..\assets\images\mobile\benke\qd.png" alt="">
          <p class='tj-title'>留學費用</p>
          <p>英國本科課程學費大約為10,000-16,000英鎊/年，生活費大約為8,500-10,000英鎊/年</p>
        </div>
        <div class="tj-item">
          <img src="..\..\..\assets\images\mobile\benke\wd.png" alt="">
          <p class='tj-title'>基本條件</p>
          <p>1、本科課程申請者為國內高二或高三的學生，平均分70-85分。</p>
          <p>2、昇讀本科的學生必須有英國預科課程背景，或為國內大一或大二的學生，需提供高中成績及大學期間成績，一般要求均分在70分以上</p>
        </div>
      </div>
    </div>
    <div class="lc">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\benke\step1@2x.png" alt="">
      </div>
      <div class="lc-list">
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\1@2x.png" alt="">
          <p>初期指導</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\2@2x.png" alt="">
          <p>職業評估</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\3@2x.png" alt="">
          <p>定制方案</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\4@2x.png" alt="">
          <p>文書指導</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\5@2x.png" alt="">
          <p>申請指導</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\6@2x.png" alt="">
          <p>簽證服務</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\7@2x.png" alt="">
          <p>住宿接機</p>
        </div>
        <div class="lc-item">
          <img src="..\..\..\assets\images\mobile\benke\8@2x.png" alt="">
          <p>行前指導</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mbenke',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/benke/banner@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/benke/banner@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adv-content{
  width: 90%;
}
.xli{
  background: url('..\..\..\assets\images\mobile\benke\bg@2x.jpg') center no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.top-title{
  text-align: center;
  font-size: 35px;
}
.x-content{
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  text-align: justify;
}
.tj-list{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tj-item{
  width: 48%;
  padding: 40px 0px;
  box-shadow: 0 0 2px #76C81F;
  border-radius: 10px;
  margin-bottom: 25px;
  min-height: 300px;
}
.tj-item img{
  height: 100px;
  margin-bottom: 10px;
}
.tj-item p{
  padding: 10px 0px;
  width: 90%;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 25px;
}
.tj-item:last-of-type img{
  margin-bottom: 10px;
}
.tj-item:last-of-type p:first-of-type{
  padding: 10px 0px;
}
.tj-item:last-of-type p{
  text-align: left;
  padding: 0px;
}
.tj-title{
  text-align: center !important;
  font-size: 35px !important;
  color: #1A6997;
}
.lc-list{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.lc-item{
  width: 25%;
  margin-bottom: 20px;
}
.lc-item img{
  height: 120px;
  width: auto;
}
.lc-item p{
  padding: 15px 0px;
  font-size: 30px;
  color: #1A6997;
}
</style>
