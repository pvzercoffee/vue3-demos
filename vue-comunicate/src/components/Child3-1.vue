<template>
  <div class="child3">
    <h2>子组件3-1</h2>
    <h3>玩具：{{ toy }}</h3>
    <h3>兄弟的电脑：{{ computer }}</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import emitter from '@/utils/emitter';
  import { ref } from 'vue'

  let toy = ref("小汽车");
  let computer = ref('');

  //绑定事件，描述如何取值
  emitter.on('send-computer',(value:any)=>{
    computer.value = value;
  });
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