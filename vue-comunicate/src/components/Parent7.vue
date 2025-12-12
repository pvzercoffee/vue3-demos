<template>
<div class="parent">

<Child7 title="热门游戏列表">
  <ul>
    <li v-for="value in gameList" :key="value">{{ value }}</li>
  </ul>
</Child7>
<Child7 title="今日美食城市">
  <img src="../../public/favicon.ico" width="100%" />
</Child7>
<Child7 title="今日影视推荐">
  <h1>加载电影...</h1>
</Child7>
</div>
</template>
<script setup lang="ts">
import Child7 from './Child7.vue';

const gameList = [
  '英雄联盟',
  '王者农药',
  '红色境界',
  '斗罗大陆'
];

</script>

<style scoped>
.parent{

  background-color: #eee;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  /* margin: 50px; */
}
</style>