

<template>
<div class="tolk">

<button @click="getTolk">获取一句土味情话</button>
<ul>
  <li v-for="tolk in tolkList" :key="tolk.id">{{ tolk.title }}</li>
</ul>
</div>
</template>

<script lang="ts" setup>

import { useLoveStore } from '@/store/loveTolk';

const loveTolkStore = useLoveStore();

//频繁loveTolkStore.xxx较为繁琐，通过toStoreRefs响应式解构赋值更简洁，并且比toRefs性能更高
const { tolkList } = loveTolkStore;

function getTolk()
{
  loveTolkStore.getTolk();
}

//当loveTolkStore更新，函数被调用。
loveTolkStore.$subscribe((mutate,state)=>{
  //更新后存储到local storage
  localStorage.setItem("tolkList",JSON.stringify(state.tolkList));
});


</script>

<style scoped>
.tolk{
  margin:20px;
  background-color: rgb(236, 231, 148);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #888;
}
button{
  margin:5px;
  height:30px;
}
</style>
