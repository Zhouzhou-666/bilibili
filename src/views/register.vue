<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot="right" style="font-size: 13px" @click="$router.push('/login')">切换到注册</div>
    </login-top>
    <login-text label="姓名"
                style="margin:15.001px 0;"
                placeholder="请输入姓名"

                @contentWatch="res => model.name = res"
    >
    </login-text>

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

    <login-btn BtnText="注册" @TextClick="AjaxInsert"></login-btn>
  </div>
</template>

<script>
  import LoginTop from "../components/common/LoginTop";
  import LoginText from "../components/common/LoginText";
  import LoginBtn from "../components/common/LoginBtn";
  import fn from "../../text";

  export default {
    name: "register",
    data(){
      return{
        model:{
          name:'',
          username:'',
          password:''
        }
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
        // let rulg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
        // let regUsername = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        // let regPassword = /^[A-Za-z0-9]{4,10}$/;
        if(rulg.test(this.model.name) && rulg.test(this.model.username)&& rulg.test(this.model.password)){
          const res =  await this.$http.post('/register',this.model)
          this.$msg.fail(res.data.msg)
          localStorage.setItem('token',res.data.objtoken)
          localStorage.setItem('id',res.data.id)
          setTimeout(() => {

            this.$router.push('/login')
          },2000)
        }else{
          this.$msg.fail('格式不正确,请重新输入!')
        }
      }

      }
  }
</script>

<style scoped>

</style>