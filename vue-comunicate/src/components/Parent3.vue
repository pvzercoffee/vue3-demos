<template>
  <div class="parent3">

    <!-- 使用子组件的同时绑定子组件定义的事件 -->
    <Child3_1 id="child1"/>
    <Child3_2 id="child2"/>

  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Child3_1 from './Child3-1.vue';
  import Child3_2 from './Child3-2.vue'

  let car = ref("奔驰");
  let toy = ref('');



  </script>
  <style scoped>
  .parent3{
    width: 800px;
    background-color: aquamarine;
    border-radius: 20px;
    padding: 20px;
    margin: 50px;
  }

  </style>