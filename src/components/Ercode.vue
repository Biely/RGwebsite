<template>
  <div class="ercode">
    <keep-alive>
      <Header/>
    </keep-alive>
    <div class="main-content" style="height:800px;">
      <div class="inner-conent" style="width:1080px;margin:0 auto;">
        <div class="code-list">
          <div class="left-block" style="width:263px;height:367px;">
            <img src="..\assets\images\mobile\ercode\xsd.png" alt="" style="width:100px;">
          </div>
          <div class="right-block" style="width:263px;height:367px;">
            <img src="..\assets\images\mobile\ercode\wjd.png" alt="" style="width:100px;">
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <Footer/>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/temple/Header'
import Footer from '@/components/temple/Footer'

export default {
  name: 'Ercode',
  components: {
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content{
  width: 100%;
  background: url('..\assets\images\mobile\ercode\bg@2x.jpg') center no-repeat;
  background-size: cover;
}
.code-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 200px;
}
.left-block{
  background: url('..\assets\images\mobile\ercode\stu.png') center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-block{
  background: url('..\assets\images\mobile\ercode\tea.png') center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
