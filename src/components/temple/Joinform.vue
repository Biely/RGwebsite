<template>
  <el-container style="height: 100%;">
    <div class="joinform" label-width="0px" style="width:100%;height:100%;">
      <div class="top-join">
        <p>加盟申请
          <span>APPLICATION FOR JOINING</span>
        </p>
      </div>
      <div class="f-content">
        <el-form ref="form" :label-position="labelPosition" label-width="80px" :model="form" :rules="rules" :disabled="flag">
            <el-form-item label="姓名" prop="name" :inline-message="true">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tel" :inline-message="true">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="所在地区">
              <area-cascader v-model="form.selected" :level='1' type='text' :data="pcaa"></area-cascader>
            </el-form-item>
            <el-form-item style="margin-bottom:15px;">
              <el-button type="primary" @click="submitForm('form')" round>免費體驗</el-button>
            </el-form-item>
          </el-form>
      </div>
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
      labelPosition: 'top',
      form: {
        name: '',
        selected: ['广东省', '深圳市', '南山区'],
        tel: ''
      },
      type: '',
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
  mounted: function() {
    this.formtype()
  },
  methods: {
    submitForm(form) {
      let that = this
      this.$refs[form].validate(function (valid) {
        if (valid && that.flag === false) {
          var arr = that.form.selected
          arr = arr.join(',')
          console.log(arr)
          that.$http.get('http://weback.rgenglish.net/api/zs', {
            params: {
              name: that.form.name,
              tel: that.form.tel,
              where: arr,
              type: that.type
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
    },
    formtype() {
      if (this.$route.name === '城市合伙人') {
        this.type = '城市合伙人'
      }
      if (this.$route.name === '社区合伙人') {
        this.type = '社区合伙人'
      }
      if (this.$route.name === '企业合作') {
        this.type = '企业合作'
      }
    }
  }
}
</script>
<style scoped>
.joinform{
  background-color: #F4F4F4;
  border-radius: 15px;
  border-top: 15px solid #1A6997;
}
.f-content{
  text-align: left;
  width: 90%;
  margin: 15px auto;
}
.el-button--primary{
  display: block;
  text-align: center;
  margin: 10px auto;
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
.top-join{
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0px;
  box-shadow: 1px 3px 10px #BDBDBD;
}
.top-join p{
  font-size: 35px;
}
.top-join span{
  font-size: 18px;
  text-align: justify;
}
</style>
