<template>
  <el-container>
    <div class="dialog-form" label-width="0px" style="width:260px;">
      <div class="form-title"><p>免费领取</p><p>价值399元1v1口语课</p></div>
      <el-form ref="form" :model="form" :rules="rules" size="medium" :disabled="flag">
        <el-form-item style="margin-bottom:10px;" prop="name" :inline-message="true">
          <el-input v-model="form.name">
             <template slot="prepend">姓名</template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;">
          <el-radio-group v-model="form.radio" fill="#1A6997">
            <el-radio-button label="男"></el-radio-button>
            <el-radio-button label="女"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;">
          <el-select v-model="form.value" placeholder="请选择年龄">
            <el-option
              v-for="item in form.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <area-cascader v-model="form.selected" :level='1' type='text' :data="pcaa" style="text-align:left;"></area-cascader>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;" prop="tel" :inline-message="true">
          <el-input v-model="form.tel">
             <template slot="prepend">手机</template>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px;">
          <el-button type="primary" @click="submitForm('form')" round>免費體驗</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>

<script>
import { AreaSelect } from 'vue-area-linkage'
import { pca, pcaa } from 'area-data'

export default {
  name: 'DialogFrom',
  component: {
    AreaSelect: AreaSelect
  },
  data() {
    return {
      pca: pca,
      pcaa: pcaa,
      flag: false,
      form: {
        name: '',
        radio: '男',
        options: [{
          value: '0-6岁',
          label: '0-6岁'
        }, {
          value: '7-12岁',
          label: '7-12岁'
        }, {
          value: '13-15岁',
          label: '13-15岁'
        }, {
          value: '16-18岁',
          label: '16-18岁'
        }, {
          value: '成人',
          label: '成人'
        }],
        value: '0-6岁',
        tel: '',
        selected: ['广东省', '深圳市', '南山区']
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请填写联系方式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(form) {
      let that = this
      this.$refs[form].validate(function (valid) {
        if (valid && that.flag === false) {
          var arr = that.form.selected
          arr = arr.join(',')
          that.$http.get('http://weback.rgenglish.net/api/enroll', {
            params: {
              name: that.form.name,
              age: that.form.value,
              sex: that.form.radio,
              where: arr,
              tel: that.form.tel
            }
          }).then((res) => {
            console.log(res.data)
            if (res.data.message === 'ok') {
              alert(res.data.data)
              that.flag = true
            } else {
              alert(res.data.data)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.dialog-form{
height:100%;
background:rgba(255,255,255,1);
opacity:0.9;
border-radius:10px;
z-index: 3000;
padding-left: 20px;
padding-right: 20px;
border-top: 10px solid #1A6997;
padding-top: 0px;
padding-bottom: 20px;
text-align: center;
}
.form-title{
  font-size: 30px;
  padding-top: 15px;
  padding-bottom: 20px;
}
.form-title p{
  margin: 0 0;
}
.el-radio-group{
  width: 100%;
}
.el-radio-button{
  width: 50% !important;
}
.el-button--medium.is-round{
  width: 90%;
  height: 50px;
  font-size: 25px;
  background-image: url('../../assets/images/button@2x.png');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: #1A6997; */
  box-shadow:-5px 5px 5px rgba(0,0,0,0.32);
  border: #fff;
}
.el-button:hover{
  background-image: url('../../assets/images/button1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
