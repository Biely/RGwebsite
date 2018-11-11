<!-- 名校游学 -->
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
    <div class="wrap-virtue" style="height: 1150px;">
      <div class="inner-virtue" style="width: 1080px;">
        <div class="top-img">
          <img src="../assets/images/studyTour/top1@2x.png" alt="">
        </div>
        <div class="virtue-block" style="height: 500px;">
          <div class="virtue-video">
            <img src="../assets/images/studyTour/video@2x.png" alt="">
          </div>
          <div class="virtue-adv" style="height: 360px;">
            <div class="virtue-wrod" style="width: 430px;">
              <p class="virtue-title" style="font-size: 30px;">助力未來人生規劃</p>
              <p class="virtue-subtitle" style="font-size: 18px;">置身全球知名学府的课堂和校园，从课程学习、校园生活体验、大学社交文化体验等多方面感受世界名校氛围和教育理念。收获官方学习证书，了解名校入学申请、面试技巧、奖学金申请等一手丰富信息，为留学做充足准备。</p>
            </div>
          </div>
        </div>
        <div class="top-img pd100">
          <img src="../assets/images/studyTour/top2@2x.png" alt="">
        </div>
        <div class="virtue-flex">
          <ul>
            <li class="left-wrod">
             <div class="left-tiem">
               <p class="item-title">收獲官方學習或項目證書</p>
               <p class="item-subtitle">參與國際組織或世界名校的領導力項目或課程，收獲官方機構認證頒發的培訓證書</p>
             </div>
             <div class="left-tiem">
               <p class="item-title">助力未來人生規劃</p>
               <p class="item-subtitle">通過領導力課程和項目進壹步認識自己的優勢和缺點，啟迪未來人生方向</p>
             </div>
            </li>
            <li>
              <img src="../assets/images/studyTour/4ico@2x.png" alt="">
            </li>
            <li class="right-wrod">
              <div class="right-tiem">
                <p class="item-title">收獲官方學習或項目證書</p>
                <p class="item-subtitle">參與國際組織或世界名校的領導力項目或課程，收獲官方機構認證頒發的培訓證書</p>
              </div>
              <div class="right-tiem">
                <p class="item-title">助力未來人生規劃</p>
                <p class="item-subtitle">通過領導力課程和項目進壹步認識自己的優勢和缺點，啟迪未來人生方向</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="wrap-story" style="height: 650px;">
      <div class="inner-story" style="width: 1080px;">
        <div class="story-wj" style="top: 80px;">
          <img src="../assets/images/studyTour/wj@2x.png" alt="" style="height: 510px;">
        </div>
        <div class="story-content" style="height: 495px;width: 440px;">
          <div class="story-wrod" style="width: 350px;height: 350px;font-size: 16px;line-height: 1.7;">
            <p>在12 年的游学征途中，雅際国际游学在中国大陆本土建立起了51 个服务网络，同时将服务范围延伸至海外，在美国洛杉矶及英国伦敦设立了海外独立自主营地，为更多的学生提供优质的游学教育服务。</p>
            <p>雅際国际游学与诸多全球高端优质教育资源建立了战略合作关系，包括世界权威英语联盟English UK 认证、美国RusticPathways 公益服务战略合作、联合国青年大会代表团授权招募、哈佛大学领导力夏训营官方合作、康奈尔大学国际辩论赛战略伙伴等，携手世界顶尖教育资源为学生打造行走中的世界课堂。</p>
          </div>
          <div class="story-btn">
            <el-button type="primary" style="width: 200px;height: 45px;font-size: 18px;" round>瞭解更多</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-dream" style="height: 1050px;">
      <div class="inner-dream" style="width: 1080px;">
        <div class="top-img">
          <img src="../assets/images/studyTour/top3@2x.png" alt="">
        </div>
        <img class="block-img" src="../assets/images/studyTour/story@2x.png" alt="">
        <div class="top-img">
          <img src="../assets/images/studyTour/top4@2x.png" alt="">
        </div>
        <img class="dream-ico" src="../assets/images/studyTour/ICO@2x.png" alt="">
      </div>
    </div>
    <keep-alive>
      <Footer/>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import Footer from '@/components/temple/Footer'

export default {
  name: 'StudyTour',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer
  }
}
</script>

<style scoped>
.wrap-virtue{
  width: 100%;
  height: 1400px;
  background-image: url('../assets/images/studyTour/bg1@2x.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.inner-virtue{
  width: 1080px;
  margin: 0 auto;
}
.top-img{
  padding-top: 80px;
  padding-bottom: 50px;
}
.top-img img{
  width: 744px;
}
.virtue-block{
  width: 100%;
  height: 500px;
  position: relative;
}
.virtue-video{
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 555;
  width: 55%;
}
.virtue-video img{

}
.virtue-adv{
  position: absolute;
  height: 360px;
  width: 55%;
  background-image: url('../assets/images/studyTour/Corefeatures@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 40px;
  right: 0px;
}
.virtue-wrod{
  text-align: left;
  width: 420px;
  position: absolute;
  right: 50px;
  bottom: 50px;
}
.virtue-wrod .virtue-title{
  font-size: 35px;
}
.virtue-wrod .virtue-subtitle{
  padding-top: 20px;
  font-size: 18px;
}
.pd100{
  padding-top: 50px;
}
.virtue-flex ul{
  height: 291px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  color: #fff;
  margin: 0px;
}
ul, li{
  padding: 0px;
  margin: 0px;
}
.virtue-flex{
  padding-top: 20px;
}
.virtue-flex img{
  height: 280px;
  width: auto;
}
.left-wrod{
  width: 35%;
  height: 290px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  text-align: right;
  justify-content: space-between;
}
.left-tiem{
  height: 50%;
}
.item-title{
  font-size: 28px;
  letter-spacing: 1px;
}
.item-subtitle{
  font-size: 18px;
  line-height: 1.7;
}
.right-wrod{
  width: 35%;
  height: 290px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  text-align: left;
  justify-content: space-between;
}
.right-tiem{
  height: 50%;
}
/* NOTE:  */
.wrap-story{
  width: 100%;
  height: 650px;
  background-image: url('../assets/images/studyTour/bg2@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.inner-story{
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.story-wj{
  position: absolute;
  left: 0px;
  top: 50px;
}
.story-wj img{
  height: 510px;
}
.story-content{
  height: 495px;
  width: 440px;
  background-image: url('../assets/images/studyTour/storybg@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0px;
  top: -80px;
}
.story-wrod{
  width: 350px;
  height: 350px;
  padding-top: 50px;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  padding-bottom: 20px;
}
.story-wrod p{
  padding-bottom: 18px;
}
.story-btn .el-button{
  background-image: url('../assets/images/button@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius:35px;
}
.story-btn .el-button:hover{
  background-image: url('../assets/images/button1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* NOTE:  */
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
</style>
