<template>
<div class="parent4">
  <h1>父组件4</h1>
  <p>钱的数量：{{ money,addMoney }}</p>
  <!-- 把需要给孙子的数据先传给儿子 -->
  <Child4 :money="money" :addMoney="addMoney"/>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Child4 from './Child4.vue';

let money = ref(1000);

function addMoney(){
  console.log("test");
  money.value += 10;
}

</script>

<style scoped>
.parent4{
  width: 800px;
  background-color: aquamarine;
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
}
</style>