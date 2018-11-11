<template>
  <div class="wrap-news">
    <div class="inner-news twidth" style="width: 1000px;padding-top:40px;">
      <ul class="newslist">
       <li class="list-item" v-for="(item, index) in newslist" :key="index" style="height:280px;">
         <a :href="'http://www.rgenglish.net/article/' + item.id">
           <ul class="item-content" style="width: 1000px;">
              <li class="item-left" style="width:340px;height:235px;">
                <div class="item-img" v-bind:style="{backgroundImage:'url(' + styleObj[ index ] + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover', height: '217px', width: '325px'}"></div>
              </li>
              <li class="item-right" style="height:227px;">
                <p class="item-title" style="font-size:20px;">{{ item.title }}</p>
                <p class="item-desc" style="font-size:16px;">{{ item.descr }}</p>
                <p class="item-time"  style="font-size:14px;right: 0px;">發表於:{{ item.created_at }}</p>
              </li>
           </ul>
         </a>
       </li>
      </ul>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="lastpage"
          @current-change="getnews"
          >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newslist: [],
      styleObj: [],
      page: 1,
      lastpage: 99
    }
  },
  created() {
    this.getnews(1)
  },
  methods: {
    getnews(pages) {
      this.$http.get('http://weback.rgenglish.net/api/news', {
        params: {
          page: pages,
          mun: '4'
        }
      }).then((res) => {
        this.newslist = res.data.data
        this.lastpage = res.data.last_page
        var newsdata = this.newslist
        for (let i in newsdata) {
          var url = 'http://weback.rgenglish.net/uploads/' + newsdata[i].thumb
          this.styleObj.push(url)
        }
      })
    }
  }
}
</script>

<style scoped>
ul, li{
  padding: 0px;
  margin: 0px;
}
.newslist{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.list-item{
}
.list-item:last-of-type{
  border-bottom: none;
}
.item-content{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.item-left{
  text-align: right;
  background: url('..\..\assets\images\about\zsk@2x.png') no-repeat;
  background-position: bottom left;
}
.item-img{
  width: 100%;
  height: 100%;
  display: inline-block;
}
.item-right{
  width: 62.5%;
  text-align: left;
  padding-left: 20px;
  position: relative;
}
.item-title{
  font-size: 35px;
}
.item-desc{
  padding-top: 10px;
  font-size: 25px;
  color: #7f7f7f;
  line-height: 1.5;
}
.item-time{
  position: absolute;
  font-size: 18px;
  color: #7f7f7f;
  bottom: 10px;
}
.page{
  margin-bottom: 80px;
}
</style>
