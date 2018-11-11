<template>
  <div class="Melite">
    <swiper loop auto :list="swipelist"  style="width:100%;margin:0 auto;" :aspect-ratio="450/800" dots-position="center"></swiper>
    <div class="fuli">
      <div class="top-title mwidth">
        <img src="..\..\..\assets\images\mobile\coop\step17@2x.png" alt="">
      </div>
      <div class="f-content">
        <div class="word">
          <p class="subtitle">外教HR管理</p>
          <div class="wrod-content">
            <p class="small-title">崗位職責</p>
            <p>1.與外教線上溝通（郵件、電話等），及時回復和解决外教的問題，對突發情况進行實时處理，對外教滿意度負責；</p>
            <p>2.管理外教的上課出勤情况，對外教的出勤負責；</p>
            <p>3.負責協調和安排外教課程（排課、取消）以及協調外教上課內容；</p>
            <p>4.基於外教老師課堂教學表現和家長迴響定期與老師溝通，以保證教學效果；</p>
            <p>5.配合運營團隊組織協調外教老師參與活動；</p>
            <p>6.參與外教的薪水結算工作。</p>
          </div>
          <div class="wrod-content">
            <p class="small-title">任職要求</p>
            <p>1.英語專業八級或口語流利跟外教無障礙溝通；</p>
            <p>2.最好有從事過人力資源等工作，有經驗者優先；</p>
            <p>3.有海外留學經驗者優先。</p>
          </div>
        </div>
        <div class="word">
          <p class="subtitle">美術編輯/設計（英語課程美化設計方向）</p>
          <div class="wrod-content">
            <p class="small-title">崗位職責</p>
            <p>1.配合教研老師的需求，完成PPT課件內容中的美術和動效設計，美術部分主要包含：內容排版、圖片搭配、插畫設計、色彩設計等；
            <p>2.根據公司業務要求制訂課件風格，能够根據不同的用戶年齡段，對課件的設計風格進行區別。
            <p>3.宣傳海報，傳單，網站圖片，節日氛圍燈布等設計工作</p>
          </div>
          <div class="wrod-content">
            <p class="small-title">任職要求</p>
            <p>1.熟練使用Powerpoint、Photoshop、Illustrator、Indesign等軟件；</p>
            <p>2.熟練使用Powerpoint中的動效功能；</p>
            <p>3.具備較强的美術和平面設計功底，對色彩、排版有較好的把握能力；</p>
            <p>4.具備開闊獨到的眼界、大膽出新的設計理念；</p>
            <p> 5.謙虛好學、執行力强，善於和他人溝通配合。</p>
          </div>
          <div class="wrod-content">
            <p class="small-title">優先條件</p>
            <p>1.具備手繪插畫能力；</p>
            <p>2.有相關設計作品者優先考慮；</p>
          </div>
        </div>
        <div class="word">
          <p class="subtitle">銷售經理</p>
          <div class="wrod-content">
            <p class="small-title">崗位職責</p>
            <p>1.對客戶資訊進行分析，尋找合適的銷售對象；</p>
            <p>2.使用多種通路聯系客戶，發掘潜在的客戶資源；</p>
            <p>3.瞭解客戶的具體需求，向客戶介紹產品，服務周到盡力促成銷售；</p>
            <p>4.記錄銷售過程，跟踪並確保及時收回銷售款項；</p>
            <p>5.完成領導交給的其他任務。</p>
          </div>
          <div class="wrod-content">
            <p class="small-title">任職要求</p>
            <p>1.有教育行業1年以上銷售工作經驗；</p>
            <p>2.大專學歷以上，語言類、教育學類、市場行銷類相關專業優先；</p>
            <p>3.普通話標準，聲音具有親和力，善於談判；</p>
            <p>4.學習及應變能力强，具有較强抗壓能力；</p>
            <p>5.工作積極、誠實肯幹，團隊意識强，樹立良好的心態，能以積極熱情的態度堅定的信心投入工作，有良好的敬業精神；</p>
            <p>6.熟練掌握辦公軟體、互聯網應用技能；</p>
            <p>7.具有培訓機構合作經驗者優先；</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Melite',
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
.f-content{
  width: 80%;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;
}
.word{
  text-align: left;
  font-size: 25px;
  margin-bottom: 50px;
}
.subtitle{
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 20px;
}
.wrod-content{
  padding-bottom: 20px;
}
.small-title{
  font-weight: bold;
}
</style>
