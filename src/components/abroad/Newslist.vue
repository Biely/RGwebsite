<template>
  <div class="news">
    <ul class="news-ul">
      <li v-for="(item, index) in newslist" :key="index">
        <a :href="'http://www.rgenglish.net/article/' + item.id">
          <div class="topimg" v-bind:style="{backgroundImage:'url(' + styleObj[ index ] + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'cover'}">
          </div>
          <p class="title" style="font-size:18px;height:40px;">{{ item.title }}</p>
          <p class="descr" style="font-size:13px;height:63px;">{{ item.descr }}</p>
          <p class="tips" style="font-size:12px;">
            <span class="a" style="padding:5px;">英國低齡留學生活</span>
            <span class="b" style="padding:5px;">英國低齡留學資訊</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nweslist',
  data() {
    return {
      newslist: [],
      styleObj: [],
      page: 1
    }
  },
  created() {
    this.$http.get('http://weback.rgenglish.net/api/news', {
      params: {
        page: this.page,
        mun: '4',
        cat: 'liuxue'
      }
    }).then((res) => {
      this.newslist = res.data.data
      var newsdata = this.newslist
      for (let i in newsdata) {
        var url = 'http://weback.rgenglish.net/uploads/' + newsdata[i].thumb
        this.styleObj.push(url)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li{
  padding: 0px;
  margin: 0px;
}
.news{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
}
.news-ul{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.news-ul li{
  width: 24%;
  height: 100%;
  background-color: #EEEEEE;
  text-align: left;
}
li .topimg{
  width: 100%;
  height: 180px;
  background-size: cover;
}
li .title{
  padding: 10px;
  font-size: 25px;
  height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
li .descr{
  padding: 10px;
  font-size: 20px;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
li:hover{
  border: 1px solid #1A6997;
}
.tips{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.tips span{
  color: #fff;
}
.tips .a{
  background:#1A6997;
  border-radius:8px;
}
.tips .b{
  background:#6FAC2E;
  border-radius:8px;
}
</style>
