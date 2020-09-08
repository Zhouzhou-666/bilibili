<template>
  <div @click="bannerClick">
    <div class="editBanner">
      <span>{{left}}</span>
      <span><slot name="right"></slot></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "editBanner",
    props:['left'],
    methods:{
      bannerClick(){
        this.$emit('bannerClick')
      }
    }
  }
</script>

<style scoped lang="less">
  .editBanner{
    background-color: white;
    padding: 15px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    display: flex;
    color: #999;
    justify-content: space-between;
    align-items: center;
  }
</style>