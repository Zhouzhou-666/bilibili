<template>
  <div class="commentitems">
    <div class="commentItem">
      <div class="userImg">
        <img src="../../assets/default_img.jpg" alt="">
      </div>
      <div class="commentContent">
        <p>
          <span>北大青鸟001</span>
          <span>4-27</span>
        </p>
        <div>
          一看你就是张照伟
        </div>
      </div>
    </div>
    <div class="commentItem">
      <div class="userImg">
        <img src="../../assets/default_img.jpg" alt="">
      </div>
      <div class="commentContent">
        <p>
          <span>北大青鸟002</span>
          <span>4-27</span>
        </p>
        <div>
          我觉得也是
        </div>
      </div>
    </div>
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
          我来评论了
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentItem"
  }
</script>

<style scoped lang="less">
  .commentitems{
    padding: 0px 40px;
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