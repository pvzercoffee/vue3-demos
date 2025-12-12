<template>
  <div class="parent6">
    <h1>父组件6</h1>
    <p>钱的数量：{{ money }}</p>

    <Child/>
  </div>
  </template>
  <script setup lang="ts">
  import { provide, ref } from 'vue';
  import Child from './Child6.vue';

  let money = ref(1000);

  //把修改函数提供给 后代 ，实现孙传子
  function spend(){
    money.value -= 10;
  }

  //向后代提供数据
  provide('money',money);
  provide('spend',spend);

  </script>

  <style scoped>
  .parent6{
    width: 800px;
    background-color: aquamarine;
    border-radius: 20px;
    padding: 20px;
    margin: 50px;
  }
  </style>