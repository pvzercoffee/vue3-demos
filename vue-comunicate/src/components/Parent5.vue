<template>
  <div class="parent5">
    <h1>Parent component 5</h1>
    <button type="button" @click="changeBook($refs)" >给所有儿子添加课本</button>
    <Child5_1 id="child1" ref="c1"/>
    <Child5_2 id="child2" ref="c2"/>

  </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Child5_1 from './Child5-1.vue';
  import Child5_2 from './Child5-2.vue'

  const c1 = ref();
  const c2 = ref();

  const changeBook = (refs:any)=>{
    for (const key in refs) {
      refs[key].book += 2;
    }
  }

  const getAllChilds = (x:any)=>{
    console.log(x);
  }


  </script>
  <style scoped>
  .parent5{
    width: 800px;
    background-color: aquamarine;
    border-radius: 20px;
    padding: 20px;
    margin: 50px;
  }

  </style>