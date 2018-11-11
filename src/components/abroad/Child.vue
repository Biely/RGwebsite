<template>
  <div class="dilin">
    <div class="wrap-plan">
      <div class="inner-plan twidth" style="width: 1080px;height: 335px;">
        <div class="left-box tp20">
          <img src="..\..\assets\images\abroad\dilin\title1@2x.png" alt="">
        </div>
        <div class="plan-content">
          <div class="plan-word">
             <p style="font-size:16px;">這是精英培訓計畫作為RG英國教育中心低齡學段的教育子品牌，致力於為中國精英家庭提供入學申請、英語培訓、探校/訪校、遊學、海外監護等一站式低齡留學服務。作為中英精英教育聯盟創立者之一以及中國西南地區首個官方授權的学生考點，擁有國際化教育背景的留學申請團隊和培訓團隊、英國當地無時差的海外監護團隊，以及頂尖的英國寄宿學校校長團資源，為中國孩子在精英教育起源之地接受最好的低齡教育保駕護航。</p>
          </div>
          <div class="plan-img">
             <img src="..\..\assets\images\abroad\dilin\kid@2x.png" alt="" style="width:200px;height:250px;">
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-news">
      <div class="inner-news twidth" style="height: 950px;width: 1080px;">
        <div class="left-box tp20">
          <img src="..\..\assets\images\abroad\dilin\title2@2x.png" alt="">
        </div>
        <div class="news-list" style="height: 300px;padding-bottom:50px;">
          <keep-alive>
            <Newslist/>
          </keep-alive>
        </div>
        <div class="left-box tp20">
          <img src="..\..\assets\images\abroad\dilin\title3@2x.png" alt="">
        </div>
        <div class="zn-btn" style="padding-bottom:20px;">
          <ul class="zn-list">
            <li v-bind:class="[index == 0 ? 'active' : '']" @click="change(0)" style="width:247px;height:30px;">
               <p style="font-size:18px;">英國中學申請流程</p>
            </li>
            <li style="width:2px;height:29px;background:rgba(234,234,234,1);"></li>

            <li v-bind:class="[index == 1 ? 'active' : '']" @click="change(1)" style="width:247px;height:30px;">
               <p style="font-size:18px;">如何選擇英國中學</p>
            </li>
            <li style="width:2px;height:29px;background:rgba(234,234,234,1);"></li>

            <li v-bind:class="[index == 3 ? 'active' : '']" @click="change(3)" style="width:247px;height:30px;">
               <p style="font-size:18px;">英國中學申請資料</p>
            </li>
          </ul>
        </div>
        <div class="show-zn">
          <div v-if="index === 0">
            <!-- <img src="..\..\assets\images\abroad\dilin\info@2x.png" alt=""> -->
            <div class="sq-list" style="width:1080px;height:160px;">
              <img class="sq-item" src="..\..\assets\images\abroad\dilin\delive@2x.png" alt="" style="width:992px;margin:0 auto;left:44px;top:40px;">
              <div class="sq-item" style="left:-25px;">
                <img src="..\..\assets\images\abroad\dilin\4yq@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">明確留學意向-選擇學校-製作申請方案</p>
              </div>
              <div class="sq-item" style="left:90px;">
                <img src="..\..\assets\images\abroad\dilin\49y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">注册次年學校名額，為入學考試做準備</p>
              </div>
              <div class="sq-item" style="left:210px;">
                <img src="..\..\assets\images\abroad\dilin\9y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">準備成績單、推薦信等申請資料</p>
              </div>
              <div class="sq-item" style="left:325px;">
                <img src="..\..\assets\images\abroad\dilin\910y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">向英國學校提交申請資料</p>
              </div>
              <div class="sq-item" style="left:440px;">
                <img src="..\..\assets\images\abroad\dilin\102@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">參加入學考試（包括筆試與面試）</p>
              </div>
              <div class="sq-item" style="left:555px;">
                <img src="..\..\assets\images\abroad\dilin\24y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">獲得錄取通知書-確定入讀學校-向學校交付定金</p>
              </div>
              <div class="sq-item" style="left:675px;">
                <img src="..\..\assets\images\abroad\dilin\h6y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">準備簽證擔保金</p>
              </div>
              <div class="sq-item" style="left:795px;">
                <img src="..\..\assets\images\abroad\dilin\h7y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">遞交簽證申請</p>
              </div>
              <div class="sq-item" style="left:915px;">
                <img src="..\..\assets\images\abroad\dilin\h8y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">獲得簽證，介紹行前指導</p>
              </div>
              <div class="sq-item" style="left:1030px;">
                <img src="..\..\assets\images\abroad\dilin\h9y@2x.png" alt="" style="width:80px;height:80px;">
                <p style="width:76px;font-size:14px;">正式入學，學校報導</p>
              </div>
            </div>
          </div>
          <div v-else-if="index === 1">
            <p>明確留學學校排名是選擇英國中學的一個參攷因素，但其具有一定誤導性，因為每個學生與家長的需求不盡相同。大多數排名的參攷數據都比較片面（比如成績排名），並不能準確反映學校的生活質量、軟硬體設施和教育水準，而這些是學生在國外接受教育中最為重要和能够切身感受的部分。更需要指出的是，排名越高的學校，入學考試往往越激烈，需要更多的時間提前準備與申請。通常排名英國前200的中學，至少需要提前18個月申請，才有較大把握和機會申請成功。意向-選擇學校-製作申請方案</p>
          </div>
          <div v-else-if="index === 3">
            <ul class="zm-list">
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl1.png" alt="">
                <p>在讀證明</p>
              </li>
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl2.png" alt="">
                <p>在校各階段考試成績單</p>
              </li>
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl3.png" alt="">
                <p>英語水準證明</p>
              </li>
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl4.png" alt="">
                <p>有法定監護人（18歲以下）</p>
              </li>
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl5.png" alt="">
                <p>有繳納學費和生活費的能力的證明</p>
              </li>
              <li>
                <img src="..\..\assets\images\abroad\dilin\cl6.png" alt="">
                <p>填寫完整的申請表</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-lc">
      <div class="inner-lc twidth" style="width: 1080px;height: 400px;">
        <div class="left-box tp50">
          <img src="..\..\assets\images\abroad\dilin\title4@2x.png" alt="">
        </div>
        <div class="lc-list tp50" style="width:1000px;">
          <img src="..\..\assets\images\abroad\dilin\ses@2x.png" alt="">
          <p style="width:85px;top:155px;left:8px;font-size:14px;">專業諮詢量身
製定留學方案</p>
<p style="width:57px;top:155px;left:140px;font-size:14px;">簽訂留學
服務協定</p>
<p style="width:79px;top:155px;left:240px;font-size:14px;">VIP學術輔導</p>
<p style="width:113px;top:155px;left:330px;font-size:14px;">通過ES獨家<br>
綠色通道申請學校</p>
<p style="width:112px;top:155px;left:450px;font-size:14px;">參加學校入學考試
獲得錄取通知書</p>
<p style="width:84px;top:155px;left:580px;font-size:14px;">準備相關材料
辦理簽證</p>
<p style="width:85px;top:155px;left:685px;font-size:14px;">接受行前指導</p>
<p style="width:57px;top:155px;left:810px;font-size:14px;">英國海外
貼心服務</p>
<p style="width:99px;top:155px;left:900px;font-size:14px;">大學升學<br>就業等後續服務</p>
        </div>
      </div>
    </div>
    <div class="wrap-tj">
      <div class="inner-tj twidth" style="width: 1080px;height: 450px;">
        <div class="left-box tp50">
          <img src="..\..\assets\images\abroad\dilin\title5@2x.png" alt="">
        </div>
        <div class="tj-school tp50">
          <img src="..\..\assets\images\abroad\dilin\school@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="wrap-swiper">
      <div class="inner-swiper twidth" style="width: 1080px;height: 600px;">
        <div class="left-box tp50">
          <img src="..\..\assets\images\abroad\dilin\title6@2x.png" alt="">
        </div>
        <div class="tp50">
          <swiper :options="swiperOption" ref="mySwiper">
             <!-- slides -->
             <swiper-slide v-for="(slide, i) in swiperSlides" :key="i">
               <img :src="slide" alt="">
             </swiper-slide>
             <!-- Optional controls -->
             <div class="swiper-button-prev"></div><!--左箭头-->
             <div class="swiper-button-next"></div><!--右箭头-->
           </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Newslist from '@/components/abroad/Newslist'

export default {
  name: 'Child',
  data() {
    return {
      index: 0,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: false
        },
        autoplay: {
          enabled: true,
          disableOnInteraction: false,
          delay: 3000
        },
        fadeEffect: {
          crossFade: false
        },
        loop: true,
        autoHeight: true
      },
      swiperSlides: []
    }
  },
  components: {
    swiper,
    swiperSlide,
    Newslist
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created: function() {
    this.tujin()
  },
  methods: {
    change(id) {
      this.index = id
    },
    tujin() {
      return this.swiperSlides.push(require('../../assets/images/abroad/dilin/btom_banner@2x.jpg'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li{
  padding: 0px;
  margin: 0px;
}
.tp20{
  padding-top: 20px;
}
.wrap-plan{
  background-color: #F8F8F8;
  width: 100%;
}
.plan-content{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.plan-word p{
  padding-right: 50px;
  padding-left: 50px;
  font-size: 25px;
  text-align: left;
  line-height: 1.8;
}
.zn-btn{
  width: 100%;
  height: 100px;
  margin-top: 80px;
}
.zn-list{
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.zn-list li{
  width: 25%;
  font-size: 25px;
  border-right: none;
  padding: 10px 0px;
}
.zn-list .active{
  color: #fff;
  background: url('..\..\assets\images\abroad\liuxue\benke\btn.png') center no-repeat;
  background-size: 100% 100%;
  box-shadow:-3px 4px 6px 0px rgba(0,0,0,0.19);
}
.show-zn{
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
}
.sq-list{
  position: relative;
}
.sq-item{
  position: absolute;
}
.show-zn p{
  text-align: left;
  font-size: 20px;
  line-height: 1.8;
  padding: 10px;
  background-color: #F8F8F8;
}
.sq-item p{
  background-color: #fff;
  line-height: 1.5;
  text-align: justify;
}
.zm-list{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-top: 50px;
}
.zm-list img{
  height: 100px;
  width: auto;
}
.wrap-lc{
  width: 100%;
  background: url('..\..\assets\images\abroad\dilin\bg.png') center no-repeat;
  background-size: 100% 100%;
}
.lc-list{
  margin: 0 auto;
  position: relative;
}
.lc-list p{
  position: absolute;
  color: #fff;
}
.lc-list img{
  width: 100%;
  height: auto;
}
.tj-school{
  width: 90%;
  margin: 0 auto;
}
.tj-school img{
  width: 100%;
  height: auto;
}
.wrap-swiper{
  width: 100%;
  background-color: #F8F8F8;
}
.swiper-slide img{
  width: 90%;
  margin: 0 auto;
}
</style>
