<template>
  <div class="child1">
    <h2>子组件</h2>
    <h3>玩具：{{ toy }}，父亲的车：{{  }}，</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';

  let toy = ref("小汽车");
  </script>
  <style scoped>
.child1{
width: 500px;
height: 300px;
background-color: rgb(207, 143, 232);
border-radius: 20px;
padding: 20px;
margin: 50px;

}
  </style>