<!-- 海外留學 -->
<template>
  <div>
    <keep-alive><Header/></keep-alive>
    <div class="banner">
      <keep-alive><Banner/></keep-alive>
      <div class="wrap-dialog twidth" style="width: 1080px;">
        <div class="inner-dialog animated bounceInRight">
          <keep-alive><DialogFrom/></keep-alive>
        </div>
      </div>
    </div>
    <div class="abroad-nav" style="height:230px;">
      <div class="inner-ab-nav twidth" style="width: 1000px;padding-top:40px;">
         <ul class="btn-list">
           <li v-bind:class="[index == 0 ? 'active' : '']" style="width:247px;height:56px;">
            <div class="item-button" name="button" @click="change(0)" style="font-size:18px;padding-top:18px;">低齡留學申請</div>
           </li>
           <li style="width:2px;height:55px;background:rgba(234,234,234,1);"></li>
           <li v-bind:class="[index == 1 ? 'active' : '']" style="width:247px;height:56px;">
            <div class="item-button" name="button" @click="change(1)" style="font-size:18px;padding-top:18px;">本科留學申請</div>
           </li>
           <li style="width:2px;height:55px;background:rgba(234,234,234,1);"></li>
           <li v-bind:class="[index == 2 ? 'active' : '']" style="width:247px;height:56px;">
            <div class="item-button" name="button" @click="change(2)" style="font-size:18px;padding-top:18px;">英国名校概览</div>
           </li>
         </ul>
      </div>
    </div>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'
import Benke from '@/components/abroad/Benke'
import Child from '@/components/abroad/Child'
import School from '@/components/abroad/School'

export default {
  name: 'Abroad',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer,
    Benke,
    Child,
    School
  },
  data() {
    return {
      index: 0,
      arr: ['Child', 'Benke', 'School']
    }
  },
  computed: {
    currentView() {
      return this.arr[this.index]
    }
  },
  methods: {
    change(id) {
      this.index = id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.abroad-nav{
  width: 100%;
  height: 200px;
  border-bottom: 3.5px solid #D2D2D2;
}
.inner-ab-nav{
  height: 200px;
}
ul, li{
  padding: 0px;
  margin: 0px;
}
.btn-list{
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.btn-list .item-button{
  font-size: 40px;
  background-color: inherit;
  padding-bottom: 8px;
}
.btn-list .active{
  color: #fff;
  background: url('..\assets\images\abroad\liuxue\benke\btn.png') center no-repeat;
  background-size: 100% 100%;
  box-shadow:-3px 4px 6px 0px rgba(0,0,0,0.19);
}
</style>
