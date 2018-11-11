<template>
<div>
  <div class="topinfo">
    <div class="twidth topinfo-phone" style="width: 1080px;">
      <p>客服热线：400 - 821 -3322 （9:00-24:00）</p>
    </div>
  </div>
  <div v-bind:class="[navBarFixed == false ? 'nav' : 'nav navFix']" style="font-size: 18px;">
    <div class="twidth nav-content" style="width: 1080px;">
      <img src="../../assets/images/TOPLOGO@2x.png">
      <ul class="nav-box">
        <li>
          <a href="/home">
            <p v-bind:class="[routePath == '首页' ? 'active' : '']">&nbsp;&nbsp;首頁&nbsp;&nbsp;<span>HOME</span></p>
          </a>
        </li>
        <li>
          <el-dropdown>
            <div class="flex-dropdown" v-bind:class="[routePath == '分阶课程' || routePath == 'MAD教学' || routePath == '主题活动' ? 'active' : '']" style="font-size: 18px;">
             <p class="el-dropdown-link">
               雅際課程<span>CURRICULUMS</span>
             </p>
             <!-- <i class="el-icon-arrow-down el-icon--right" style="color: #000;font-weight: bold;"></i> -->
           </div>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item :divided='true'><router-link to="/course"><p v-bind:class="[routePath == '分阶课程' ? 'active' : '']"  style="font-size: 18px;">分階課程<span>Cent rank course</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/method"><p v-bind:class="[routePath == 'MAD教学' ? 'active' : '']"  style="font-size: 18px;">MAD教學<span>Characteristic teaching method</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/activities"><p v-bind:class="[routePath == '主题活动' ? 'active' : '']"  style="font-size: 18px;">主題活動<span>Theme activities</span></p></router-link></el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
          <!-- <a href="/curriculun">
              <p v-bind:class="[routePath == '雅际课程' ? 'active' : '']">雅際課程<span>CURRICULUN</span>
            </p>
          </a> -->
        </li>
        <li>
          <el-dropdown>
            <div class="flex-dropdown" v-bind:class="[routePath == '海外游学' || routePath == '海外留学' ? 'active' : '']" style="font-size: 18px;">
             <p class="el-dropdown-link" >
               留學遊學<span>ABROAD</span>
             </p>
             <!-- <i class="el-icon-arrow-down el-icon--right" style="color: #000;font-weight: bold;"></i> -->
           </div>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item :divided='true'><router-link to="/tour"><p v-bind:class="[routePath == '海外游学' ? 'active' : '']" style="font-size: 18px;">海外遊學<span>overseas study tour</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/abroad"><p v-bind:class="[routePath == '海外留学' ? 'active' : '']" style="font-size: 18px;">海外留學<span>study abroad</span></p></router-link></el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
          <!-- <a href="/studyTour">
              <p v-bind:class="[routePath == '名校游学' ? 'active' : '']">名校遊學<span>STUDY TOUR</span>
            </p>
          </a> -->
        </li>
        <li>
          <el-dropdown>
            <div class="flex-dropdown">
             <p class="el-dropdown-link" style="font-size: 18px;">
               教學平台<span>SYSTEM</span>
             </p>
             <!-- <i class="el-icon-arrow-down el-icon--right" style="color: #000;font-weight: bold;"></i> -->
           </div>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item :divided='true'><a href="http://live.rgenglish.net"><p  style="font-size: 18px;">線上課程<span>Online courses</span></p></a></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/ercode"><p  style="font-size: 18px;">外教預約<span>The teacher appointment</span></p></router-link></el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
          <!-- <a href="/tutor">
              <p v-bind:class="[routePath == '外教上门' ? 'active' : '']">外教上門<span>TUTOR</span></p>
          </a> -->
        </li>
        <li>
          <el-dropdown>
            <div class="flex-dropdown" v-bind:class="[routePath == '城市合伙人' || routePath == '企业合作' || routePath == '社区合伙人' ? 'active' : '']" style="font-size: 18px;">
             <p class="el-dropdown-link">
               更多合作<span>COOPERATION</span>
             </p>
             <!-- <i class="el-icon-arrow-down el-icon--right" style="color: #000;font-weight: bold;"></i> -->
           </div>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item :divided='true'><router-link to="/citypartners"><p v-bind:class="[routePath == '城市合伙人' ? 'active' : '']" style="font-size: 18px;">城市加盟<span>City partnership scheme</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/cooperation"><p v-bind:class="[routePath == '企业合作' ? 'active' : '']" style="font-size: 18px;">企業合作<span>Enterprise Cooperation</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/communitypartners"><p v-bind:class="[routePath == '社区合伙人' ? 'active' : '']" style="font-size: 18px;">社區合夥人<span>Community partnership recruitment</span></p></router-link></el-dropdown-item>
               <el-dropdown-item :divided='true'><router-link to="/send"><p v-bind:class="[routePath == '外教派遣' ? 'active' : '']" style="font-size: 18px;">外教派遣<span>Foreign teacher dispatch</span></p></router-link></el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
          <!-- <a href="/onlineCourse">
              <p v-bind:class="[routePath == '线上课堂' ? 'active' : '']">線上課堂<span>ONLINE COURSE</span>
            </p>
          </a> -->
        </li>
        <li>
          <a href="/about/intr">
              <p v-bind:class="[routePath == '关于我们' || routePath == '企业介绍' || routePath == '新闻动态' || routePath == '精英招聘' || routePath == '在线地图' ? 'active' : '']">關於我們<span>ABOUT</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navBarFixed: false
    }
  },
  computed: {
    routePath() {
      return this.$route.name
    }
  },
  mounted () {
    // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin: 0px;
  padding: 0px;
}
.topinfo{
  width:100%;
  height:50px;
  background:rgba(53,53,53,1);
}
.topinfo-phone{
  margin: 0 auto;
}
.topinfo-phone p{
  width:450px;
  font-size:22px;
  color:rgba(255,255,255,1);
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  text-align: left;
}
.nav{
  height:120px;
  background:rgba(255,255,255,1);
}
.navFix{
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9999;
}
.nav-content{
  height: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items:center;
}
.nav-content img{
  width: 450px;
  height: auto;
  display: block;
  margin: 14px 0px;
}
.nav-box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.nav-box li{
  font-family:MicrosoftYaHei;
  color:rgba(34,34,34,1);
  padding: 0px 15px;
}
.nav-box li:last-of-type{
  padding-right: 0px;
}
.nav-box p>span{
  display: inherit;
  font-size: 9px;
  padding: 6px 0px;
}
.nav-box a{
  color: rgba(34,34,34,1);
}
.nav-box a:hover,a:active,a:focus{
  color: rgba(26,105,151,1);
}
.nav-box a:hover,a:active,a:focus p{
  border-bottom:thick solid rgba(26,105,151,1);
}
.active{
  border-bottom:thick solid rgba(26,105,151,1);
  color: rgba(26,105,151,1);
}
.flex-dropdown{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.flex-dropdown:hover{
  border-bottom:thick solid rgba(26,105,151,1);
}
.el-dropdown p{
  color: rgba(34,34,34,1);
}
.el-dropdown p>span{
  display: inherit;
  font-size: 9px;
  padding: 6px 0px;
}
.el-dropdown-menu{
  width: 180px;
}
.el-dropdown-menu li{
  color: rgba(34,34,34,1);
}
.el-dropdown-menu p{
  text-align: center;
  line-height: 1.5;
  padding: 0px;
  border: none;
}
.el-dropdown-menu span{
  display: inherit;
  font-size: 9px;
  padding: 1px 0px;
}
</style>
