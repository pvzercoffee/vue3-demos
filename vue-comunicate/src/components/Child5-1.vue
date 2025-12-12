<template>
  <div class="child5">
    <h2>Child component 5-1</h2>
    <h3>toy:{{ toy }}</h3>
    <h3>books:{{ book }}</h3>
  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'

  let toy = ref("小汽车");
  let book = ref(3);

  defineExpose({
    toy,
    book
  });

  </script>
  <style scoped>
    .child5{
    width: 500px;
    height: 160px;
    background-color: rgb(207, 143, 232);
    border-radius: 20px;
    padding: 20px;
    margin: 50px;

    }
  </style>