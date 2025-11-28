

<template>
<div id="comp">
<h2>当前求和为：{{ sum }} 放大十倍后是{{ big10Sum }}</h2>
<select v-model.number="n">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<button @click="add">加</button>
<button @click="subtract">减</button>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useCountToolStore} from '@/store/countTool'
import { storeToRefs } from 'pinia';

const countToolStore = useCountToolStore();
//两种方式都可以拿到state中的数据
// countToolStore.$state.sum
// countToolStore.sum

//countToolStore.xxx较为繁琐，通过toStoreRefs响应式解构赋值更简洁，并且比toRefs性能更高
const { sum,big10Sum } = storeToRefs(countToolStore);


const n = ref(1);

function add()
{
  //深层次的ref会解体
  //修改数据的三种方式：
  //第一种：直接修改
  // countToolStore.sum  += n.value;

  //第二种：$patch批量修改
  /*
  countToolStore.$patch({
     sum:countToolStore.sum+n.value
   });
  */
 //第三种：使用actions(需要在store里定义)
 countToolStore.increment(n.value);

}
function subtract()
{
  countToolStore.sum  -= n.value ;
}
</script>

<style scoped>
#comp{
  background-color: rgb(175, 202, 230);
  margin:20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px #888;
}
button{
  margin:5px;
  width: 40px;
  height:30px;
}
</style>
