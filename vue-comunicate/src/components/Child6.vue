<template>

  <div class="child6">
    <h1>子组件6-1</h1>

    <Grant/>
  </div>

  </template>
  <script setup lang="ts">
  import Grant from './Grant6.vue';
  </script>

  <style scoped>
  .child6{
    width: 500px;
    background-color: rgb(207, 143, 232);
    border-radius: 20px;
    padding: 20px;
    margin: 50px;
  }
  </style>