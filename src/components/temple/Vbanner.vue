<template>
  <div class="" style="height:400px;;">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1">
       <div @click="change(0)" style="width:100%;height:100%;">
       </div>
      </swiper-slide>
      <swiper-slide class="slide-2">
        <div @click="change(1)" style="width:100%;height:100%;">

      </div>
    </swiper-slide>
      <swiper-slide class="slide-3">
        <div @click="change(2)" style="width:100%;height:100%;">

        </div>
      </swiper-slide>
      <swiper-slide class="slide-4">
        <div @click="change(3)" style="width:100%;height:100%;">

        </div>
      </swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1">
        <div @click="change(0)" style="width:100%;height:100%;">

        </div>
      </swiper-slide>
      <swiper-slide class="slide-2">
        <div @click="change(1)" style="width:100%;height:100%;">

        </div>
      </swiper-slide>
      <swiper-slide class="slide-3">
        <div @click="change(2)" style="width:100%;height:100%;">
        </div>
      </swiper-slide>
      <swiper-slide class="slide-4">
        <div @click="change(3)" style="width:100%;height:100%;">
        </div>
      </swiper-slide>
    </swiper>
    <el-dialog
      :visible.sync="hvideo.dialogVisible"
      width="70%" :before-close="handleClose" center>
      <div class="container">
        <div class="player">
          <video-player  class="video-player vjs-custom-skin"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="hvideo.playerOptions"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
          >
          </video-player>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Vbanner',
  components: {
    swiper,
    swiperSlide,
    videoPlayer
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4
      },
      swiperOptionThumbs: {
        spaceBetween: 12,
        slidesPerView: 3,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 4,
        slideToClickedSlide: true
      },
      hvideo: {
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
      },
      videosrc: [
        'https://stroage.rgenglish.net/anna.mp4',
        'https://stroage.rgenglish.net/alice.mp4',
        'https://stroage.rgenglish.net/diana.mp4',
        'https://stroage.rgenglish.net/mth.mp4'
      ]
    }
  },
  mounted() {
    this.$nextTick(function() {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {
    change(id) {
      this.hvideo.playerOptions.sources[0].src = this.videosrc[id]
      this.hvideo.dialogVisible = true
      this.$refs.videoPlayer.player.play()
    },
    handleClose(done) {
      this.hvideo.dialogVisible = false
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
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  height: 80%!important;
  width: 100%;
}
.gallery-thumbs {
  height: 20%!important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.slide-1 {
  background-image:url('..\..\assets\images\home\v1.jpg');
}
.slide-2 {
  background-image:url('..\..\assets\images\home\v2.jpg');
}
.slide-3 {
  background-image:url('..\..\assets\images\home\v3.jpg');
}
.slide-4 {
  background-image:url('..\..\assets\images\home\v4.jpg');
}
</style>
