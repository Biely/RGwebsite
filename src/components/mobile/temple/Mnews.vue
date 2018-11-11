<template>
  <div class="Mnews">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="news">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\about\information@2x.png" alt="">
      </div>
      <div class="n-list">
        <div class="item" v-for="(item, index) in newslist" :key="index">
          <div class="n-img">
            <a :href="'../marticle/' + item.id" target="_blank">
              <div class="n-fm" v-bind:style="{backgroundImage:'url(' + styleObj[ index ] + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}">
              </div>
            </a>
          </div>
          <div class="n-word">
            <a :href="'../marticle/' + item.id" target="_blank">
              <p class="title">{{ item.title }}</p>
              <p class="desc">{{ item.descr }}</p>
              <p class="time">{{ item.created_at }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="fy">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="lastpage"
          @current-change="getnews"
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mnews',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/about/bannerMAD@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/about/bannerMAD@2x.jpg'),
        title: ''
      }],
      newslist: [],
      styleObj: [],
      page: 1,
      lastpage: 99
    }
  },
  created() {
    this.getnews(1)
  },
  methods: {
    getnews(pages) {
      this.$http.get('http://weback.rgenglish.net/api/news', {
        params: {
          page: pages,
          mun: '5'
        }
      }).then((res) => {
        this.newslist = res.data.data
        this.lastpage = res.data.last_page
        var newsdata = this.newslist
        for (let i in newsdata) {
          var url = 'http://weback.rgenglish.net/uploads/' + newsdata[i].thumb
          this.styleObj.push(url)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-list{
  width: 90%;
  margin: 0 auto;
}
.item{
  width: 99%;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  background-color: #EEEEEE;
  padding: 10px;
  border-radius: 10px;
}
.n-img{
  width: 45%;
  height: 100%;
  background: url('..\..\..\assets\images\mobile\about\bg@2x.png') center no-repeat;
  background-size: 100% 100%;
}
.n-fm{
  width: 100%;
  height: 180px;
  border-radius: 15px;
}
.n-word{
  width: 50%;
  height: 100%;
  text-align: left;
}
.title{
  font-size: 30px;
  font-weight: bold;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.desc{
  font-size: 25px;
  height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.fy{
  margin-bottom: 50px;
}
</style>
