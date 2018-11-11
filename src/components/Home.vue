<!-- 首页 -->
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
    <div class="wrap-intr-block" style="height:450px;">
      <div class="twidth" style="width: 1080px;height:300px;">
        <ul class="intr-block">
          <li class="intr-block-item">
            <img class="animated bounceIn" src="../assets/images/home/icon1@2x.png" alt="">
            <div class="item-word">
              <p class="word-title">精品教學</p><p class="word-subtitle">足不出戶就可體驗原汁原味的美式/英式課堂。 插入遊戲、音樂和藝術等趣味性課程，讓孩子學起地道英語。</p>
            </div>
          </li>
          <li class="intr-block-item">
            <img class="animated bounceIn" src="../assets/images/home/icon2@2x.png" alt="">
            <div class="item-word">
              <p class="word-title">上門授課</p><p class="word-subtitle">上英語培訓班，您和孩子耗費了多少時間精力？上課地點不受限，隨處都是英語課堂。</p>
            </div>
          </li>
          <li class="intr-block-item">
            <img class="animated bounceIn" src="../assets/images/home/icon3@2x.png" alt="">
            <div class="item-word">
              <p class="word-title">隨定隨上</p><p class="word-subtitle">自主選擇上門授課時間，學員可自由選擇喜好的外教，隨時定隨時上。</p>
            </div>
          </li>
          <li class="intr-block-item">
            <img class="animated bounceIn" src="../assets/images/home/icon4@2x.png" alt="">
            <div class="item-word">
              <p class="word-title">社群輔導</p><p class="word-subtitle">中教雙語輔導師定期每週社群輔導，協助孩子完成課前預習，課後複習，家庭作業等鞏固性學習。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-video" style="height: 540px;">
      <div class="twidth" style="width: 1080px;">
        <ul class="video-block">
          <li class="block-item">
            <ul class="video-item-container">
              <li>
                <img src="..\assets\images\home\lefttop.png" alt="">
              </li>
              <li class="word" style="width:442px;height:120px;font-size:14px;line-height:22px;padding-top:5px;padding-bottom:10px;">
                <p>我們的外教師資85%來自英美等母語國家。<br>經過美國招聘主管的嚴格面試和3輪以上的層層篩選，確保每一位外教都懂教育、愛孩子。<br>
最終到崗的外教不但獲得TESOL/TEFL證書，並且擁有2年以上少兒英語教育經驗。<br>
不僅是優秀的語言老師，同時也是多才多藝的生活老師。</p>
              </li>
              <li class="video-button">
                <el-button type="primary" style="font-size: 20px;" @click="dialogFormVisible = true" round>免費體驗</el-button>
              </li>
            </ul>
          </li>
          <li class="block-item video-content">
            <img src="../assets/images/home/videobg@2x.png" alt="" style="height:420px;">
            <div class="video-play">
              <Vbanner/>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-learnsys" style="height: 600px;">
      <div class="inner-learnsys" style="width: 1080px;">
        <div class="animated bounceInDown">
           <img src="..\assets\images\home\tese.png" alt="" style="width: 475px;padding-top:37px;">
        </div>
        <div class="learnsys-content">
           <div class="learnsys-lx" style="height:350px;margin-top:65px;">
           </div>
           <img src="..\assets\images\home\w1.png" alt="" style="height:42px;width:auto;top: 12px;left: 115px;">
           <img src="..\assets\images\home\w2.png" alt="" style="height:61px;width:auto;top:122px;left:32px;">
           <img src="..\assets\images\home\w3.png" alt="" style="height:61px;width:auto;top:7px;right:-32px;">
           <img src="..\assets\images\home\w4.png" alt="" style="height:61px;width:auto;top:123px;right:-18px;">
           <img src="..\assets\images\home\w5.png" alt="" style="height:61px;width:auto;top:265px;left:95px;">
        </div>
      </div>
    </div>
    <div class="wrap-plan" style="height:1200px">
      <div class="inner-plan twidth" style="width:1080px;">
        <div class="twidth">
          <img src="..\assets\images\home\moth.png" alt="" style="width:560px;height:auto;padding-top:78px;">
        </div>
        <div class="p-xiegan">
          <img src="..\assets\images\home\xiegan.png" alt="" style="padding-top:50px;width:auto;height:350px;">
        </div>
        <div class="p-phone" style="height:500px;width:1080px;padding-top:70px;">
          <div class="p-left">
            <img src="..\assets\images\home\phone.png" alt="">
          </div>
          <div class="p-right" style="height:500px;">
            <div class="p-block-item" style="width:427px;margin-bottom:50px;">
              <p style="font-size:20px;padding:11px;text-shadow:2px 2px 8px #0cff00;">Online  System趣味線上直播系統</p>
              <div class="p-word" style="font-size:14px;width:427px;height:108px;line-height:25px;border-top:2px solid rgb(255, 255, 255, 0.7);border-left:2px solid rgb(255, 255, 255, 0.7);box-shadow:-3px -3px 2px rgb(12, 255, 0, 0.2);">
                <p style="padding:11px;text-shadow:2px 2px 8px #0cff00;">外教實时直播24小時不“打烊”，既可與外教即時互動式學習，也可隨時隨地與外教嘮嗑日常。外教直播互動授課模式，打破場景限制，讓閑時輕鬆吸收英語文化。</p>
              </div>
            </div>
            <div class="p-block-item" style="width:427px;margin-bottom:50px;">
              <p style="font-size:20px;padding:11px;text-shadow:2px 2px 8px #0cff00;">Professional System智能約課上門系統</p>
              <div class="p-word" style="font-size:14px;width:427px;height:108px;line-height:25px;border-top:2px solid rgb(255, 255, 255, 0.7);border-left:2px solid rgb(255, 255, 255, 0.7);box-shadow:-3px -3px 2px rgb(12, 255, 0, 0.2);">
                <p style="padding:11px;text-shadow:2px 2px 8px #0cff00;">互聯網+全職外教上門授課，輕鬆選擇合適的外教，我們的課堂可以在咖啡廳、西餐廳、客廳、社區花園、公園…與外教在不同環境中營造本土式語言環境。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="plan-btn">
          <el-button type="primary" round>免費體驗</el-button>
        </div> -->
      </div>
    </div>
    <div class="wrap-adv1" style="height: 450px;">
      <div class="inner-adv1" style="width: 1080px;height: 450px;">
        <div class="adv1-btn" style="left: 200px;bottom: 80px;">
          <el-button type="primary" @click="dialogFormVisible = true" round>免費體驗</el-button>
        </div>
      </div>
    </div>
    <div class="wrap-adv2" style="height: 450px;">
      <div class="img-adv2">
      </div>
      <!-- <img class="img-adv2" src="../assets/images/home/wj@2x.png" alt="" style="height: 450px;"> -->
      <div class="inner-adv2" style="width: 1080px;height: 450px;">
        <div class="adv2-wrod" style="right: 30px;top:100px;">
          <img src="..\assets\images\home\parents.png" alt="" style="width:535px;">
          <div class="adv2-btn">
            <el-button type="primary" @click="dialogFormVisible = true" round>免費體驗</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-rg">
      <div class="inner-rg" style="width: 1080px;">
        <img src="../assets/images/home/TOPLOGO@2x.png" alt="">
        <div class="rg-wrod">
          <p>創建於2015年3月，現時擁有資深外教500+，企業已在香港駐紮了穩固的基礎。<br/>
全新英語教學模式，已為3000+名學員提供外教上門授課服務，線上直播系統已超過10000+人收看，<br/>
已與數十間知名企業合作進行企業文化拓展，各分店會員咖啡室已成為超1000+人的商務洽淡、上課地點。</p>
        </div>
      </div>
    </div>
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
import Vbanner from '@/components/temple/Vbanner'
export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    DialogFrom,
    Vbanner,
    Footer
  },
  data() {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
    showform() {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped>
ul{
  padding-left: 0px;
}
/* NOTE:  */
.wrap-intr-block{
  height: 560px;
  width: 100%;
  background: url('../assets/images/home/blockbg.jpg') center;
  background-size: cover;
  display: flex;
  align-items:center;
  text-align: left;
}
.twidth{
  height: auto;
}
.intr-block{
  height: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items:center;
}
.intr-block-item{
  display: block;
  width: 25%;
  text-align: left;
  height: 400px;
}
.intr-block-item .item-word{
  padding: 0 10px;
}
.item-word p{
  padding: 10px 0px;
}
.intr-block-item img{
  height: 200px;
  width: auto;
}
.intr-block-item .word-title{
  font-size:30px;
  color:rgba(26,105,151,1);
}
.intr-block-item .word-subtitle{
  width: 85%;
  text-align: justify;
  font-size:18px;
  color:rgba(128,128,128,1);
  display: block;
  margin-top: 0px;
  line-height: 1.65;
}
/* NOTE:  */
.wrap-video{
  width: 100%;
  background: url('../assets/images/home/videobg@2x.jpg') center;
  background-size: cover;
  display: flex;
  align-items:center;
}
.video-block{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items:center;
}
.block-item{
  width: 50%;
  height: auto;
}
.video-block li img{
  width: 100%;
}
.video-btn{
  font-size:30px;
  font-family:PingFangSC-Bold;
  color:rgba(255,255,255,1);
  width:238px;
  height:55px;
  background:rgba(0,0,0,1);
  border-radius:28px;
  box-shadow:6px 0px 0px rgba(0,0,0,0.32);
}
.video-item-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  align-items: center;
}
.video-inner-item{
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  font-size: 25px;
  padding-top: 15px;
}
.video-item-container .word{
  font-family:PingFangSC-Bold;
  color:rgba(255,255,255,1);
  text-align: justify;
  text-shadow: 0.1em 0.1em 0.1em rgba(228,236,23,0.5);
}
.video-inner-item p{
  margin: 0px;
}
.video-button .el-button{
  width: 250px;
  height: 60px;
  text-shadow:2px 2px 8px #000000;
  background-image: url('../assets/images/button1@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: #1A6997; */
  box-shadow:-5px 5px 5px rgba(0,0,0,0.32);
  border: #fff;
  margin-top: 25px;
  border-radius:28px;
}
.video-content{
  position: relative;
}
.video-play{
  position: absolute;
  left: -5px;
  top: 3px;
  bottom: 0px;
  width: 95%;
  margin-top: 20px;
}
/* NOTE:  */
.wrap-learnsys{
  background-color: #f6f6f6;
  background-image: url('../assets/images/home/fbg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.inner-learnsys{
  height: 100%;
  margin: 0 auto;
}
.learnsys-content{
  width: 100%;
  position: relative;
}
.learnsys-lx{
  width: 45%;
  margin: 0 auto;
  background: url('..\assets\images\home\RGENGLISH.png') no-repeat center;
  background-size: contain;
}
.learnsys-content img{
  position: absolute;
}
/* NOTE:  */
.wrap-plan{
  width: 100%;
  background-color: #000000;
  color: #fff;
  background: url('../assets/images/home/b2d6a139fe84a58ccd7bcae1fb78d0dd.jpg') center no-repeat;
  background-size: cover;
}
.inner-plan{
  width: 100%;
}
.p-phone{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.p-left{
  width: 50%;
}
.p-left img{
  width: 100%;
  height: auto;
}
.p-right{
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
.p-block-item{

}
.p-word{
  color:#D1D1D1;
}
/* NOTE:  */
.wrap-adv1{
  height: 540px;
  width: 100%;
  background-image: url('../assets/images/home/advbg1@2x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
  color: #fff;
}
.inner-adv1{
  width: 1080px;
  height: 540px;
  position: relative;
  margin: 0 auto;
  background-image: url('..\assets\images\home\teacher.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
}
.wrap-adv2{
  height: 540px;
  width: 100%;
  background-image: url('../assets/images/home/advbg@2x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
  color: #fff;
  position: relative;
}
.img-adv2{
   display: block;
   text-align: left;
   width: auto;
   position: relative;
   top: 0px;
   width: 50%;
   height: 100%;
   background: url('../assets/images/home/wj@2x.png') right no-repeat;
   background-size: cover;
}
.inner-adv2{
  width: 1080px;
  height: 540px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: 0 auto;
}
.inner-adv1 p{
  padding: 0px;
  margin: 0px;
}
.inner-adv2 p{
  padding: 0px;
  margin: 0px;
}
.adv1-title{
  font-size: 44px;
  position: absolute;
  left: 70px;
  top:30px;
}
.adv1-subtitle{
  font-size: 20px;
  position: absolute;
  left: 70px;
  top: 200px;
}
.adv1-btn{
  position: absolute;
  left: 150px;
  bottom: 60px;
}
.adv1-btn .el-button{
  background-image: url('../assets/images/button@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 250px;
  height: 60px;
  font-size: 24px;
  border-radius:35px;
  text-shadow:2px 2px 8px #000000;
  border: none !important;
  box-shadow: 0.05rem 2.5px 0 rgba(0,0,0,0.18);
}
.adv1-btn .el-button:hover{
  background-image: url('../assets/images/button1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.adv2-wrod{
  width: 50%;
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.adv2-wrod img{
  width: 75%;
  height: auto;
}
.adv2-subtitle{
  font-size: 20px;
  position: absolute;
  right: -30px;
  top: 320px;
}
.adv2-btn{
  padding-left: 100px;
  padding-top: 80px;
}
.adv2-btn .el-button{
  background-image: url('../assets/images/button@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 250px;
  height: 60px;
  font-size: 24px;
  border-radius:35px;
  text-shadow:2px 2px 8px #000000;
  border: none !important;
  box-shadow: 0.05rem 2.5px 0 rgba(0,0,0,0.18);
}
.adv2-btn .el-button:hover{
  background-image: url('../assets/images/button1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* NOTE:  */
.wrap-rg{
  background-color: #f7f7f7;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
}
.inner-rg{
  margin: 0 auto;
}
.rg-wrod{
  padding-top: 40px;
}
.rg-wrod p{
  font-size: 25px;
  padding-top: 15px;
  line-height: 1.6;
  text-align: center;
}
</style>
