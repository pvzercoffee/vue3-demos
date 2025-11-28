<template>
<div class="parent1">
  <h1>父组件</h1>
  <h1>车：{{ car }}，孩子的玩具：{{  }}</h1>
  <Child1 id="child1" />
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child1 from './child1.vue';

let car = ref("奔驰");
</script>
<style scoped>
.parent1{
width: 800px;
height: 600px;
background-color: aquamarine;
border-radius: 20px;
padding: 20px;
margin: 50px;
}

</style>