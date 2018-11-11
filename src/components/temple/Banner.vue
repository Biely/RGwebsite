<template>
 <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <!-- <swiper-slide>
      <img src="../assets/images/curriculun/banner.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/studyTour/banner.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/home/banner@2x.png" alt="">
    </swiper-slide> -->
    <!-- Optional controls -->
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  data() {
    return {
      swiperOption: {
        autoplay: {
          enabled: true,
          disableOnInteraction: false,
          delay: 5000
        },
        fadeEffect: {
          crossFade: false
        },
        loop: true,
        autoHeight: true
      },
      swiperSlides: [],
      indeximg: [
        require('../../assets/images/banner/home1@2x.jpg'),
        require('../../assets/images/banner/home2@2x.jpg'),
        require('../../assets/images/banner/home3@2x.jpg'),
        require('../../assets/images/banner/home4@2x.jpg'),
        require('../../assets/images/banner/home5@2x.jpg'),
        require('../../assets/images/banner/home6@2x.jpg')
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created: function() {
    this.routePath()
  },
  methods: {
    routePath() {
      if (this.$route.name === '首页' || this.$route.name === '文章') {
        this.swiperSlides = this.indeximg
        return this.swiperSlides
      } else if (this.$route.name === '分阶课程') {
        return this.swiperSlides.push(require('../../assets/images/banner/bannerfenjie@2x.jpg'))
      } else if (this.$route.name === '主题活动') {
        return this.swiperSlides.push(require('../../assets/images/banner/active@2x.jpg'))
      } else if (this.$route.name === '名校游学') {
        return this.swiperSlides.push(require('../../assets/images/studyTour/banner.jpg'))
      } else if (this.$route.name === '关于我们' || this.$route.name === '企业介绍' || this.$route.name === '精英招聘' || this.$route.name === '在线地图' || this.$route.name === '新闻动态') {
        return this.swiperSlides.push(require('../../assets/images/banner/about@2x.jpg'))
      } else if (this.$route.name === '城市合伙人') {
        return this.swiperSlides.push(require('../../assets/images/banner/bannerhzuol@2x.jpg'))
      } else if (this.$route.name === '企业合作') {
        return this.swiperSlides.push(require('../../assets/images/banner/qypx@2x.jpg'))
      } else if (this.$route.name === '外教派遣') {
        return this.swiperSlides.push(require('../../assets/images/send/banner.jpg'))
      } else if (this.$route.name === '社区合伙人') {
        return this.swiperSlides.push(require('../../assets/images/banner/bannerhehuoren@2x.jpg'))
      } else if (this.$route.name === 'MAD教学') {
        return this.swiperSlides.push(require('../../assets/images/banner/bannerMAD@2x.jpg'))
      } else if (this.$route.name === '海外留学') {
        this.swiperSlides.push(require('../../assets/images/banner/bannerdilin@2x.jpg'))
        this.swiperSlides.push(require('../../assets/images/banner/bannerbklx@2x.jpg'))
        return this.swiperSlides.push(require('../../assets/images/banner/bannermxgl@2x.jpg'))
      } else if (this.$route.name === '海外游学') {
        return this.swiperSlides.push(require('../../assets/images/banner/bannerhwlx@2x.jpg'))
      }
    }
  }
}
</script>
<style scoped>
img{
  width: 100%;
  height: auto;
}
</style>
