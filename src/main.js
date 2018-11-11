import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'
import 'assets/css/swiper.css'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VideoPlayer from 'vue-video-player'
import 'vue-area-linkage/dist/index.css'
import VueAreaLinkage from 'vue-area-linkage'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(VideoPlayer)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ELEMENT = { zIndex: 3000 }
Vue.use(ElementUI)
Vue.use(VueAreaLinkage)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  mounted() {
    if (this._isMobile()) {
      if (this.$route.name !== 'article') {
        this.$router.replace('/web')
      }
    } else {
      if (this.$route.name === 'mindex') {
        this.$router.replace('/home')
      }
    }
    document.dispatchEvent(new Event('render-event'))
  }
})
