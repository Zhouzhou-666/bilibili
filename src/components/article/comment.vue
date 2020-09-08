<template>
  <div class="commentParent">
    <div>
      <div class="commentItem">
        <div class="userImg">
          <img src="../../assets/default_img.jpg" alt="">
        </div>
        <div class="commentContent">
          <p>
            <span>蜡笔消息</span>
            <span>4-27</span>
          </p>
          <div>
            我是扣字爷
          </div>
        </div>
      </div>
      <comment-item></comment-item>
    </div>

  </div>
</template>

<script>
  import CommentItem from "./commentItem";
  export default {
    name: "comment",
    components: {CommentItem},
    methods:{
      async commentData(){
        const res = await this.$http.get('/comment/'+ this.$route.params.id)
        if(res.data){
          this.$emit('lengthselect',res.data.length)
        }
      },
      changeCommentData(){
        function fn(temp) {
          let arr1 = [];
          for (var i = 0; i < data.length; i++) {
            if (data[i].parent_id == temp) {
              arr1.push(data[i]);
              data[i].child = fn(data[i].comment_id);
            }
          }
          return arr1;
        }
        return fn(null);
      }
    }
    ,
    created() {
      this.commentData()
    }
  }
</script>

<style scoped lang="less">
  .commentParent {
    padding: 2.778vw 2.778vw;
    > div {
      border-bottom: 0.278vw solid #e7e7e7;
    }
    .commentItem {
      display: flex;
      margin: 2.778vw 0;
      .userImg {
        margin-right: 2.778vw;
        img {
          width: 9.722vw;
          height: 9.722vw;
        }
      }
      .commentContent {
        flex: 1;
        position: relative;
        p {
          font-size: 3.611vw;
          color: #555;
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.389vw;
        }
        div {
          font-size: 3.611vw;
        }
        .publishs{
          position: absolute;
          right: 0;
          color: red;
        }
      }
    }
  }
</style>