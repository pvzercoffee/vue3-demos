<template>
  <div class="child2">
    <h2>子组件2</h2>
    <h3>玩具：{{ toy }}</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'

  let toy = ref("小汽车");

  //子传父方式二：自定义事件
  //先定义事件名
  const emit = defineEmits(["send-toy"]);

  //在需要的时候执行定义的事件
  emit('send-toy',toy);

  </script>
  <style scoped>
    .child2{
    width: 500px;
    height: 160px;
    background-color: rgb(207, 143, 232);
    border-radius: 20px;
    padding: 20px;
    margin: 50px;

    }
  </style>