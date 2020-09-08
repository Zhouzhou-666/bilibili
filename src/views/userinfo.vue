<template>
  <div class="userinfo">
    <NavBar></NavBar>
    <img src="../assets/bannerTop_new.png" class="backImg">
    <user-detail :userInfo="model"/>
    <user-article></user-article>
  </div>
</template>

<script>

  import NavBar from "../components/common/NavBar";
  import UserDetail from "../components/userComponent/userDetail";
  import userArticle from "../components/userComponent/userArticle";
  export default {
    components: {UserDetail, NavBar,userArticle},
    data(){
      return{
        model:{}
      }
    }
    ,
    methods:{
      async userData() {
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0]
      }
    },
    created() {
      this.userData()
    }
  }
</script>

<style lang="less">
  .userinfo{
    .backImg{
      height: 91px;
      width: 100%;
    }
  }
</style>