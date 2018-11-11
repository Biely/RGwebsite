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
    <div class="wrap-level" style="height: 950px;">
      <div class="inner-level" style="width: 1080px;">
        <div class="top-box level-top-box">
          <img src="../assets/images/curriculun/step1@2x.png" alt="">
        </div>
      </div>
      <div class="inner-table" style="height: 800px;">
        <div class="table-box" style="width: 1080px;">
          <div class="test-box" style="width: 1080px;">
            <p class="left-title">RG.English為每一名學員提供量身定制的學習方案。專業的測評老師為您精准評測英語水準，清晰地定位您的學習起點，並根據您的真實英語水準，量身定制適合的課程。</p>
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
    </div>
    <div class="wrap-intr" style="height: 1290px;">
      <div class="top-box intr-top-box">
        <img src="../assets/images/curriculun/step3@2x.png" alt="">
      </div>
      <div class="inner-intr intr-top-box">
        <div class="intr-content" style="width: 1080px;height: 1045px;">
          <img class="intr-k1" src="../assets/images/curriculun/K1@2x.png" alt="">
          <img class="intr-p1" src="../assets/images/curriculun/P1@2x.png" alt="">
          <img class="intr-s1" src="../assets/images/curriculun/S1@2x.png" alt="">
          <img class="intr-s7" src="../assets/images/curriculun/S7@2x.png" alt="">
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
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import Footer from '@/components/temple/Footer'

export default {
  name: 'Curriculun',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer
  }
}
</script>

<style scoped>
.wrap-level{
  height: 1050px;
  background-color: #fff;
}
.inner-level{
  width: 1080px;
  margin: 0 auto;
}
.top-box{
  padding-top: 80px;
  padding-bottom: 50px
}
.top-box img{
  width: 458px;
  height: auto;
}
.inner-table{
  width: 100%;
  height: 850px;
  background-image: url('../assets/images/curriculun/step1bg1@2x.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.table-box{
  width: 1080px;
  height: 850px;
  margin: 0 auto;
}
.test-box{
  position: relative;
  width: 1080px;
  height: 200px;
}
.left-title{
  position: absolute;
  width: 45%;
  font-size: 22px;
  height: auto;
  text-align: left;
  top: 40px;
}
.right-title{
  position: absolute;
  width: 50%;
  font-size: 28px;
  right: 300px;
  bottom: 10px;
  color: #fff;
  text-align: right;
  display: block;
  letter-spacing: 2px;
}
.right-title span{
  display: inline-block;
  vertical-align: middle;
  line-height: 1
}
.right-title img{
  width: 60px;
  height: auto;
  display: inline-block;
}
.level-table{
  width: 1080px;
  height: 500px;
  margin: 0 auto;
}
.level-table img{
  width: 100%;
  height: auto;
}
.wrap-plan{
  width: 100%;
  height: 920px;
}
.plan-top-box{
  position: relative;
  bottom: -50px;
  z-index: 500;
}
.inner-plan{
  width: 100%;
  height: 780px;
  background-image: url('../assets/images/curriculun/background@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -50px;
}
.wrap-intr{
  width: 100%;
  height: 1790px;
}
.inner-intr{
  width: 100%;
  height: 1450px;
  background-image: url('../assets/images/curriculun/step3bg@2x.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: -50px;
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
  padding-top: 120px;
}
.intr-content{
  width: 1080px;
  height: 1450px;
  margin: 0 auto;
  position: relative;
}
.intr-k1{
  position: absolute;
  left: 200px;
  top: -80px;
}
.intr-p1{
  position: absolute;
  right: 200px;
  top: 340px;
}
.intr-s1{
  position: absolute;
  left: 200px;
  top: 690px;
}
.intr-s7{
  position: absolute;
  left: 100px;
  bottom: 50px;
}
</style>
