<!-- 雅际课程 -->
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
    <!-- <div class="wrap-level" style="height: 950px;">
      <div class="inner-level" style="width: 1080px;">
        <div class="top-box level-top-box">
          <img src="../assets/images/curriculun/step1@2x.png" alt="">
        </div>
      </div>
      <div class="inner-table" style="height: 800px;">
        <div class="table-box" style="width: 1080px;">
          <div class="test-box" style="width: 1080px;">
            <p class="left-title">RG.English為每一名營員提供量身定制的學習方案。專業的測評老師為您精准評測英語水準，清晰地定位您的學習起點，並根據您的真實英語水準，量身定制適合的課程。</p>
            <p class="right-title">預約測試英語水準<span><img src="../assets/images/curriculun/playbtn@2x.png" alt=""></span></p>
          </div>
          <div class="level-table" style="width: 1080px;">
            <img src="../assets/images/curriculun/table@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-plan" style="height: 720px;">
      <div class="top-box plan-top-box">
        <img src="../assets/images/curriculun/step2@2x.png" alt="">
      </div>
      <div class="inner-plan" style="height: 600px;">
        <div class="block-plan" style="height: 500px;width: 1080px;">
        </div>
      </div>
    </div> -->
    <div class="wrap-sys" style="height:1610px;">
      <div class="inner-sys twidth" style="width:1080px;">
        <div style="padding:50px 0px;">
          <img src="..\assets\images\course\step2@2x.png" alt="" style="width:450px;height:auto;">
        </div>
        <div class="sys-list" style="height:320px;">
          <div class="sys-item" style="width:320px;">
            <img src="..\assets\images\course\jc@2x.png" alt="" style="height:80px;width:auto;padding-top:40px;">
            <p class="title" style="font-size:22px;padding-top:30px;">基礎課程</p>
            <div class="w">
              <p class="word" style="font-size:16px;padding:0 10px;padding-top:10px;">RG根據學員的年齡和水平，分成四大基礎英語課程，共21個級別。外教通過教授基礎英語課程打好根基，提升英語的聽說讀寫水平</p>

            </div>
          </div>
          <div class="sys-item" style="width:320px;">
            <img src="..\assets\images\course\cs@2x.png" alt="" style="height:80px;width:auto;padding-top:40px;">
            <p class="title" style="font-size:22px;padding-top:30px;">應試英語</p>
            <div class="w">
              <p class="word" style="font-size:16px;padding:0 10px;padding-top:10px;">針對學員的具體英語考試目標，進行個性化的課程定制，可函括中考、高考、四六級、托福、GRE、雅思。SSAT、SAT、GMAT考試等等。</p>

            </div>
          </div>
          <div class="sys-item" style="width:320px;">
            <img src="..\assets\images\course\yy@2x.png" alt="" style="height:80px;width:auto;padding-top:40px;">
            <p class="title" style="font-size:22px;padding-top:30px;">應用英語</p>
            <div class="w">
              <p class="word" style="font-size:16px;padding:0 10px;padding-top:10px;">針對學員的具體英語應用目標，進行個性化的課程定制，可函括商務英語、職場英語、生活英語等等。</p>
            </div>
          </div>
        </div>
        <div style="padding:55px 0px;">
          <img src="..\assets\images\course\step1@2x.png" alt="" style="width:450px;height:auto;">
        </div>
      </div>
      <div class="sys-cs" style="height:180px;width:100%;">
        <div class="inner-cs" style="width:1080px;margin:0 auto;">
           <div class="left" style="width:450px;top:33px;left:50px;">
             <p style="font-size:16px;">RG.English為每一名學員提供量身定制的學習方案。專業的測評老師為您精准評測英語水準，清晰地定位您的學習起點，並根據您的真實英語水準，量身定制適合的課程。</p>
           </div>
           <div class="right" style="width:380px;bottom:48px;right:65px;">
             <p style="color:#fff;font-size:40px">預約測試英語水準</p>
             <img src="../assets/images/curriculun/playbtn@2x.png" alt="" style="width:55px;height:55px;"  @click="dialogFormVisible = true">
           </div>
        </div>
      </div>
      <div class="sys-level" style="width:1080px;margin:30px auto;height:600px;">
        <div class="sys-form" style="width:1000px">
          <img src="..\assets\images\course\list@2x.png" alt="" style="width:929px;height:245px;">
          <div class="sys-table" style="width:980px;height:280px;margin-right:15px;">
            <div class="sys-table-item bfc" style="height:42px;width:63px;margin: 3px 3px 3px 0px;;">
              <p style="font-size:16px;">對象</p>
            </div>
            <div class="sys-table-item bfc" style="height:42px;width:166px;margin: 3px">
              <p style="font-size:16px;">3-6歲 幼兒園</p>
            </div>
            <div class="sys-table-item bfc" style="height:42px;width:338px;margin: 3px;">
              <p style="font-size:16px;">7-12歲 小學</p>
            </div>
            <div class="sys-table-item bfc" style="height:42px;width:338px;margin: 3px;">
              <p style="font-size:16px;">13-18歲 初高中</p>
            </div>
            <div class="sys-table-item bfc" style="height:42px;width:50px;margin: 3px 0px 3px 3px;">
              <p style="font-size:16px;">成人</p>
            </div>
            <div class="sys-table-item bfc" style="height:42px;width:63px;margin: 3px 3px 3px 0px;;">
              <p style="font-size:16px;">教材</p>
            </div>
            <div class="sys-table-item bfg" style="height:42px;width:166px;margin: 3px;">
              <p style="font-size:14px;">RG Super Toys</p>
            </div>
            <div class="sys-table-item bfg" style="height:42px;width:338px;margin: 3px;">
              <p style="font-size:14px;">RG Step into English</p>
            </div>
            <div class="sys-table-item bfg" style="height:42px;width:166px;margin: 3px;">
              <p style="font-size:14px;">New Success</p>
            </div>
            <div class="sys-table-item bfg" style="height:42px;width:166px;margin: 3px;">
              <p style="font-size:14px;">New Success</p>
            </div>
            <div class="sys-table-item bfg" style="height:42px;width:50px;margin: 3px 0px 3px 3px;">
              <p style="font-size:14px;">定製</p>
            </div>
            <div class="sys-table-item bfc" style="height:178px;width:63px;margin:3px 3px 3px 0px;">
              <p style="font-size:16px;width: 32px;">對應水平</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:166px;margin: 3px;">
              <p style="font-size:14px;width: 110px;">培養英語學習興趣，掌握字母認知及字母發音。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:109px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">培養英語學習興趣，掌握字母認知及字母發音。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:109px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">能學會使用詞彙、句型，建立英語語法體系，自主閱讀簡單文章并能了解大意。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:108px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">通過M.A.D.多方面學習語言，表達一定難度的句型，能完成基本對話。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:109px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">自由閱讀較深的文章並能表達自己的意思，可以描述周圍的事物。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:109px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">熟悉事件的關鍵信息應對旅行中的大部分情況，在生活中可以陳述自己的觀點。
</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:108px;margin: 3px;">
              <p style="font-size:14px;width: 84px;">可以和英語母語人士流利溝通，獨立表達和書寫自己的觀點。</p>
            </div>
            <div class="sys-table-item bfg" style="height:178px;width:50px;margin: 3px 0px 3px 3px;">
              <p style="font-size:14px;width: 32px;">成人定製課程。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-intr" style="height: 2200px;">
      <div class="intr-top-box" style="padding-top: 80px;">
        <img src="../assets/images/curriculun/step3@2x.png" alt="" style="width:450px;height:auto;">
      </div>
      <div class="bc" style="height: 2000px;width: 100%;">
        <div class="blockw" style="height: 500px;">
        </div>
        <div class="blockb" style="height: 500px;">
        </div>
        <div class="blockw" style="height: 500px;">
        </div>
        <div class="blockb" style="height: 500px;">
        </div>
      </div>
      <div class="bg">
      </div>
      <div class="bt" style="height: 2000px;width: 1080px;top: 220px;">
        <div class="item" style="width: 1080px;height: 500px;">
          <div class="t-img" style="text-align: left;">
            <img src="..\assets\images\course\kk1.png" alt="">
          </div>
          <div class="content" style="height: 400px;">
            <div class="c-left tl">
              <img src="..\assets\images\course\i1@2x.png" alt="" style="height: 280px;width: auto;" @click="change(1)">
            </div>
            <div class="c-right tl" style="height: 280px;">
              <p class="title" style="font-size: 22px;">共112課時，420個單詞，24個主題</p>
              <div class="wrod" style="font-size: 16px;">
                <p>掌握字母表，能認識大小寫字母；</p>
                <p>熟悉常見詞彙；</p>
                <p>能說主題教學的詞彙及簡單對話；</p>
                <p>逐步接觸字母和發音的對應關係，逐步做到見詞能讀。</p>
              </div>
                <el-button type="primary" @click="change(1)" round>免費體驗外教課</el-button>
            </div>
          </div>
        </div>
        <div class="item" style="width: 1080px;height: 500px;">
          <div class="t-img" style="text-align: right;">
            <img src="..\assets\images\course\p.png" alt="">
          </div>
          <div class="content tl" style="height: 400px;">
            <div class="c-right" style="height: 280px;">
              <p class="title" style="font-size: 22px;">共125課時，632個單詞，30個主題，20個繪本閱讀</p>
              <div class="wrod" style="font-size: 16px;">
                <p>掌握字母表，能認識大小寫字母；</p>
                <p>熟悉常見詞彙；</p>
                <p>能說主題教學的詞彙及簡單對話；</p>
                <p>逐步接觸字母和發音的對應關係，逐步做到見詞能讀。</p>
              </div>
                <el-button type="primary" @click="change(2)" round>免費體驗外教課</el-button>
            </div>
            <div class="c-left tr">
              <img src="..\assets\images\course\i2@2x.png" alt="" style="height: 280px;width: auto;" @click="change(2)">
            </div>
          </div>
        </div>
        <div class="item" style="width: 1080px;height: 500px;">
          <div class="t-img" style="text-align: left;">
            <img src="..\assets\images\course\p4.png" alt="">
          </div>
          <div class="content" style="height: 400px;">
            <div class="c-left tl">
              <img src="..\assets\images\course\i3@2x.png" alt="" style="height: 280px;width: auto;" @click="change(3)">
            </div>
            <div class="c-right tl" style="height: 280px;">
              <p class="title" style="font-size: 22px;">共125課時，820個詞彙，30個主題，20個繪本閱讀</p>
              <div class="wrod" style="font-size: 16px;">
                <p>能够對比較常見的話題進行交流；通過深一層度的繪本及主題閱讀，擴大閱讀能力；提升閱讀的同時可以輕鬆寫出簡單的小段落。</p>
              </div>
                <el-button type="primary" @click="change(3)" round>免費體驗外教課</el-button>
            </div>
          </div>
        </div>
        <div class="item" style="width: 1080px;height: 500px;">
          <div class="t-img" style="text-align: right;">
            <img src="..\assets\images\course\s.png" alt="">
          </div>
          <div class="content" style="height: 400px;">
            <div class="c-right tl" style="height: 280px;">
              <p class="title" style="font-size: 25px;">共120課時，876個詞彙，18個學習主題</p>
              <div class="wrod" style="font-size: 16px;">
                <p>英語自由交流，獨立閱讀英語文章；能够寫出難度較大的英文段落。</p>
              </div>
                <el-button type="primary" @click="change(4)" round>免費體驗外教課</el-button>
            </div>
            <div class="c-left tr">
              <img src="..\assets\images\course\i4@2x.png" alt="" style="height: 280px;width: auto;" @click="change(4)">
            </div>
          </div>
        </div>
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
    <el-dialog :visible.sync="dialogFormVisible" :modal="false" width="280px" custom-class="dform" center>
      <DialogFrom/>
    </el-dialog>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import Footer from '@/components/temple/Footer'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'Course',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer,
    videoPlayer
  },
  data() {
    return {
      dialogFormVisible: false,
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
          src: ''
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
      this.dialogVisible = true
      this.$refs.videoPlayer.player.play()
    },
    showform() {
      this.dialogFormVisible = true
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

<style scoped>
.t-right{
  text-align: right;
}
.wrap-sys{
  width: 100%;
  background: url('..\assets\images\course\bg1@2x.jpg') no-repeat center;
  background-size: 100% 100%;
}
.sys-list{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sys-item{
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
.sys-item .title{
  color: #1a6997;
}
.sys-item .w{
  padding: 0px 35px;
  text-align: justify;
  line-height: 1.5;
  color: #666666;
}
.sys-cs{
  background: url('..\assets\images\course\test@2x.png') no-repeat center;
  background-size: 100% 100%;
}
.inner-cs{
  height: 100%;
  position: relative;
}
.inner-cs .left{
  position: absolute;
  text-align: left;
  color: #333333;
}
.inner-cs .right{
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.sys-level{
  background:rgba(255,255,255,0.85);
  box-shadow:7px 4px 38px 0px rgba(0,0,0,0.38);
  display: flex;
  align-items: center;
  justify-content: center;
}
.sys-level img{
  opacity:1;
}
.sys-form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.sys-table{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.sys-table-item{
  background-color: #f2f4f5;
  box-shadow:3px 4px 6px 0px rgba(0,0,0,0.19);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bfc{
  color: #09699B;
}
.bfg{
  color: #787878;
  text-align: justify;
}
.wrap-intr{
  width: 100%;
  position: relative;
}
.block-plan{
  background: url('../assets/images/curriculun/line@2x.png') no-repeat center;
  background-size: auto 100%;
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  z-index: 500;
}
.intr-top-box{
  position: relative;
}
.blockw{
  width: 100%;
}
.blockb{
  width: 100%;
  background-color: #f9fbfd;
}
.bg{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url('..\assets\images\course\bg@2x.png') center no-repeat;
  background-size: 100% 100%;
  z-index: 501;
}
.bc{
  position: relative;
  z-index: 500;
}
.bt{
  position: absolute;
  z-index: 666;
  height: 100%;
  left: 0px;
  right: 0px;
  margin: 0 auto;
}
.el-button{
  background-image: url('../assets/images/course/btn@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 220px;
  height: 50px;
  font-size: 24px;
  border-radius:30px;
}
.el-button:hover{
  background-image: url('../assets/images/home/btngreenhover.png');
}
.item{
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: 0 auto;
}
.t-img img{
  width: 50%;
  height: auto;
}
.content{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.c-left{
  width: 45%;
}
.c-right{
  width: 50%;
}
.tl{
  text-align: left;
}
.tr{
  text-align: right;
}
.wrap-intr .title{
  color: #1a6997;
  margin-bottom: 30px;
}
.wrod{
  width: 75%;
  line-height: 1.65;
  text-align: justify;
  margin-bottom: 50px;
}
</style>
