<template>
  <div class="child3">
    <h2>子组件3-2</h2>
    <!-- 提供方决定何时触发绑定事件，也就是决定何时传递数据 -->
    <h3 @click="emitter.emit('send-computer',computer)">电脑：{{ computer }}</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import emitter from '@/utils/emitter';
  import { ref } from 'vue'

  let computer = ref("机械革命");

  </script>
  <style scoped>
    .child3{
    width: 500px;
    height: 160px;
    background-color: rgb(207, 143, 232);
    border-radius: 20px;
    padding: 20px;
    margin: 50px;

    }
  </style>