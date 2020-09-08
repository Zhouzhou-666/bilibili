<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="detailinfo">
      <div class="video">
        <video controls="controls" :src="model.content"></video>
        <div class="detailinfoText">
          <div>
            <span>{{model.category.title}}</span>
            <span>{{model.name}}</span>
          </div>
          <div>
            <span>{{model.userinfo.name}}</span>
            <span>146.4万次观看</span>
            <span>5281弹幕</span>
            <span>{{model.date}}</span>
          </div>
          <div>
            <p>
              <span class="icon-star-full" ></span>
              <span>收藏</span>
            </p>
            <p >
              <span class="icon-bubble"></span>
              <span>关注</span>
            </p>
            <p>
              <span class="icon-redo2"></span>
              <span>分享</span>
            </p>
          </div>
        </div>
      </div>
      <div class="detailparent">
        <cover class="detailitem" v-for="(item,index) in commendList" :key="index" :detailitem="item"></cover>
      </div>

      <CommentTitle></CommentTitle>
      <comment></comment>
    </div>

  </div>
</template>

<script>

  import NavBar from "../components/common/NavBar";
  import cover from "./cover";
  import CommentTitle from "../components/article/commentTitle";
  import Comment from "../components/article/comment";
  export default {
    name: "Article",
    components: {Comment, CommentTitle, NavBar,cover},
    data(){
      return{
        model:null,
        commendList:null,
      }
    },
    methods:{
      async articleitemData() {
        const res = await this.$http.get('/article/' + this.$route.params.id)
        console.log(res)
        this.model = res.data[0]
      },
      async commendData(){
        const res = await this.$http.get('/commend')
        this.commendList = res.data
      },
    },
    created() {

      this.articleitemData()
      this.commendData();
    },
    watch:{
      $route(){
        this.articleitemData()
        this.commendData();
      }
    }
  }
</script>

<style scoped lang="less">
  .detailinfo{
    background-color: white;
    .video{
      width: 100%;
      video{
        width: 100%;
      }
    }
  }

  .detailinfoText{
    padding: 4.167vw;
    div:nth-child(1) {
      span:nth-child(1) {
        padding:0 2.778vw;
        color: #fb7299;
        background-color: #f4f4f4;
        border-radius: 2.778vw;
      }
    }
    div:nth-child(2) {
      padding: 2.778vw 2.778vw;
      span{
        color: #aaa;
        font-size: 3.333vw;
        margin-right: 2.778vw;
      }
      span:nth-child(1) {
        color: black;
        font-size: 4vw;
        padding-right:2.778vw;
      }
    }
    div:nth-child(3) {
      padding: 0 2.778vw;
      display: flex;

      p{
        margin-right: 10px;
        display: flex;
        align-items: center;
        color: #757575;
        span:nth-child(1) {
          margin-right: 3px;
          font-size: 21px;
        }
        span:nth-child(2) {
          font-size: 13px;
        }
      }
      .activeColor{
        color: #fb7299;
      }
    }

  }
  .detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailitem {
      margin: 1.389vw 0;
      width: 45%;
    }
  }
</style>