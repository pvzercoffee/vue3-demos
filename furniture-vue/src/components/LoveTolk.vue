

<template>
<div class="tolk">

<button @click="getTolk">获取一句土味情话</button>
<ul>
  <li v-for="tolk in loveTolkStore.tolkList" :key="tolk.id">{{ tolk.title }}</li>
</ul>
</div>
</template>

<script lang="ts" setup>
import axios from "axios"
import {nanoid} from "nanoid"
import { useLoveStore } from '@/store/loveTolk';


const loveTolkStore = useLoveStore();

function getTolk()
{
  loveTolkStore.getTolk();
}


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
