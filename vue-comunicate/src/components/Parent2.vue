<template>
  <div class="parent2">
    <h1>父组件2</h1>
    <h1>车：{{ car }}，孩子的玩具：{{ toy }}</h1>
    <!-- 使用子组件的同时绑定子组件定义的事件 -->
    <Child2 id="child1" @send-toy="saveToy"/>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Child2 from './Child2.vue';

  let car = ref("奔驰");
  let toy = ref('');

  //在子组件约定的形参里取得子组件的数据，实现子传父
  function saveToy(value:string){
    toy.value = value;
  }

  </script>
  <style scoped>
  .parent2{
    width: 800px;
    height: 400px;
    background-color: aquamarine;
    border-radius: 20px;
    padding: 20px;
    margin: 50px;
  }

  </style>