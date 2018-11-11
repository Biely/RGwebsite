<!-- 主題活動 -->
<template>
  <div>
    <Header/>
    <div class="banner">
      <Banner/>
      <div class="wrap-dialog twidth" style="width: 1080px;">
        <div class="inner-dialog animated bounceInRight">
          <DialogFrom/>
        </div>
      </div>
    </div>
    <div class="wrap-act1" style="height: 700px;">
      <div class="inner-act twidth" style="width: 1080px;">
        <div class="top-box">
          <img src="../assets/images/act/title.png" alt="">
        </div>
        <div class="info left5">
          <img src="../assets/images/act/i1@2x.png" alt="">
        </div>
        <div class="info right5" style="top: 300px;">
          <img src="../assets/images/act/info1@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="wrap-act2" style="height: 600px;">
      <div class="inner-act twidth" style="width: 1080px;height: 600px;">
        <div class="info-act right" style="top: 0px;">
          <img src="../assets/images/act/i2@2x.png" alt="">
        </div>
        <div class="info-act left" style="top: 150px;">
          <img src="../assets/images/act/info2@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="wrap-act3" style="height: 1200px;">
      <div class="inner-act twidth" style="width: 1080px;height: 1200px;">
        <div class="info-act right" style="top: 150px;">
          <img src="../assets/images/act/info3@2x.png" alt="">
        </div>
        <div class="info-act left" style="top: -50px;">
          <img src="../assets/images/act/i3@2x.png" alt="">
        </div>
        <div class="info-act left" style="bottom: 150px;">
          <img src="../assets/images/act/info4@2x.png" alt="">
        </div>
        <div class="info-act right" style="bottom: 40px;">
          <img src="../assets/images/act/i4@2x.png" alt="">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'

export default {
  name: 'Activities',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-act1{
  width: 100%;
  background: url('../assets/images/act/bg@2x_01.jpg') center no-repeat;
  background-size: 100% 100%;
}
.wrap-act2{
  width: 100%;
  background: url('../assets/images/act/bg@2x_02.jpg') center no-repeat;
  background-size: 100% 100%;
}
.wrap-act3{
  width: 100%;
  background: url('../assets/images/act/bg@2x_03.jpg') center no-repeat;
  background-size: 100% 100%;
}
.inner-act{
  position: relative;
}
.info{
  width: 50%;
  height: auto;
  position: absolute;
}
.info img{
  width: 100%;
}
.info-act img{
  width: 100%;
}
.left5{
  left: 5%;
  z-index: 555;
}
.right5{
  right: 5%
}
.info-act{
  width: 45%;
  height: auto;
  position: absolute;
}
.left{
  left: 5%;
}
.right{
  right: 5%;
}
</style>
