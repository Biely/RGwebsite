<template>
    <div class="wrap-intr">
      <div class="inner-intr twidth" style="width: 1080px;padding-top:40px;">
        <ul class="intr-ul">
          <li class="intr-img">
            <div class="intr-left" style="height:310px;width:271px;">
              <img src="../../assets/images/about/logo@2x.png" alt="" style="height:221px;width:220px;">
              <div class="">
                <p style="font-size:20px;padding-top:10px;padding-bottom:8px;">雅際英語</p>
                <p style="font-size:14px;">讓世界更懂你Enjoy Your Life！</p>
              </div>
            </div>
          </li>
          <li class="intr-word" style="font-size:14px;width:604px;">
           <p style="padding-bottom:20px;">雅際英語為雅際教育（HK）有限公司旗下教育品牌，成立於2015年3月，全職母語外教比例85%，以專業英語培訓結合“互聯網+”外教上門培訓模式的教育企業為覈心，智慧個性化教學系統實現數據化明理化教學。</p>

<p style="padding-bottom:20px;">致力於綜合具有合格教師資格的外教資源，嚴格的錄用標準，為3歲以上幼少年及成人提供專業多元化的外教上門授課服務。通過線上約課，雅際外語中心（線下校區）趣味體驗的方式，線上線下結合教育，自主研發課程，令學員更快，更有趣地享受語言所帶來的快樂。</p>
<p style="font-size:12px;">RG ENGLISH is a brand under RG Education (HK) Limited. It’sestablished since March 2015. Our enterprise’s core is combining professional English training with “Internet +”. To achieve clearer better teaching, we developed our very own intelligent personalized teaching system.With 85% of our professional English teachers come fromnative speaking countries, we have strict qualification and recruitment standards. Our aim is to provide professional diversified door-to-door teaching services to children above 3 years old and adults. With our independent R&D curriculum, combining with our online course, as well as our fun experience from RG Training Center (Offline Campus), Students will surely find English learning in a faster and more enjoyable manner.</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Intr'
}
</script>

<style scoped>
.wrap-intr{
  width: 100%;
  padding-bottom: 50px;
}
.intr-ul{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
}
.intr-word{
   text-align: justify;
   padding-left: 50px;
   line-height: 1.8;
   color: #666666;
}
.intr-left{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background:rgba(255,255,255,1);
  border-radius:18px;
  box-shadow:2px 5px 10px 0px rgba(0,0,0,0.1);
  padding-top: 25px;
}
</style>
