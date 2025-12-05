<template>
<div class="parent1">
  <h1>父组件</h1>
  <h1>车：{{ car }}，孩子的玩具：{{  }}</h1>
  <Child1 id="child1" :car="car" :sendToy="sendToy"/>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Child1 from './Child1.vue';

let car = ref("奔驰");
let toy = ref();

//把这个函数发给子，带有的参数可以被子组件接收到
function sendToy(value:string){
  toy.value = value;
}
</script>
<style scoped>
.parent1{
width: 800px;
height: 400px;
background-color: aquamarine;
border-radius: 20px;
padding: 20px;
margin: 50px;
}

</style>