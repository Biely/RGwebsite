<!-- MAD特色教學法 -->
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
    <div class="wrap-mad" style="height: 1800px;">
      <div class="inner-mad twidth" style="width: 1080px;">
        <div class="top-box">
          <img src="../assets/images/mad/step1@2x.png" alt="">
          <p>與藝術/音樂/戲劇相伴，英語學習不再枯燥</p>
        </div>
        <div class="slogan" style="right: 100px;top: 260px;">
          <transition :duration="{ enter: 1500, leave: 1500 }"
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated tada"
  >
          <img class="width100" v-if="show" src="..\assets\images\mad\Slogan@2x.png" alt="">
        </transition>
        </div>
        <div class="music-img" style="top: 360px;">
          <img class="width100" src="../assets/images/mad/music@2x.png" alt="">
        </div>
        <div class="music-word" style="top: 440px;">
          <img class="width100" src="../assets/images/mad/music.png" alt="">
        </div>
        <div class="art-word" style="top: 840px;">
          <img class="width100" src="../assets/images/mad/art.png" alt="">
        </div>
        <div class="art-img" style="top: 920px;">
          <img class="width100" src="../assets/images/mad/art@2x.png" alt="">
        </div>
        <div class="mrama-img" style="top: 1320px;">
          <img class="width100" src="../assets/images/mad/drama@2x.png" alt="">
        </div>
        <div class="mrama-word" style="top: 1400px;">
          <img class="width100" src="../assets/images/mad/mrama.png" alt="">
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
import DialogFrom from '@/components/temple/DialogFrom'

export default {
  name: 'Method',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    setTimer: function () {
      let that = this
      this.timer = setInterval(function() {
        that.show = !that.show
      }, 1500)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.setTimer()
    })
  },
  distroyed: function () {
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-mad{
  width: 100%;
  background: url('../assets/images/mad/bg@2x.jpg') center no-repeat;
  background-size: cover;
}
.top-box p{
  padding-top: 15px;
  font-size: 28px;
}
.inner-mad{
  position: relative;
}
.music-img{
  position: absolute;
  width: 50%;
  left: 5%;
  z-index: 555;
}
.music-word{
  position: absolute;
  width: 50%;
  top: 400px;
  right: 5%;
}
.art-word{
  position: absolute;
  width: 50%;
  top: 900px;
  left: 5%;
}
.width100{
  width: 100%;
}
.art-img{
  position: absolute;
  width: 50%;
  top: 1000px;
  right: 5%;
  z-index: 555;
}
.mrama-img{
  position: absolute;
  width: 50%;
  left: 5%;
  z-index: 555;
}
.mrama-word{
  position: absolute;
  width: 50%;
  right: 5%;
}
.slogan{
  width: 50%;
  position: absolute;
  z-index: 666;
}
</style>
