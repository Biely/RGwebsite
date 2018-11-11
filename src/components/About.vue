<template>
  <div>
    <Header/>
    <div class="banner">
      <Banner/>
      <div class="wrap-dialog twidth" style="width: 1080px;">
        <div class="inner-dialog animated bounceInRight">
          <DialogFrom/>
        </div>
      </div>
    </div>
    <AboutNav/>
    <!-- <div class="wrap-intr">
      <div class="inner-intr twidth" style="width: 1080px;">
        <ul class="intr-ul">
          <li class="intr-img">
           <img src="../../assets/images/about/logo@2x.png" alt="">
          </li>
          <li class="intr-word">
           <p>      雅際英語為雅際教育（HK）有限公司旗下教育品牌，成立於2015年3月，全職母語外教比例85%，以專業英語培訓結合“互聯網+”外教上門培訓模式的教育企業為覈心，智慧個性化教學系統實現數據化明理化教學；致力於綜合具有合格教師資格的外教資源，嚴格的錄用標準，為3歲以上幼少年及成人提供專業多元化的外教上門授課服務。</p>
      <p>通過線上約課，雅際外語中心（線下校區）趣味體驗的管道，線上線下結合教育，自主研發課程，令營員更快，更有趣地享受語言所帶來的快樂。</p>
          </li>
        </ul>
      </div>
    </div> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import AboutNav from '@/components/temple/AboutNav'

export default {
  name: 'About',
  components: {
    Header,
    Banner,
    DialogFrom,
    AboutNav,
    Footer
  }
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
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}
.intr-word{
   text-align: left;
   font-size: 28px;
   padding-left: 50px;
   line-height: 1.8;
}
.intr-word p{
  text-indent:25px;
}
</style>
