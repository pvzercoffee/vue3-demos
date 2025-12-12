<template>
<div class="child">
<h1 class="title">{{props.title}}</h1>
<slot></slot>
</div>
</template>
<script setup lang="ts">
const props = defineProps(['title']);
</script>

<style scoped>
.child{
  width: 300px;
  background-color:lightskyblue;
  border-radius: 20px;
  padding: 20px 0 20px 0;
  /* margin: 50px; */
}
.title{
  background-color: goldenrod;
  font-size: 25px;
}
</style>