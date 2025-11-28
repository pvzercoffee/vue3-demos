<template>
  <h1>详情</h1>
  <p>编号：{{ id }}</p>
  <p>标题：{{ title }}</p>
  <p>内容：{{ detail }}</p>
</template>
<script lang="ts" setup>

defineProps(['id','title','detail']);
 

</script>
