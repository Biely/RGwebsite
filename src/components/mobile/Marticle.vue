<template>
  <div class="mobile">
    <div class="header">
      <a href="/web">
      <div class="header-content">
        <div class="header-btn">
          <img src="..\..\assets\images\mobile\index\menu.png" alt="">
        </div>
        <div class="toplogo twidth">
        </div>
      </div>
      </a>
    </div>
    <div class="temp">
      <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
      <div class="t-content mwidth">
        <div v-if="isok === 'ok'">
          <div class="title">
            <p>{{ title }}</p>
            <p class="time">{{ time }}</p>
          </div>
          <div class="descr">
            <p>{{ descr }}</p>
          </div>
          <div class="content">
            <div v-html="content"></div>
          </div>
        </div>
        <div v-else>
          {{content}}
        </div>
      </div>
      <div class="footer">
        <p>雅际教育科技（广州）有限公司</p>
          <p>RG  Education  Technology (guangzhou) co.,</p>
        <p>LTD 粤ICP备18052197号</p>
      </div>
    </div>
  </div>

</template>

<script scoped>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Marticle',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../assets/images/mobile/about/bannerMAD@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../assets/images/mobile/about/bannerMAD@2x.jpg'),
        title: ''
      }],
      title: '',
      time: '',
      descr: '',
      content: '暂无内容',
      isok: ''
    }
  },
  created() {
    this.$http.get('http://weback.rgenglish.net/api/getone', {
      params: {
        id: this.$route.params.id
      }
    }).then((res) => {
      this.isok = res.data.message
      if (this.isok === 'ok') {
        this.title = res.data.data.title
        this.time = res.data.data.created_at
        this.descr = res.data.data.descr
        this.content = res.data.data.content
      } else {
        this.content = res.data.data
      }
    })
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot');
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.woff') format('woff'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.svg#iconfont') format('svg');
}
html,body,#app, .mobile{
  height: 100%;
  width: 100%;
  position: relative;
}
ul, li{
  margin: 0px;
  padding: 0px;
}
.nav{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 18px;
}
.header{
  width: 100%;
  height: 120px;
  position: relative;
  z-index: 999;
}
.header-content{
  position: fixed;
  width: 100%;
  height: 120px;
  top: 0px;
  background-color: #EEEEEE;
}
.header-btn{
  width: 120px;
  height: 120px;
  position: fixed;
  top: 0px;
  left: 0px;
}
.header-btn img{
  width: 74px;
  height: 61px;
  margin: 0 auto;
  margin-top: 25px;
}
.temp{
  position: absolute;
  top: 0px;
  padding-top: 120px;
  width: 100%;
}
.footer{
  height: 150px;
  width: 100%;
  padding-top: 50px;
  background-color: #F7F7F7;
}
.footer p{
  font-family: 'vux-demo';
  text-align: center;
  color: #666666;
}
.toplogo{
  width: 50%;
  height: 100%;
  background: url('..\..\assets\images\mobile\index\logo.png') center no-repeat;
  background-size: contain;
}
.t-content{
  width: 90%;
  padding-top: 50px;
  text-align: justify;
  font-size: 28px;
  line-height: 1.8;
}
.title{
  font-size: 30px;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.time{
  font-size: 20px;
  color: #000;
}
.descr{
  font-style: oblique;
  font-weight: 400;
  text-indent: 50px;
}
</style>
