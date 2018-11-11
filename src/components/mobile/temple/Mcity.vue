<template>
  <div class="city">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="adv">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\city\step12@2x.png" alt="">
      </div>
      <div class="mg-video" style="width:90%;margin:0 auto;margin-bottom:20px;">
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
        >
        </video-player>
      </div>
      <div class="adv-item mwidth mb">
        <div class="icon">
          <img src="..\..\..\assets\images\mobile\city\s@2x.png" alt="">
        </div>

        <div class="wrod">
          <p class="w-title">線下經營省成本，流動率低師資再培訓率高</p>
          <div class="w-stitle">
            <p>1·節省SA，CC的人力成本</p>
            <p>2·APP課程共享，節省教師備課OFFICETIME成本</p>
            <p>3·線下線上無間斷培訓學院，令師資永遠在行業前端</p>
          </div>
        </div>
      </div>
      <div class="adv-item mwidth mb">
        <div class="icon">
          <img src="..\..\..\assets\images\mobile\city\w@2x.png" alt="">
        </div>
        <div class="wrod">
          <p class="w-title">品牌推廣，市場行銷系統化轉化率高</p>
          <div class="w-stitle">
            <p>1·RG獨有的情景互動推廣，結合線上分銷讓更多的家長參與，萬眾推廣，全民分享</p>
            <p>2·老師能通過系統評估，保持優質的教學續課率有保障</p>
            <p>3·避開紅海競爭，RG線上教育免費課堂增强用戶粘度，吸粉性强</p>
          </div>
        </div>
      </div>
      <div class="adv-item mwidth mb">
        <div class="icon">
          <img src="..\..\..\assets\images\mobile\city\y@2x.png" alt="">
        </div>
        <div class="wrod">
          <p class="w-title">自主研發更適合國內的學科教材</p>
          <div class="w-stitle">
            <p>匯聲匯影匯遊戲，融入藝術，音樂，情景劇學院更好地學習並應用</p>
          </div>
        </div>
      </div>
    </div>
    <div class="support">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\city\step11@2x.png" alt="">
      </div>
      <div class="s-list">
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\pp@2x.png" alt="">
          <p>品牌支持</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\sc@2x.png" alt="">
          <p>市場支持</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\zs@2x.png" alt="">
          <p>招生支持</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\ls@2x.png" alt="">
          <p>名師支持</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\qd@2x.png" alt="">
          <p>通路行銷</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\px@2x.png" alt="">
          <p>人才培訓</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\cp@2x.png" alt="">
          <p>產品支持</p>
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\gl@2x.png" alt="">
          <p>管理支持</p>
        </div>
      </div>
    </div>
    <div class="plan">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\city\step1@2x.png" alt="">
      </div>
      <div class="p-list">
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\1.jpg" alt="">
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\2.jpg" alt="">
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\3.jpg" alt="">
        </div>
        <div class="item">
          <img src="..\..\..\assets\images\mobile\city\4.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'Mad',
  components: {
    Swiper,
    SwiperItem,
    videoPlayer
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/city/banner@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/city/banner@2x.jpg'),
        title: ''
      }],
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: 'https://stroage.rgenglish.net/20180927rgmg.mp4'
        }],
        poster: require('../../../assets/images/citypartners/20181010170335.jpg'),
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adv-item{
  width: 85%;
  padding: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 0 5px #76C81F;
  border-radius:10px;
}
.icon{
  width: 30%;
}
.icon img{
  width: 90%;
  height: auto;
  margin: 0 auto;
}
.wrod{
  width: 70%;
  text-align: left;
  padding-left: 25px;
  line-height: 1.8;
}
.w-title{
  color: #1A6997;
  font-size: 32px;
  font-weight: bold;
}
.w-stitle{
  font-size: 25px;
  color: #666666;
}
.mb{
  margin-bottom: 50px;
}
.support{
  background: url('..\..\..\assets\images\mobile\city\bg@2x.jpg') center no-repeat;
  background-size: 100% 100%;
  width: 100%;
}
.s-list{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.s-list .item{
  width: 25%;
  color: #fff;
  padding-bottom: 50px;
}
.s-list .item img{
  width: auto;
  height: 80px;
  padding-bottom: 10px;
  margin: 0 auto;
}
.p-list{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.p-list .item{
  width: 545px;
  height: 406px;
  color: #1A6997;
  padding-bottom: 50px;
}
.p-list .item img{
  height: 100%;
  width: auto;
}
.p-list .item .i-title{
  font-weight: bold;
}
</style>
