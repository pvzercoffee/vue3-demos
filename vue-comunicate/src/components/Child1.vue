<template>
  <div class="child1">
    <h2>子组件</h2>
    <h3>玩具：{{ toy }}，父亲的车：{{ props.car }}，</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'

  let toy = ref("小汽车");

  //定义需要父组件传递的所有变量
  const props = defineProps(['car','sendToy']);
  //子组件可以需要一个函数，父组件可以拿走函数参数，实现子传父
  props.sendToy(toy.value);
  </script>
  <style scoped>
    .child1{
    width: 500px;
    height: 160px;
    background-color: rgb(207, 143, 232);
    border-radius: 20px;
    padding: 20px;
    margin: 50px;

    }
  </style>