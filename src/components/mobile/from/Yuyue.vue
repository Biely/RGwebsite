<template>
  <div class="dialog">
    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '70%', 'background-color': 'transparent', 'z-index': '998'}" :mask-z-index="997">
        <div class="vux-close" @click="showDialogStyle = false">
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </div>
        <div class="dailog-from mwidth">
          <div class="top-title mwidth">
            <img src="..\..\..\assets\images\mobile\form\step1@2x.png" alt="">
          </div>
          <div class="form-content mwidth">
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <x-input title="姓名" v-model="form.name" text-align="right" required></x-input>
            </group>
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <popup-picker title="性别" :data="list1" v-model="form.sex" :popup-style="{'z-index': '999'}"></popup-picker>
            </group>
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <popup-picker title="年龄" :data="list2" v-model="form.age" :popup-style="{'z-index': '999'}"></popup-picker>
            </group>
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <x-input title="手机" type="tel" v-model="form.tel" text-align="right" required></x-input>
            </group>
            <group>
             <x-button :disabled="disable001" @click.native="submitForm(form)">免費體驗</x-button>
            </group>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { XInput, Cell, Picker, XButton, PopupPicker, XDialog, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'

export default {
  name: 'Yuyue',
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch,
    XInput,
    PopupPicker,
    Cell,
    Picker
  },
  props: ['show'],
  data () {
    return {
      showDialogStyle: this.show,
      form: {
        name: '',
        sex: ['男'],
        age: ['0-6岁'],
        tel: ''
      },
      list1: [['男', '女']],
      list2: [['0-6岁', '7-12岁', '13-15岁', '16-18岁', '成人']],
      disable001: false
    }
  },
  watch: {
    show: function(curVal, oldVal) {
      if (curVal === true) {
        this.showDialogStyle = curVal
      } else if (curVal === false) {
        this.showDialogStyle = oldVal
      }
    }
  },
  methods: {
    submitForm(form) {
      console.log(form)
      if (form.name === '') {
        alert('請先輸入姓名')
      } else if (form.tel === '') {
        alert('請先輸入聯繫方式')
      } else if (this.disable001 === false) {
        this.$http.get('http://weback.rgenglish.net/api/enroll', {
          params: {
            name: form.name,
            age: form.age[0],
            sex: form.sex[0],
            tel: form.tel
          }
        }).then((res) => {
          console.log(res.data)
          if (res.data.message === 'ok') {
            alert(res.data.data)
            this.disable001 = true
          } else {
            alert(res.data.data)
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dailog-from{
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  border-top: 15px solid #1A6997;
  padding-bottom: 50px;
}
.form-content{
  width: 90%;
}
.weui-cell{
  font-size: 30px !important;
}
.vux-popup-dialog{
  z-index: 999 !important;
}
.vux-cell-box{
  font-size: 30px !important;
}
.weui-btn_default{
  background-image: url('../../../assets/images/button@2x.png') !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100%;
  color: #fff !important;
  border-radius: 15px !important;
  font-size: 30px !important;
}
.weui-btn_default:hover{
  background-image: url('../../../assets/images/button1@2x.png') !important;
  background-repeat: no-repeat;
  background-size: 100% 100% !important;
}
.vux-close {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 90%;
  margin: 0 auto;
  text-align: right;
}
</style>
