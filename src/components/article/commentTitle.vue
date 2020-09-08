<template>
   <div  class="comment">
      <p class="comment-title">
        <span>评论</span>
        <span>(29839)</span>
      </p>
     <div class="commentMyinfo">
       <img :src="myuser.user_img" v-if="myuser">
       <img src="../../assets/default_img.jpg" v-else/>
       <input type="text" placeholder="说点什么">
        <button @click="cmmentPublish">发表</button>
     </div>
   </div>
</template>

<script>
  export default {
    data(){
      return{
        myuser:null
      }
    },
    methods:{
      async myeUsrinfo(){
        const res = await this.$http.get('/user/' + localStorage.getItem('id'))
        console.log(res)
        this.myuser = res.data[0]
      },
      cmmentPublish(){
        if(!this.myuser && !localStorage.getItem('token') && !localStorage.getItem('id')){
          this.$msg.fail("请登录")
          return
        }
      }
    },
    created() {
      if(localStorage.getItem('token')){
        this.myeUsrinfo()
      }
    }
  }
</script>

<style scoped lang="less">
  .comment{
    padding: 30px 10px 0 10px;
    .comment-title{
      span:nth-child(2){
        color: #aaa;
        margin-left: 10px;
      }
    }
    .commentMyinfo{
      padding: 10px 0;
      display: flex;
      img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      input{
        outline: none;
        border: 0;
        background-color: #f4f4f4;
        border-radius: 13px;
        margin-left: 10px;
        padding: 0 20px 0 15px;
      }
      button{
        outline: none;
        border: 0;
        border-radius: 3.333vw;
        background: #fb7299;
        color: white;
        font-size: 3.333vw;
        padding: 0 4.167vw;
      }
    }
  }
</style>