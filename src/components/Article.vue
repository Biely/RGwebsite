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
    <div class="wrap-article">
      <div class="inner-art twidth" style="width: 1080px;">
        <div v-if="isok === 'ok'">
          <div class="title">
            <p>{{ title }}</p>
            <p class="time">{{ time }}</p>
          </div>
          <div class="descr">
            <p>{{ descr }}</p>
          </div>
          <div class="content">
            <div v-html="content"></div>
          </div>
        </div>
        <div v-else>
          {{content}}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'
import Banner from '@/components/temple/Banner'
import DialogFrom from '@/components/temple/DialogFrom'

export default {
  name: 'About',
  components: {
    Header,
    Banner,
    DialogFrom,
    Footer
  },
  data() {
    return {
      isok: '',
      title: '',
      time: '',
      descr: '',
      content: '暂无内容'
    }
  },
  created() {
    this.$http.get('http://weback.rgenglish.net/api/getone', {
      params: {
        id: this.$route.params.id
      }
    }).then((res) => {
      this.isok = res.data.message
      if (this.isok === 'ok') {
        this.title = res.data.data.title
        this.time = res.data.data.created_at
        this.descr = res.data.data.descr
        this.content = res.data.data.content
      } else {
        this.content = res.data.data
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-article{
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.inner-art{
  padding: 50px 0px;
  background-color: #F8F8F8;
  text-align: left;
}
.title{
  text-align: center;
}
.title p{
  font-size: 40px;
}
.title .time{
  padding-top: 15px;
  font-size: 18px;
  color: #000;
}
.descr{
  padding: 20px 50px;
  font-size: 20px;
  text-indent: 40px;
}
.content{
  padding: 20px 50px;
  font-size: 25px;
}
</style>
