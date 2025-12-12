<template>
  <div class="grant6">
    <h1>孙组件6-1</h1>
    <p>爷爷的钱：{{ money }}</p>
    <button type="button" @click="spend">花爷爷的钱</button>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';

//注入祖先的数据，参数1是注入祖先提供的名称，参数2是找不到时的默认值
let money = inject('money',0);
const spend = inject('spend',()=>{});

</script>
<style scoped>
.grant6{
  width: 400px;
  height: 200px;
  background-color: rgb(105, 175, 255);
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
}
</style>
