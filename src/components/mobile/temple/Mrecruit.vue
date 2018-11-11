<template>
  <div class="Mrecruit">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="fuli">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\coop\step1@2x.png" alt="">
      </div>
      <div class="f-block">
        <div class="item">
          <div class="left">
            <img src="..\..\..\assets\images\mobile\coop\sq@2x.png" alt="">
            <p>社區合夥人</p>
          </div>
          <div class="right">
            <p>1、誠邀各大城市的寶媽加入社區合夥人，0風險0投資高收入，一起打造能改變萬千家庭的教育事業</p>
            <p>2、簡單來說，家長和雅際一起合作，RG提供課程、外教資源、智慧系統，而合夥人善用自身的各類優勢與人脈資源，發起拼班，讓更多家庭能共亯到優質的教育資源，成為一名國際教育傳播者。
</p>
            <p>3、在總部的支持下完成招生，能够享受合夥人專屬內部福利，並獲得推廣產品收益。
</p>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <img src="..\..\..\assets\images\mobile\coop\hhr@2x.png" alt="">
            <p>合夥人要求</p>
          </div>
          <div class="right">
            <p>微合夥人的申請條件：</p>
            <p>①認可RG英語的教育理念</p>
            <p>②關心子女英語教育培養的家長/組織
            （RG學員家長優先）。</p>
            <p>③創建或者加入了一定規模的社區群並自己擁有300比特以上好友。</p>
            <p>④有社區業主群。（優先）</p>
            <p>⑤在社區有線下門店者。（優先）</p>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <img src="..\..\..\assets\images\mobile\coop\sq@2x.png" alt="">
            <p>合夥人福利</p>
            <p>輕鬆月入過萬</p>
          </div>
          <div class="right">
            <p>通過我們的《合夥人獎勵機制》，您將獲得平均月收入2000元以上的返傭現金，這將為家庭收入多開闢一個源頭。只需組一個班級，就能讓自己的孩子學費减半。有志者更能月收入達10000+，隨著拼班越多，返利也越多。</p>
          </div>
        </div>
        <div class="item item-b">
          <div class="i-list">
            <img src="..\..\..\assets\images\mobile\coop\tg@2x.png" alt="">
            <p class="title">推廣支持</p>
            <p>收根據合夥人申請組織開展本社區活動推廣招生</p>
          </div>
          <div class="i-list">
            <img src="..\..\..\assets\images\mobile\coop\px@2x.png" alt="">
            <p class="title">培訓支持</p>
            <p>定期組織專業培訓，助力社區合夥人社群行銷牛人</p>
          </div>
          <div class="i-list">
            <img src="..\..\..\assets\images\mobile\coop\kf@2x.png" alt="">
            <p class="title">售前支持</p>
            <p>市場和客服協助完成簽單</p>
          </div>
          <div class="i-list">
            <img src="..\..\..\assets\images\mobile\coop\ppzc@2x.png" alt="">
            <p class="title">品牌支持</p>
            <p>微信公眾號/微博/今日頭條等新媒體資源，建立品牌信任，良好的售後課程服務和市場口碑
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Mrecruit',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      swipelist: [{
        url: 'javascript:',
        img: require('../../../assets/images/mobile/coop/zy@2x.jpg'),
        title: ''
      },
      {
        url: 'javascript:',
        img: require('../../../assets/images/mobile/coop/zy@2x.jpg'),
        title: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f-block{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 0 5px #76C81F;
  border-radius:10px;
  margin-bottom: 50px;
}
.left{
  width: 30%;
  font-size: 28px;
  color: #1A6997;
  font-weight: bold;
}
.left img{
  width: 50%;
  height: auto;
}
.left p{
  padding-top: 15px;
}
.right{
  width: 65%;
  padding: 20px 0px;
  text-align: left;
  font-size: 25px;
}
.right p{
  padding-right: 20px;
  text-align: justify;
  line-height: 1.8;
}
.i-list{
  width: 45%;
  padding: 25px 0px;
  font-size: 25px;
}
.i-list img{
  height: 100px;
  width: auto;
}
.i-list p{
  padding-top: 10px;
  width: 80%;
  margin: 0 auto;
}
.i-list .title{
  font-size: 28px;
  font-weight: bold;
  color: #1A6997;
}
.item-b{
  align-items: flex-start;
}
</style>
