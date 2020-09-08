<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>

  </div>
</template>

<script>
  import register from "./views/register";
  import Login from "./views/Login";
  export default {
    name: 'App',
    components:{
      register,
      Login
    }
  }
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  p{
    margin: 0;
    padding: 0;
  }
</style>
