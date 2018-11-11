<!-- 城市合伙人 -->
<template>
  <div>
    <keep-alive>
      <Header/>
    </keep-alive>
    <div class="banner">
      <keep-alive>
        <Banner/>
      </keep-alive>
    </div>
    <div class="wrap-adv" style="height: 1300px;">
      <div class="twidth" style="width: 1080px;height: 650px;">
        <div class="top-box">
          <img src="../assets/images/citypartners/title1@2x.png" alt="">
        </div>
        <div class="mg-video" style="width:95%;margin:0 auto;padding-bottom:65px;">
          <video-player  class="video-player vjs-custom-skin"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="playerOptions"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
          >
          </video-player>
        </div>
        <div class="adv-wrod" style="height: 400px;">
          <div class="item" style="width:280px;">
            <div class="a-icon">
              <img src="..\assets\images\citypartners\s@2x.png" alt="" style="height:137px;width:auto;">
            </div>
            <div class="a-content">
              <p class="a-title" style="font-size: 18px;">線下經營省成本，流動率低，師資再培訓率高</p>
              <div class="a-word" style="font-size: 12px;">
                <p>1、節省SA，CC的人力成本。</p>
                <p>2、APP課程共亯，節省教師備課OFFICE TIME成本。</p>
                <p>3、線下線上無間斷培訓學院，令師資永遠在行業前端。</p>
              </div>
            </div>
          </div>
          <div class="item" style="width:280px;">
            <div class="a-icon">
              <img src="..\assets\images\citypartners\w@2x.png" alt="" style="height:137px;width:auto;">
            </div>
            <div class="a-content">
              <p class="a-title" style="font-size: 18px;">品牌推廣，市場行銷系統化，轉化率高</p>
              <div class="a-word" style="font-size: 12px;">
                <p>1、RG獨有的情景互動推廣，結合線上分銷，讓更多的家長參與，萬眾推廣，全民分享。</p>
                <p>2、老師能通過系統評估，保持優質的教學，續課率有保障。</p>
                <p>3、避開紅海競爭，RG線上教育免費課堂，增强用戶粘度，吸粉性强。</p>
              </div>
            </div>
          </div>
          <div class="item" style="width:280px;">
            <div class="a-icon">
              <img src="..\assets\images\citypartners\y@2x.png" alt="" style="height:137px;width:auto;">
            </div>
            <div class="a-content">
              <p class="a-title" style="font-size: 18px;">自主研發更適合國內的學科教材</p>
              <div class="a-word" style="font-size: 12px;">
                <p>匯聲匯影匯遊戲，融入藝術，音樂，情景劇學院更好地學習並應用。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-service" style="height: 650px;">
      <div class="twidth" style="width: 1080px;">
        <div class="top-box">
          <img src="../assets/images/citypartners/title2@2x.png" alt="">
        </div>
        <ul class="service-list">
          <li class="service-item">
            <img src="../assets/images/citypartners/icon1@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">品牌支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon2@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">市場支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon3@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">招生支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon4@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">名師支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon5@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">產品支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon6@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">管理支持</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon7@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">通路行銷</p>
          </li>
          <li class="service-item">
            <img src="../assets/images/citypartners/icon8@2x.png" alt="" style="height: 100px;width: auto;">
            <p style="font-size:20px;">人才培訓</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-plan" style="height: 1000px;">
      <div class="twidth" style="width: 1080px;">
        <div class="top-box">
          <img src="../assets/images/citypartners/title3@2x.png" alt="">
        </div>
        <ul class="plan-list">
          <li class="plan-item">
            <img src="../assets/images/citypartners/1dq@2x.png" alt="" style="width:496px;">
          </li>
          <li class="plan-item">
            <img src="../assets/images/citypartners/2jy@2x.png" alt="" style="width:496px;">
          </li>
          <li class="plan-item">
            <img src="../assets/images/citypartners/3zh@2x.png" alt="" style="width:496px;">
          </li>
          <li class="plan-item">
            <img src="../assets/images/citypartners/4qj@2x.png" alt="" style="width:496px;">
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-join" style="height: 600px;">
      <div class="twidth" style="width: 1080px;height: 600px;">
        <div class="join">
          <div class="left">
            <img src="..\assets\images\citypartners\yuansu.png" alt="">
          </div>
          <div class="form">
            <Joinform/>
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <Footer/>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import Joinform from '@/components/temple/Joinform'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'CityPartners',
  components: {
    Header,
    Banner,
    Joinform,
    Footer,
    videoPlayer
  },
  data() {
    return {
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
        poster: require('assets/images/citypartners/20181010170335.jpg'),
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
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-adv{
  width: 100%;
  background-image: url('../assets/images/citypartners/bg1@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.adv-wrod{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.item{
  width: 31%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 0.026667rem #76C81F;
  border-radius: 10px;
}
.a-icon{
  padding-top: 25px;
}
.a-icon img{
  width: 80%;
  height: auto;
}
.a-content{
  padding: 0px 50px;
  text-align: left;
}
.a-title{
  color: #1A6997;
  margin-bottom: 20px;
}
.a-word{
  line-height: 1.6;
  color: #666666;
}
.wrap-service{
  width: 100%;
  height: 850px;
  background-image: url('../assets/images/citypartners/bg2@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
ul, li{
  padding: 0px;
  margin: 0px;
}
.service-list{
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.service-list li{
  width: 25%;
}
.service-item p{
  color: #fff;
  font-size: 20px;
  padding-top: 20px;
}
.wrap-plan{
  width: 100%;
  height: 650px;
  background-image: url('../assets/images/citypartners/bg3@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.plan-list{
  height: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.plan-item img{
  height: auto;
}
.plan-item p{
  font-size: 20px;
  padding: 0px;
  margin: 0px;
}
.wrap-join{
  width: 100%;
  background-image: url('../assets/images/citypartners/bg4@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.join{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left{
  width: 60%;
  text-align: center;
}
.left img{
  width: 75%;
  height: auto;
}
.form{
  width: 30%;
}
</style>
