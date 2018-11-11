<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
}
p{
  margin: 0px;
  padding: 2px 0px;
}
a{
  text-decoration: none;
  color: #000;
}
ul,li{
  list-style: none;
  margin: 2px;
}
.twidth{
  width: 1080px;
  margin: 0 auto;
}
.mwidth{
  margin: 0 auto;
}
.mwidth img{
  width: 100%;
  height: auto;
}
.clear{
  clear: both;
}
.banner{
  height: auto;
  width: 100%;
  position: relative;
  background-color: #fff;
}
/* NOTE:  */
.wrap-dialog{
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
/* NOTE:  */
.inner-dialog{
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 999;
  display: flex;
  align-items: center;
  height: 100%;
}
.dialog-form .el-radio-button__inner{
  width: 100% !important;
}
.dialog-form .el-select{
  width: 100% !important;
}
.dialog-form .el-input__inner{
  background-color: #fff;
}
.top-box{
  padding-top: 80px;
  padding-bottom: 50px
}
.top-box img{
  width: 50%;
  height: auto;
}
.left-box{
  width: 100%;
}
.left-box img{
  height: 100px;
  width: auto;
  display: block;
  text-align: left;
}
.tp50{
  padding-top: 80px;
}
.container{
  width: 100%;
}
.vux-popup-picker-select{
  width: 95% !important;
}
.vux-popup-header{
  height: 80px !important;
  font-size: 30px !important;
  line-height: 2.5 !important;
}
.el-input-group__prepend{
  font-size: 20px !important;
}
.el-radio-button__inner{
  font-size: 20px !important;
}
.el-input__inner{
  font-size: 20px !important;
}
.el-select-dropdown__list, .el-select-dropdown__item.selected, .el-select-dropdown__item{
  font-size: 20px !important;
}
.el-input--medium .el-input__inner{
  height: 50px;
  background-color: #fff;
}
.joinform .el-form-item__label{
  font-size: 22px;
  padding-bottom: 5px;
}
.dialog-form .area-select.large{
  width: 100% !important;
  line-height: 2 !important;
  height: 50px !important;
}
.joinform .area-select.large{
  width: 100% !important;
  line-height: 1.7 !important;
  height: 39px !important;
}
.nav-box li{
  color: #222 !important;
}
.dform .el-dialog__header{
  padding: 0px !important;
}
.dform .el-dialog__body{
  padding: 0px !important;
}
</style>
