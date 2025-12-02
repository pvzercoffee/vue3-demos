<template>
<div class="double12">
    <h3 id="double12_text">{{ timeout }}</h3>
</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';

function parseText(time:number,now:number){

  const calculation = time-now;
  const s = calculation/1000;
  const days = Math.floor(s/(60*60*24))
  const hours = Math.floor((s % (60 * 60 * 24))/ (60 * 60))
  const minutes = Math.floor((s % (60 * 60)) / 60)
  const seconds = Math.floor(s % 60)

  return  `${days}天${hours}时${minutes}分${seconds}秒`;
}

let timeout = ref('');
const time = new Date('2025-12-12 00:00:00').getTime();
let interval:any;

onMounted(()=>{
  interval = setInterval(()=>{

  const now = new Date().getTime();
    timeout.value = parseText(time,now);
  },1000);
});

onBeforeMount(()=>{
  clearInterval(interval);
});

</script>

<style scoped>
.double12{
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('@/images/daojishi.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    /* margin:20px; */
}
#double12_text{
    font-size: 30px;
    white-space: pre-wrap;
    text-align: center;

}
</style>