<template>

<div class="child4">
  <h1>子组件4-1</h1>
  <!-- 儿子若不接收父亲的数据，就会被封装到$attrs，把它传给孙子就能让孙子得到数据 -->
  <Grant4 v-bind="$attrs"/>
</div>

</template>
<script setup lang="ts">
import Grant4 from './Grant4.vue';
</script>

<style scoped>
.child4{
  width: 500px;
  background-color: rgb(207, 143, 232);
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
}
</style>