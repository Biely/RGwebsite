<template>
  <div class="wrap-nav" style="height:200px;">
    <div class="nav twidth" style="width: 1080px;height:200px">
      <ul class="nav-menu" style="height:200px;">
        <li style="width:247px;height:50px;">
          <a href="intr" v-bind:class="[routePath == '企业介绍' || routePath == '关于我们' ? 'active' : '']" style="height:50px;line-height:3.0;font-size:18px;">企業介紹</a>
        </li>
        <li style="width:2px;height:50px;background:rgba(234,234,234,1);"></li>
        <li style="width:247px;height:50px;">
          <a href="news" v-bind:class="[routePath == '新闻动态' ? 'active' : '']"  style="height:50px;line-height:3.0;font-size:18px;">新聞動態</a>
        </li>
        <li style="width:2px;height:50px;background:rgba(234,234,234,1);"></li>

        <li style="width:247px;height:50px;">
          <a href="recruit" v-bind:class="[routePath == '精英招聘' ? 'active' : '']" style="height:50px;line-height:3.0;font-size:18px;">精英招聘</a>
        </li>
        <li style="width:2px;height:50px;background:rgba(234,234,234,1);"></li>

        <li style="width:247px;height:50px;">
          <a href="map" v-bind:class="[routePath == '在线地图' ? 'active' : '']" style="height:50px;line-height:3.0;font-size:18px;">在線地圖</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutNav',
  computed: {
    routePath() {
      return this.$route.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-nav{
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
}
.nav{
  border-bottom: 3.5px solid #DCDCDC;
}
.nav-menu{
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  text-align: center;
  font-size: 20px;
  margin-left: 0px;
  margin-right: 0px;
}
.nav-menu li, a{
  height: 50px;
}
.nav-menu li{
  padding: 0px;
  margin: 0px;
  border-right: none;
}
.nav-menu a{
  display: block;
  width: 100%;
  line-height: 2.5;
}
.nav-menu a:hover{
  background: url('../../assets/images/about/btn@2x.png') no-repeat center;
  background-size: 100% 100%;
  color: #fff;
  box-shadow:-3px 4px 6px 0px rgba(0,0,0,0.19);
}
.nav-menu .active{
  background: url('../../assets/images/about/btn@2x.png') no-repeat center;
  background-size: 100% 100%;
  color: #fff;
  box-shadow:-3px 4px 6px 0px rgba(0,0,0,0.19);
}
</style>
