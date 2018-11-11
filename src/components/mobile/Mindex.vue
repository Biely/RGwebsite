<template>
  <div class="mobile">
    <div class="header" v-bind:style="{ zIndex: hindex }">
      <div class="header-content">
        <div class="header-btn" v-on:click="showdrawer">
          <img src="..\..\assets\images\mobile\index\menu.png" alt="">
        </div>
        <div class="toplogo twidth">
        </div>
      </div>
    </div>
    <drawer
      :show.sync="drawerVisibility"
      show-mode="push"
      :drawer-style="{'background-color':'#eeeeee', width: '200px'}" v-bind:style="{ height: dheight }">
    <div slot="drawer">
      <div class="menu">
        <group>
          <cell
           title="首頁" inline-desc="HOME" value-align="center"
           @click.native="change(0)"  v-bind:class="[ index == 0 ? 'active' : '' ]">
            <img slot="icon" width="20" src="..\..\assets\images\mobile\home@3x.png" alt="">
         </cell>
        </group>
        <group>
         <cell
            title="雅際課程" inline-desc="CURRICULUN" value-align="center"
            :arrow-direction="showContent1 ? 'up' : 'down'"
            @click.native="showContent(0)" is-link>
             <img slot="icon" width="20" src="..\..\assets\images\mobile\curriculum@3x.png" alt="">
          </cell>
          <template v-if="showContent1">
             <cell-box align-items="center" :border-intent="false" class="sub-item" is-link @click.native="change(1)" v-bind:class="[ index == 1 ? 'active' : '' ]">
               <p>
                 <label class="vux-label">分階課程</label>
               </p>
               <span class="vux-label-desc">cent rank course</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(2)" v-bind:class="[ index == 2 ? 'active' : '' ]">
               <p><label class="vux-label">MAD特色教學法</label></p>
               <span class="vux-label-desc">Characteristic teaching method</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(11)" v-bind:class="[ index == 11 ? 'active' : '' ]">
               <p><label class="vux-label">主題活動</label></p>
               <span class="vux-label-desc">Theme activities</span>
             </cell-box>
           </template>
        </group>
        <group>
          <cell
           title="留學遊學" inline-desc="Study Tour" value-align="center"
           :arrow-direction="showContent4 ? 'up' : 'down'"
           @click.native="showContent(3)" is-link>
            <img slot="icon" width="20" src="..\..\assets\images\mobile\s@3x.png" alt="">
         </cell>
         <template v-if="showContent4">
            <cell-box align-items="center" :border-intent="false" class="sub-item" is-link @click.native="change(9)" v-bind:class="[ index == 9 ? 'active' : '' ]">
              <p>
                <label class="vux-label">海外遊學</label>
              </p>
              <span class="vux-label-desc">Overseas Study Tour</span>
            </cell-box>
            <cell-box align-items="center" class="sub-item" is-link @click.native="change(10)" v-bind:class="[ index == 10 ? 'active' : '' ]">
              <p><label class="vux-label">低齡留學</label></p>
              <span class="vux-label-desc">Study Abroad</span>
            </cell-box>
            <cell-box align-items="center" class="sub-item" is-link @click.native="change(12)" v-bind:class="[ index == 12 ? 'active' : '' ]">
              <p><label class="vux-label">本科留學</label></p>
              <span class="vux-label-desc">Study Abroad</span>
            </cell-box>
          </template>
       </group>
       <group>
         <cell
          title="外教上門" inline-desc="Tutor" value-align="center" link="https://sys.rgenglish.net/api/user/index">
           <img slot="icon" width="20" src="..\..\assets\images\mobile\tutor@3x.png" alt="">
        </cell>
        </group>
        <group>
          <cell
           title="線上課堂" inline-desc="Online Course" value-align="center" link="http://live.rgenglish.net">
            <img slot="icon" width="20" src="..\..\assets\images\mobile\online@3x.png" alt="">
         </cell>
         </group>
         <group>
           <cell
            title="更多合作" inline-desc="More Cooperation" value-align="center"
            :arrow-direction="showContent2 ? 'up' : 'down'"
            @click.native="showContent(1)" is-link>
             <img slot="icon" width="20" src="..\..\assets\images\mobile\co@3x.png" alt="">
          </cell>
          <template v-if="showContent2">
             <cell-box align-items="center" :border-intent="false" class="sub-item" is-link @click.native="change(3)" v-bind:class="[ index == 3 ? 'active' : '' ]">
               <p>
                 <label class="vux-label">城市合夥計劃</label>
               </p>
               <span class="vux-label-desc">City Partnership Scheme</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(4)" v-bind:class="[ index == 4 ? 'active' : '' ]">
               <p><label class="vux-label">企業合作</label></p>
               <span class="vux-label-desc">Enterprise Cooperation </span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(5)" v-bind:class="[ index == 5 ? 'active' : '' ]">
               <p><label class="vux-label">社區合夥人招募</label></p>
               <span class="vux-label-desc">Ommunity Partnership Recruitment</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(13)" v-bind:class="[ index == 13 ? 'active' : '' ]">
               <p><label class="vux-label">外教派遣</label></p>
               <span class="vux-label-desc">Foreign Teacher Dispatch</span>
             </cell-box>
           </template>
          </group>
         <group>
           <cell
            title="關於我們" inline-desc="About" value-align="center"
            :arrow-direction="showContent3 ? 'up' : 'down'"
            @click.native="showContent(2)" is-link>
             <img slot="icon" width="20" src="..\..\assets\images\mobile\about@3x.png" alt="">
          </cell>
          <template v-if="showContent3">
             <cell-box align-items="center" :border-intent="false" class="sub-item" is-link @click.native="change(6)" v-bind:class="[ index == 6 ? 'active' : '' ]">
               <p>
                 <label class="vux-label">企業介紹</label>
               </p>
               <span class="vux-label-desc">Company Profile</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(7)" v-bind:class="[ index == 7 ? 'active' : '' ]">
               <p><label class="vux-label">新聞動態</label></p>
               <span class="vux-label-desc">News And Trends</span>
             </cell-box>
             <cell-box align-items="center" class="sub-item" is-link @click.native="change(8)" v-bind:class="[ index == 8 ? 'active' : '' ]">
               <p><label class="vux-label">精英招聘</label></p>
               <span class="vux-label-desc">Elite Recruitment</span>
             </cell-box>
           </template>
          </group>
      </div>
    </div>
    </drawer>
    <div class="temp">
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
      <div class="footer">
        <p>雅際教育科技（廣州）有限公司</p>
          <p>RG  Education  Technology (guangzhou) co.,</p>
        <p>LTD 粤ICP备18052197号</p>
      </div>
    </div>
    <div class="bottom-menu">
      <Yuyue :show="showdailog1"></Yuyue>
      <Join :show="showdailog2" :type="formtype"></Join>
      <template v-if="index === 3 || index === 5 || index === 4">
        <flexbox :gutter="0" align="center" justify="center">
          <flexbox-item :span="4" >
            <p>
              <x-icon type="ios-call" :size="2" class="call-icon" style="fill:#000"></x-icon>電話咨詢
          </p></flexbox-item>
          <flexbox-item @click.native="showdailog2 = !showdailog2">
            <p>加盟申請</p>
          </flexbox-item>
        </flexbox>
      </template>
      <template v-if="index === 6 || index === 7 || index === 8">
        <flexbox :gutter="0" align="center" justify="center">
          <flexbox-item :span="4" >
            <a href="tel:4008-8366-61">
            <p>
              <x-icon type="ios-call" :size="2" class="call-icon" style="fill:#000"></x-icon>電話咨詢

          </p>  </a></flexbox-item>
            <flexbox-item>
              <a class="footer-wa" href="http://p.qiao.baidu.com/cps/chat?siteId=12383983&userId=26086097">
              <p>聯繫我們</p>
            </a>
            </flexbox-item>
        </flexbox>
      </template>
      <template v-else>
        <flexbox :gutter="0" align="center" justify="center">
          <flexbox-item :span="4" >
            <p>
              <x-icon type="ios-call" :size="2" class="call-icon" style="fill:#000"></x-icon>電話咨詢
          </p></flexbox-item>
          <flexbox-item @click.native="showdailog1 = !showdailog1">
            <p>免費領取同步課</p>
          </flexbox-item>
        </flexbox>
      </template>
    </div>
  </div>

</template>

<script scoped>
import Mhome from '@/components/mobile/temple/Mhome'
import Mcourse from '@/components/mobile/temple/Mcourse'
import Mad from '@/components/mobile/temple/Mad'
import Mcity from '@/components/mobile/temple/Mcity'
import Mcoop from '@/components/mobile/temple/Mcoop'
import Mrecruit from '@/components/mobile/temple/Mrecruit'
import Mprofi from '@/components/mobile/temple/Mprofi'
import Mnews from '@/components/mobile/temple/Mnews'
import Melite from '@/components/mobile/temple/Melite'
import Moversea from '@/components/mobile/temple/Moversea'
import Mabroad from '@/components/mobile/temple/Mabroad'
import Mact from '@/components/mobile/temple/Mact'
import Mbenke from '@/components/mobile/temple/Mbenke'
import Msend from '@/components/mobile/temple/Msend'
import Yuyue from '@/components/mobile/from/Yuyue'
import Join from '@/components/mobile/from/Join'
import { Drawer, XHeader, Cell, Group, CellBox, Flexbox, FlexboxItem, XButton } from 'vux'

export default {
  name: 'Mindex',
  components: {
    Drawer,
    XHeader,
    Cell,
    Group,
    CellBox,
    Mhome,
    Flexbox,
    FlexboxItem,
    XButton,
    Mcourse,
    Mad,
    Mcity,
    Mcoop,
    Mrecruit,
    Mprofi,
    Mnews,
    Melite,
    Moversea,
    Mabroad,
    Mact,
    Msend,
    Mbenke,
    Yuyue,
    Join
  },
  data() {
    return {
      drawerVisibility: false,
      title: 'title',
      value: 'value',
      showContent1: false,
      showContent2: false,
      showContent3: false,
      showContent4: false,
      index: 0,
      arr: ['Mhome', 'Mcourse', 'Mad', 'Mcity', 'Mcoop', 'Mrecruit', 'Mprofi', 'Mnews', 'Melite', 'Moversea', 'Mabroad', 'Mact', 'Mbenke', 'Msend'],
      dheight: '0px',
      hindex: 999,
      showdailog1: false,
      showdailog2: false,
      formtype: ''
    }
  },
  props: {
    showfrom: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    drawerVisibility: function (val, oldVal) {
      if (val === false) {
        this.dheight = '0px'
        this.hindex = 999
      }
    },
    index: function (val) {
      if (val === 3) {
        this.formtype = '城市合伙人'
      }
      if (val === 4) {
        this.formtype = '企业合作'
      }
      if (val === 5) {
        this.formtype = '社区合伙人'
      }
      console.log(this.formtype)
    }
  },
  computed: {
    currentView() {
      return this.arr[this.index]
    }
  },
  methods: {
    showdrawer() {
      this.drawerVisibility = true
      this.dheight = '100%'
      this.hindex = 556
    },
    change(id) {
      this.index = id
    },
    showContent(id) {
      if (id === 0) {
        this.showContent1 = !this.showContent1
        this.showContent2 = false
        this.showContent3 = false
        this.showContent4 = false
      } else if (id === 1) {
        this.showContent2 = !this.showContent2
        this.showContent1 = false
        this.showContent3 = false
        this.showContent4 = false
      } else if (id === 2) {
        this.showContent3 = !this.showContent3
        this.showContent1 = false
        this.showContent4 = false
        this.showContent2 = false
      } else if (id === 3) {
        this.showContent4 = !this.showContent4
        this.showContent1 = false
        this.showContent3 = false
        this.showContent2 = false
      }
    },
    showstate() {
      this.showdailog = !this.showdailog
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot');
  src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.woff') format('woff'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.svg#iconfont') format('svg');
}
html,body,#app, .mobile{
  height: 100%;
  width: 100%;
  position: relative;
}
ul, li{
  margin: 0px;
  padding: 0px;
}
.footer-wa p{
  color: #fff;
}
.nav{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 18px;
}
.header{
  width: 100%;
  height: 120px;
  position: relative;
}
.header-content{
  position: fixed;
  width: 100%;
  height: 120px;
  top: 0px;
  background-color: #EEEEEE;
}
.header-btn{
  width: 120px;
  height: 120px;
  position: fixed;
  top: 0px;
  left: 0px;
}
.header-btn img{
  width: 74px;
  height: 61px;
  margin: 0 auto;
  margin-top: 25px;
}
.bottom-menu{
  width: 100%;
  height: 101px;
  position: fixed;
  bottom: -1px;
  text-align: center !important;
  box-shadow:10px 0px 10px rgba(0,0,0,0.1);
  background-color: #fff;
}
.vux-flex-row, .vux-flexbox{
  height: 100%;
  text-align: center !important;
  font-size: 25px;
}
.bottom-menu .vux-flexbox-item:last-of-type{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1A6997;
  color: #fff;
}
.toplogo{
  width: 50%;
  height: 100%;
  background: url('..\..\assets\images\mobile\index\logo.png') center no-repeat;
  background-size: contain;
}
.call-icon{
  width: 25px;
}
.vux-drawer {
   display: block;
   position: fixed !important;
   top: 120px;
   left: 0;
   width: 100%;
   z-index: 999;
 }
 .vux-drawer > .vux-drawer-body {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform ease-in-out 0.38s, visibility 0.38s;
 }
.vux-drawer > .vux-drawer-body > .drawer-mask {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
  background-color: rgba(0, 0, 0, 0.3);
}
.vux-drawer > .vux-drawer-body > .vux-drawer-active {
  visibility: visible;
  opacity: 1;
}
.vux-drawer > .vux-drawer-content {
  background-color: #fff;
  position: absolute;
  top: 0;
  height:100%;
  overflow: hidden;
  pointer-events: none;
  visibility: hidden;
  transition: transform ease-in-out 0.38s, visibility 0.38s;
  will-change: none;
}
.vux-drawer > .drawer-left {
  left: 0;
  transform: translateX(-100%);
}
.vux-drawer > .drawer-right {
  right: 0;
  transform: translateX(100%);
}
.vux-drawer > .vux-drawer-active {
  pointer-events: inherit;
  visibility: visible;
  transform: translateX(0%);
}
.menu{
  margin-top: 120px;
  color: #1A6997 !important;
  padding-left: 10px;
}
.vux-label{
  font-size: 28px !important;
}
.vux-label-desc{
  color: #1A6997 !important;
}
.weui-cell{
  background-color: #EEEEEE !important;
}
.weui-cell_access .weui-cell__ft:after{
  height: 15px !important;
  width: 15px !important;
  border-color: #1A6997 !important;
}
.sub-item{
  font-size: 25px !important;
  text-align: center !important;
}
.vux-cell-box{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}
.weui-cell_access.vux-cell-box:after{
  height: 15px !important;
  width: 15px !important;
  border-color: #1A6997 !important;
}
.temp{
  position: absolute;
  top: 0px;
  padding-top: 120px;
  width: 100%;
}
.footer{
  height: 200px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: #F7F7F7;
}
.footer p{
  font-family: 'vux-demo';
  text-align: center;
  color: #666666;
}
.menu .active{
  background-color: #6fac2e !important;
  color: #fff !important;
}
.menu .active span{
  color: #fff !important;
}
.weui-cell_access.vux-cell-box.active:after{
  border-color: #fff !important;
}
</style>
