<!-- 游学 -->
<template>
  <div>
    <keep-alive>
      <Header/>
    </keep-alive>
    <div class="banner">
      <keep-alive>
        <Banner/>
      </keep-alive>
      <div class="wrap-dialog twidth" style="width: 1080px;">
        <div class="inner-dialog animated bounceInRight">
          <keep-alive>
            <DialogFrom/>
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="wrap-adv">
      <div class="inner twidth" style="width: 1080px;height: 2600px;">
        <div class="top-box tp50">
          <img src="..\assets\images\tour\title1.png" alt="">
        </div>
        <div class="block-video" style="height: 450px;">
          <div class="video" style="left: 5%;" @click="change()">
            <img src="..\assets\images\tour\left.png" alt="">
          </div>
          <div class="wrod" style="right: 5%;top: 150px;">
            <img src="..\assets\images\tour\right.png" alt="">
          </div>
        </div>
        <div class="top-box tp50">
          <img src="..\assets\images\tour\title2.png" alt="">
        </div>
        <div class="block-list" style="height: 1700px;">
           <img class="list" style="top: 200px;left: 450px;" src="..\assets\images\tour\list.png" alt="">
           <div class="front-img">
             <img src="..\assets\images\tour\img1.png" alt="" style="width:459px;height:305px;left:40px;">
             <div class="block-word" style="width:459px;height:305px;right:40px;">
               <p style="font-size:26px;padding:16px 0px;">浸入式英語課程</p>
               <p style="font-size:14px;line-height:24px;">入學考試分班，根據學生年齡和英語水準進行分班，小班化教學，每個班不超過12個人。
根據精心設計課程大綱，幫助不同階段的學習者提升在學習英語的自信心，關注並幫助學生提高交流流利程度及準確性，即：發言、語法、詞彙、
習語。學習英國文化歷史知識。在課堂學習外，會通過小組工作和個人講演等形式，在老師的指導下與各國學生共同學習。
純正道地的英式精英貴族教學，讓孩子們全天沉浸在英語的世界中，學習用英語去學習、思考、交流、表達！學生們同英國貴族頂級學府學子一樣聆聽精彩課程，接受老師悉心指導。</p>
             </div>
             <img src="..\assets\images\tour\img2.png" alt="" style="width:459px;height:305px;right:40px;top:350px;">
             <div class="block-word" style="width:459px;height:305px;left:40px;top:350px;">
               <p style="font-size:26px;padding:16px 0px;">延展式學習</p>
               <p style="font-size:14px;line-height:24px;">在學生準備即將到來的旅程前，老師會針對行程教授相關英語用語，並且，講述去參觀地方的歷史、人文、宗教背景。
在參觀的過程中，老師會給學生們佈置作業，會給學生們一個學習清單或問題清單等管道，讓學生們更加自主學習並深入的瞭解英倫文化！</p>
             </div>
             <img src="..\assets\images\tour\img3.png" alt="" style="width:459px;height:305px;left:40px;top:725px;">
             <div class="block-word" style="width:459px;height:305px;right:40px;top:725px;">
               <p style="font-size:26px;padding:16px 0px;">世界貴族頂級名校學生時光</p>
               <p style="font-size:14px;line-height:24px;">學生們全程入住斯托學院歷史悠久的百年學生宿舍，自由使用學院設施：無論是恣意奔放在寬闊的運動場還是觸摸沉澱千年智慧的圖書館；或是揮灑熱情的游泳池；設備先進且完善的多功能廳自由展示絢爛青春年華，都可以原汁原味地盡享彌足珍貴的頂級貴族名校學子時光。
</p>
             </div>
             <img src="..\assets\images\tour\img4.png" alt="" style="width:459px;height:305px;right:40px;top:1095px;">
             <div class="block-word" style="width:459px;height:305px;left:40px;top:1095px;">
               <p style="font-size:26px;padding:16px 0px;">品味英倫文化</p>
               <p style="font-size:14px;line-height:24px;">張弛有度的學習安排，老師們會親自帶領學生們領略英倫文化。遊覽劍橋大學一日遊，康河撐船，感受徐志摩詩中的劍橋浪漫。遊覽世界名校劍橋大學、牛津大學，感受頂級學府的魅力，由孩子自己零距離感悟！

</p>
             </div>
             <img src="..\assets\images\tour\img5.png" alt="" style="width:459px;height:305px;left:40px;top:1495px;">
             <div class="block-word" style="width:459px;height:305px;right:40px;top:1495px;">
               <p style="font-size:26px;padding:16px 0px;">交往世界朋友</p>
               <p style="font-size:14px;line-height:24px;">與來自世界各地的學生們在這裡齊聚一堂，共同歡度2018年盛夏時光，在百年英國頂級貴族學校中共同體驗、感受這彌足珍貴的學子光陰。英語成了唯一的交流用語，讓英語稱為孩子連結世界的橋樑，共同的學習、交流為來自不同國家的莘莘學子建立一生珍貴友誼。
</p>
             </div>
           </div>
        </div>
      </div>
    </div>
    <div class="wrap-sjx" style="height: 520px;">
      <div class="inner-sjx twidth" style="width: 1080px;">
        <img src="..\assets\images\tour\img6.png" alt="">
      </div>
    </div>
    <div class="wrap-dream" style="height: 1050px;">
      <div class="inner-dream" style="width: 1080px;">
        <div class="top-box">
          <img src="../assets/images/studyTour/top3@2x.png" alt="">
        </div>
        <img class="block-img" src="../assets/images/studyTour/story@2x.png" alt="">
        <div class="top-box">
          <img src="../assets/images/studyTour/top4@2x.png" alt="">
        </div>
        <img class="dream-ico" src="../assets/images/studyTour/ICO@2x.png" alt="">
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="70%" :before-close="handleClose" center>
      <div class="container">
        <div class="player">
          <video-player  class="video-player vjs-custom-skin"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="playerOptions"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
          >
          </video-player>
        </div>
      </div>
    </el-dialog>
    <keep-alive>
      <Footer/>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'Tour',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer,
    videoPlayer
  },
  data() {
    return {
      dialogVisible: false,
      playerOptions: {
        autoplay: true,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: 'http://p9bsw636s.bkt.clouddn.com/hwyx.mp4'
        }],
        poster: 'poster.jpg',
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
  methods: {
    change() {
      this.dialogVisible = true
      this.$refs.videoPlayer.player.play()
    },
    handleClose(done) {
      this.dialogVisible = false
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
.tp50{
  padding-top: 80px;
}
.top-box img{
  width: 50%;
}
.wrap-adv{
  width: 100%;
  background: url('..\assets\images\tour\YS@2x.jpg') center no-repeat;
  background-size: 100% 100%;
}
.block-list{
  width: 100%;
  position: relative;
}
.list{
  position: absolute;
  z-index: 1;
  height: 80%;
  width: auto;
}
.front-img{
  position: relative;
  z-index: 555;
}
.front-img img{
  position: absolute;
}
.block-word{
  position: absolute;
  color: #333333;
  text-align: justify;
}
.wrap-sjx{
  width: 100%;
  background: url('..\assets\images\tour\bg2@2x.jpg') center no-repeat;
  background-size: 100% 100%;
}
/* NOTE: dream */
.wrap-dream{
  height: 1250px;
  width: 100%;
  background: url('../assets/images/studyTour/bg3@2x.jpg') no-repeat center;
  background-size: 100% 100%;
}
.inner-dream{
  width: 1080px;
  height: 1250px;
  margin: 0 auto;
}
.inner-dream .block-img{
  width: 100%;
  height: auto;
}
.dream-ico{
  width: 100%;
  height: auto;
}
.block-video{
  width: 100%;
  position: relative;
}
.video, .wrod{
  width: 50%;
  position: absolute;
}
.video{
  z-index: 555;
}
.block-video img{
  width: 100%;
  height: auto;
}
.inner-sjx{
  padding: 50px;
}
.inner-sjx img{
  width: 100%;
  height: auto;
}
.video img:hover{
  background-color: #bababa2e;
}
.el-dialog__header, .el-dialog__body{
  background-color: #000 !important;
}
</style>
