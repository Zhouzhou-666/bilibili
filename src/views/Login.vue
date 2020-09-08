<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div slot="right" style="font-size: 13px" @click="$router.push('/register')">切换到注册</div>
    </login-top>

    <login-text label="账号"
                placeholder="请输入账号"
                @contentWatch="res => model.username = res"
    >
    </login-text>

    <login-text label="密码"
                placeholder="请输入密码"
                type="password"

                @contentWatch="res => model.password = res"
    >
    </login-text>

    <login-btn BtnText="登录" @TextClick="AjaxInsert"></login-btn>
  </div>
</template>

<script>
  import LoginTop from "../components/common/LoginTop";
  import LoginText from "../components/common/LoginText";
  import LoginBtn from "../components/common/LoginBtn";

  export default {
    data(){
      return{
        model:{}
      }
    },
    components:{
      LoginBtn,
      LoginTop,
      LoginText
    },
    methods:{
      async AjaxInsert() {
        let rulg = /^.{6,16}$/
        if(rulg.test(this.model.username)&&rulg.test(this.model.password)){
          const res =  await this.$http.post('/login',this.model)
          this.$msg.fail(res.data.msg)
          if(res.data.code == 301 || res.data.code == 302){
            return
          }
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('id',res.data.id)
          setTimeout(() => {
            this.$router.push('/userinfo')
          },1000)
        }else{
          this.$msg.fail('格式不正确,请重新输入!')
        }
      }
    }

  }
</script>

<style scoped>

</style>