<template>
  <div class="wrap-footer" style="height: 350px;">
    <div class="inner-footer" style="width: 1080px;">
      <ul class="top-line" style="height: 300px;padding-top: 10px;font-size:14px;">
        <li class="ercode">
          <img src="../../assets/images/ercode.jpg" alt="" style="width:100px;height:100px;">
          <p>官方微信</p>
        </li>
        <li class="ercode">
          <img src="../../assets/images/kf.jpg" alt="" style="width:100px;height:100px;">
          <p>客服微信</p>
        </li>
        <li class="kf-tel">
          <p style="font-size:14px;">香港咨詢專線</p>
          <p style="font-size:24px;">+852 6670 5889</p>
          <p style="font-size:14px;">周一至周日09:00-24:00</p>
        </li>
        <li class="kf-tel">
          <p style="font-size:14px;">國內咨詢專線</p>
          <p style="font-size:24px;">4008-8366-61</p>
          <p style="font-size:14px;">周一至周日09:00-24:00</p>
        </li>
        <li class="kf-btn" ><a style="width:100px;height:100px;" href="http://p.qiao.baidu.com/cps/chat?siteId=12383947&userId=26086097" target="_blank"></a><p>在線客服</p></li>
        <li class="qq-btn" ><a href="http://wpa.qq.com/msgrd?v=3&uin=2753240795&site=qq&menu=yes" target="_blank" style="width:100px;height:100px;"></a><p>QQ客服</p></li>
      </ul>
      <div class="copyright"><p>雅際教育科技（廣州）有限公司  RG  Education  Technology (guangzhou) co., LTD <a href="http://www.miibeian.gov.cn" target="_blank">粤ICP备18052197号</a></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    routePath() {
      return this.$route.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-footer{
  background-color: #333;
  color: #fff;
  height: 350px;
  width: 100%;
  z-index: 999;
}
.inner-footer{
  height:100%;
  margin: 0 auto;
}
.top-line{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  font-size: 25px;
}
.top-line li{
  padding: 0 25px;
}
.ercode img, .kf-btn a, .qq-btn a{
  margin-bottom: 15px;
}
.ercode img{
  width: 150px;
  height: 150px;
}
.kf-tel{
  text-align: left;
  font-size: 25px;
  margin: 0px;
  padding: 0px;
  letter-spacing: 1px;
  line-height: 1.8;
}
.kf-btn a{
  background-image: url('../../assets/images/footer-kefu.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  display: block;
}
.kf-btn a:hover{
  background-image: url('../../assets/images/footer-kefu-hover.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  display: block;
}
.qq-btn a{
  background-image: url('../../assets/images/footer-qq.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  display: block;
}
.qq-btn a:hover{
  background-image: url('../../assets/images/footer-qq-hover.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  display: block;
}
.copyright a{
  color: #fff;
}
</style>
