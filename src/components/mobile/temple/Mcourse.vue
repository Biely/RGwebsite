<template>
  <div class="container">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="level">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\course\step12@2x.png" alt="">
      </div>
      <div class="level-content mwidth">
        <p>RG.English為每一名學員提供量身定制的學習方案。專業的測評老師為您精准評測英語水準，清晰地定位您的學習起點，並根據您的真實英語水準，量身定制適合的課程。</p>
      </div>
      <div class="level-btn">
        <el-button type="primary" round>預約测试英語水準</el-button>
      </div>
    </div>
    <div class="fenjie">
      <div>
        <div v-transfer-dom>
          <previewer :list="imglist" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
        </div>
      </div>
      <div class="fenjie-bg mwidth">
        <img class="mwidth" src="..\..\..\assets\images\mobile\course\chart@2x.jpg" alt="" v-on:click="showimg(0)">
        <img class="previewer-demo-img" v-for="(item, index) in imglist" :key="index" src="..\..\..\assets\images\mobile\course\look@2x.png" @click="showimg(index)">
      </div>
    </div>
    <div class="fanan">
      <div class="bgimg">
        <img src="..\..\..\assets\images\mobile\course\bg2@2x.jpg" alt="">
        <div class="fanan-content">
          <p class="title">本次評估等級</p>
          <img src="..\..\..\assets\images\mobile\course\4@2x.png" alt="">
          <div class="word">
            <p>結果分析
              <span>詞彙是強項，語法較薄弱</span>
            </p>
            <p>學習目標
              <span>L8</span>
            </p>
            <p>學習方案
              <span>200節主修課+120節輔修課</span>
            </p>
            <p>學習建議
              <span>上課頻率每週2-3節</span>
            </p>
          </div>
        </div>
      </div>
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\course\step11@2x.png" alt="">
      </div>
    </div>
    <div class="jianjie">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\course\step1@2x.png" alt="">
      </div>
      <div class="jj-content">
        <div class="jj-left">
          <img src="..\..\..\assets\images\mobile\course\zoo@2x.png" alt="" @click="change(1)">
        </div>
        <div class="jj-right">
           <img class="tip" src="..\..\..\assets\images\mobile\course\tip@2x.png" alt="">
           <div class="tip-title">
             <p>適合學齡前</p>
             <p>4-6歲學員</p>
           </div>
           <p class="tip-word">以培養聽說為主，能看圖說話，在快樂中學習英語</p>
        </div>
      </div>
      <div class="jj-content ab1">
        <div class="jj-right pdl">
           <img class="tip" src="..\..\..\assets\images\mobile\course\tip@2x.png" alt="">
           <div class="tip-title">
             <p>7-9歲，適合</p>
             <p>1~3年級學員</p>
           </div>
           <p class="tip-word">跨學科學習，自然拼讀，建立多方面的英語思維能力。</p>
        </div>
        <div class="jj-left pdr">
          <img src="..\..\..\assets\images\mobile\course\shape@2x.png" alt="" @click="change(2)">
        </div>
      </div>
      <div class="jj-content ab2">
        <div class="jj-left">
          <img src="..\..\..\assets\images\mobile\course\happy@2x.png" alt="" @click="change(3)">
        </div>
        <div class="jj-right">
           <img class="tip" src="..\..\..\assets\images\mobile\course\tip@2x.png" alt="">
           <div class="tip-title">
             <p>10-12歲，適合</p>
             <p>4~6年級學員</p>
           </div>
           <p class="tip-word">學科、多主題學習，拓展思維擴散，提升閱讀及表達能力</p>
        </div>
      </div>
      <div class="jj-content ab3">
        <div class="jj-right pdl">
           <img class="tip" src="..\..\..\assets\images\mobile\course\tip@2x.png" alt="">
           <div class="tip-title">
             <p>13-15歲，適合</p>
             <p>初一~初三年級學員</p>
           </div>
           <p class="tip-word">跨學科學習，自然拼讀，建立多方面的英語思維能力。</p>
        </div>
        <div class="jj-left pdr">
          <img src="..\..\..\assets\images\mobile\course\life@2x.png" alt="" @click="change(4)">
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" hide-on-blur class="dialog-demo" :dialog-style="{'max-width': '90%', width: '90%'}">
        <div class="player" style="width:100%;margin:0 auto;">
          <video-player  class="video-player vjs-custom-skin"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="playerOptions"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
          >
          </video-player>
        </div>
        <div @click="showScrollBox=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Previewer, TransferDomDirective as TransferDom, XDialog } from 'vux'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'Mcourse',
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Previewer,
    TransferDom,
    videoPlayer,
    XDialog
  },
  data() {
    return {
      show: true,
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/course/Slogan@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/course/Slogan@2x.jpg'),
        title: ''
      }],
      imglist: [{
        msrc: require('../../../assets/images/mobile/course/chart@2x.jpg'),
        src: require('../../../assets/images/mobile/course/chart@2x.jpg'),
        w: 800,
        h: 400
      }],
      options: {
        getThumbBoundsFn (index) {
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          let rect = thumbnail.getBoundingClientRect()
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
        }
      },
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
      },
      showScrollBox: false
    }
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    showimg (index) {
      this.$refs.previewer.show(index)
      console.log('success')
    },
    change(id) {
      if (id === 1) {
        this.playerOptions.sources[0].src = 'https://stroage.rgenglish.net/K1.mp4'
      }
      if (id === 2) {
        this.playerOptions.sources[0].src = 'https://stroage.rgenglish.net/p3.mp4'
      }
      if (id === 3) {
        this.playerOptions.sources[0].src = 'https://stroage.rgenglish.net/p6.mp4'
      }
      if (id === 4) {
        this.playerOptions.sources[0].src = 'https://stroage.rgenglish.net/S1-S3.mp4'
      }
      this.showScrollBox = true
      this.$refs.videoPlayer.player.play()
    },
    handleClose(done) {
      this.showScrollBox = false
      this.$refs.videoPlayer.player.pause()
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
.level{
  padding-bottom: 50px;
}
.level-content{
  width: 80%;
  text-align: left;
  font-size: 25px;
  padding-bottom: 50px;
}
.el-button{
  background-image: url('../../../assets/images/button@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 50%;
  height: 60px;
  font-size: 24px;
  border-radius:35px;
}
.el-button:hover{
  background-image: url('../../../assets/images/button1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.fenjie{
  height: 500px;
  background: url('..\..\..\assets\images\mobile\course\bg1@2x.jpg') center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.fenjie-bg{
  position: relative;
  background: url('..\..\..\assets\images\mobile\course\bginner@2x.png') center no-repeat;
  background-size: 100% 100%;
  height: 450px;
  top: 25px;
  width: 95%;
  left: 0px;
  right: 0px;
}
.fenjie-bg img{
  position: absolute;
  top: 60px;
  width: 85%;
  height: auto;
  left: 0px;
  right: 0px;
}
.fenjie .previewer-demo-img{
  width: 20%;
  height: auto;
  position: absolute;
  top: 370px;
  left: 75%;
}
.fanan{
  height: 1200px;
  width: 100%;
  position: relative;
}
.bgimg{
  width: 100%;
  height: 1000px;
  position: absolute;
  bottom: 0px;
}
.bgimg img{
  width: 100%;
  height: 100%;
}
.fanan-content{
  width: 100%;
  position: absolute;
  top: 50px;
  color: #666666;
}
.fanan-content .title{
  font-size: 35px;
}
.fanan-content img{
  width: 40%;
  height: auto;
}
.word{
  width: 70%;
  margin: 0 auto;
  text-align: left;
  font-size: 28px;
  line-height: 1.8;
}
.word span{
  padding-left: 28px;
}
.jianjie{
  width: 100%;
  height: 1500px;
  background: url('..\..\..\assets\images\mobile\course\bg3@2x.jpg') center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.jj-content{
  width: 100%;
  display: flex;
  flex-direction: no-wrap;
  justify-content: space-between;
  align-items: center;
}
.jj-left{
  width: 55%;
}
.pdl{
  padding-left: 15px;
}
.pdr{
  padding-right: 15px;
}
.jj-left img{
  width: 95%;
  height: auto;
  margin: 0 auto;
}
.jj-right{
  width: 45%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  text-align: left;
}
.tip{
  width: 45%;
  height: auto;
  display: block;
}
.tip-title{
  font-size: 35px;
  font-weight: bold;
}
.tip-word{
  font-size: 25px;
  color: #666666;
}
.ab1{
  position: absolute;
  top: 525px;
}
.ab2{
  position: absolute;
  top: 850px;
}
.ab3{
  position: absolute;
  top: 1200px;
}
.dialog-demo{
  width: 100%;
}
</style>
