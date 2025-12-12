<template>
  <div class="grant4">
    <h1>孙组件4-1</h1>
    <p>爷爷的钱：{{ props.money }}</p>
    <!-- 调用爷爷的修改函数，间接实现孙传子 -->
    <button type="button" @click="props.addMoney">给祖先的钱增加一些</button>
  </div>
</template>
<script setup lang="ts">
//最终孙子接收数据，得到祖先的值
const props = defineProps(['money','addMoney']);

</script>
<style scoped>
.grant4{
  width: 400px;
  height: 200px;
  background-color: rgb(105, 175, 255);
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
}
</style>
