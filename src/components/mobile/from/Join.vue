<template>
  <div class="dialog">
    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '70%', 'background-color': 'transparent', 'z-index': '998'}" :mask-z-index="997">
        <div class="vux-close" @click="showDialogStyle = false">
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </div>
        <div class="dailog-from mwidth">
          <div class="top-title mwidth">
            <img src="..\..\..\assets\images\mobile\coop\step711@2x.png" alt="">
          </div>
          <div class="form-content mwidth">
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <x-input title="姓名" v-model="form.name" text-align="right" required></x-input>
            </group>
            <group label-width="2.5em" label-margin-right="2em" label-align="justify">
              <x-input title="手机" type="tel" v-model="form.tel" text-align="right" required></x-input>
            </group>
            <group label-width="4em" label-margin-right="2em" label-align="justify">
              <x-address title="所在地区" v-model="form.where" raw-value :list="addressData" value-text-align="left" :popup-style="{'z-index': '999'}"></x-address>
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
import { XInput, Cell, ChinaAddressV4Data, Picker, XButton, PopupPicker, XDialog, Group, ChinaAddressData, XAddress, XSwitch, TransferDomDirective as TransferDom, Value2nameFilter as value2name } from 'vux'

export default {
  name: 'Join',
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
    Picker,
    ChinaAddressData,
    XAddress,
    ChinaAddressV4Data
  },
  props: [
    'show',
    'type'
  ],
  data () {
    return {
      showDialogStyle: this.show,
      form: {
        name: '',
        tel: '',
        where: ['广东省', '深圳市', '南山区'],
        type: this.type
      },
      disable001: false,
      addressData: ChinaAddressV4Data
    }
  },
  watch: {
    show: function(curVal, oldVal) {
      if (curVal === true) {
        this.showDialogStyle = curVal
      } else if (curVal === false) {
        this.showDialogStyle = oldVal
      }
      this.disable001 = false
    },
    type: function (val) {
      this.form.type = val
    }
  },
  methods: {
    submitForm(form) {
      if (form.name === '') {
        alert('請先輸入姓名')
      } else if (form.tel === '') {
        alert('請先輸入聯繫方式')
      } else if (this.disable001 === false) {
        this.$http.get('http://weback.rgenglish.net/api/zs', {
          params: {
            name: form.name,
            tel: form.tel,
            where: this.getName(form.where),
            type: form.type
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
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
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
