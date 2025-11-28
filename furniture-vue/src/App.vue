<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import MainNav from './components/MainNav.vue';
import MainFooter from './components/MainFooter.vue';
import {RouterView} from 'vue-router'


</script>

<template>
  <MainHeader />
  <MainNav />
  <div class="main-content">
    <RouterView class="main-content"></RouterView>
  </div>

  <MainFooter />
</template>

<style scoped>
@import url('@/styles/global.css');

.main-content{
  /* height: 500px; */
}
</style>
