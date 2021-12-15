<template>
  <router-link to="/aa">Go to aa</router-link>
  <router-link to="/bb">Go to bb</router-link>
  <router-view></router-view>
  
<div id="container"></div>
</template>
<script setup>
import { onMounted } from '@vue/runtime-core';
import start from "./qiankun";

// 启动 qiankun
onMounted(()=>{
    start();
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.__dumi-default-navbar {
  background-color: aqua !important;
}
</style>
