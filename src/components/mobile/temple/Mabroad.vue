<template>
  <div class="Mabroad">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="plan">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\aborad\step12@2x.png" alt="">
      </div>
      <div class="p-content mwidth">
        <p>這是精英培弄計畫作為RG英國教育中心低齡學段的教育子品牌，致力於為中國精英家庭提供入學申請、英語培訓、探校/訪校、遊學、海外監護等一站式低齡留學服務.作為中英精英教育聯盟創立_只之一以及中國西南地區首個官方授權的考點，擁有國際化教育背景的留學申請團隊和培訓團隊、英國當地無時差的海外監護團隊，以及頂尖的英國寄宿學校校長團資源，為中國孩子在精英教育起源之地接受最好的低齡教育保駕護航</p>
      </div>
    </div>
    <div class="zixun">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\aborad\step11@2x.png" alt="">
      </div>
      <div class="z-content">
        <div class="z-item" v-for="(item, index) in newslist" :key="index">
          <a :href="'../marticle/' + item.id" target="_blank">
            <div class="thumb" v-bind:style="{backgroundImage:'url(' + styleObj[ index ] + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}">
            </div>
            <p class="title">{{ item.title }}</p>
            <p class="sub-title">{{ item.descr }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="tubiao">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\aborad\step1@2x.png" alt="">
      </div>
      <div class="t-list">
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\1@2x.png" alt="">
          <p>專業諮詢量身製定留學方案</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\2@2x.png" alt="">
          <p>VIP學術輔導</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\3@2x.png" alt="">
          <p>簽訂留學服務協定</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\11@2x.png" alt="">
          <p>專業諮詢量身製定留學方案</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\12@2x.png" alt="">
          <p>VIP學術輔導</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\21@2x.png" alt="">
          <p>簽訂留學服務協定</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\22@2x.png" alt="">
          <p>專業諮詢量身製定留學方案</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\31@2x.png" alt="">
          <p>VIP學術輔導</p>
        </div>
        <div class="t-item">
          <img src="..\..\..\assets\images\mobile\aborad\32@2x.png" alt="">
          <p>簽訂留學服務協定</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mabroad',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/aborad/5a4ae2f21420d@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/aborad/5a4ae2f21420d@2x.jpg'),
        title: ''
      }],
      newslist: [],
      styleObj: [],
      page: 1
    }
  },
  created() {
    this.$http.get('http://weback.rgenglish.net/api/news', {
      params: {
        page: this.page,
        mun: '4',
        cat: 'liuxue'
      }
    }).then((res) => {
      this.newslist = res.data.data
      var newsdata = this.newslist
      for (let i in newsdata) {
        var url = 'http://weback.rgenglish.net/uploads/' + newsdata[i].thumb
        this.styleObj.push(url)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-content{
  width: 80%;
  font-size: 28px;
  text-align: justify;
  line-height: 1.5;
  padding-bottom: 50px;
}
.tubiao{
  background: url('..\..\..\assets\images\mobile\aborad\bg.jpg') center no-repeat;
  background-size: 100% 100%;
}
.t-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 50px;
}
.t-item{
  width: 30%;
  margin: 0 auto;
  padding: 20px 10px;
  color: #fff;
}
.t-item img{
  height: 100px;
  width: auto;
}
.t-item p{
  width: 60%;
  margin: 0 auto;
  letter-spacing: 2px;
  padding-top: 10px;
}
.z-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  color: #333333
}
.z-item{
  width: 42.5%;
  text-align: left;
  background:rgba(238,238,238,1);
  margin-bottom: 40px;
  border-radius: 10px;
}
.thumb{
  width:100%;
  height:180px;
}
.title{
  padding: 5px 10px;
  font-size: 25px;
  height: 67px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sub-title{
  padding: 5px 10px;
  font-size: 14px;
  height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
}
</style>
