<template>
  <div class="page-board">
      <Carousel />
      <h1 class="path">首页>>在线留言</h1>
      <div class="board">
          <h2 class="title-big">在线留言</h2>
          <hr class="color-hr">
          <div class="board-card">
              <div class="card-left">
                <ul class="serve-list">
                      <li v-for="category in categoryList" :key="category.value"><button class="item-btn">{{ category.item }}</button></li>
                  </ul>
                  <div class="left-img"></div>
              </div>
              <div class="card-empty"></div>
              <div class="card-right">
                  <h3 class="text-big">您可以留下您宝贵的意见，我们会在第一时间回复您，谢谢关注！</h3>
                  <form action="#" method="post">
                      <h4 class="font-text">您的姓名<span class="redstar">*</span></h4>
                      <input type="text" autocomplete="name">
                      <h4 class="font-text">您的电话<span class="redstar">*</span></h4>
                      <input type="text" autocomplete="tel">
                      <h4 class="font-text">您的邮箱<span class="redstar">*</span></h4>
                      <input type="text" autocomplete="email">
                      <h4 class="font-text">咨询项目<span class="redstar">*</span></h4>

                      <span class="font-text">
                        <input type="checkbox" v-model="isSelectAll">全选
                      </span>

                      <span class="font-text" v-for="category in categoryList" :key="category.item">

                        <input type="checkbox" v-model="category.status">{{ category.item }}
                      </span>

                      <h4 class="font-text"style="margin-top: 60px;">咨询内容<span class="redstar">*</span></h4>
                      <p class="font-text" id="word_count" :style="{'color':hintColor}">{{ hint }}</p>
                      <textarea id="msg_area" v-model="msg"></textarea>
                      <br>
                      <input type="submit" value="提交">
                  </form>

              </div>
          </div>
      </div>
    </div>
</template>
<script setup lang="ts">

import Carousel from '@/components/Carousel.vue';
import { HintColors } from '@/constants/HintColors';
import '@/styles/board.css'
import { computed, reactive, ref, watch } from 'vue';


const categoryList = reactive([

{
  item: '床上用品',
  value: 'bedding',
  status: false
},
{
  item: '家居饰品',
  value: 'decorations',
  status: false
},
{
  item: '居家日用',
  value: 'daily',
  status: false
},
{
  item: '家居收纳',
  value: 'storage',
  status: false
},
{
  item: '厨房收纳',
  value: 'kitchenStorage',
  status: false
},
{
  item: '厨房餐饮',
  value: 'catering',
  status: false
}
]);

const isSelectAll = ref(false);

watch(isSelectAll,()=>{
categoryList.forEach((value,index)=>{
  value.status = isSelectAll.value;
});
})

const maxInput = 100;
let hintColor = ref(HintColors.normal)

let msg = ref('');
let hint = ref(`你还能输入${maxInput}个字`);

const words = computed(()=>{
return maxInput - msg.value.length
});

watch(words,()=>{
if(words.value < 0)
{
  hint.value = `您已超出${-words.value}个字`
  hintColor.value = HintColors.illegal
  return;
}

hint.value = `您还可以输入${words.value}个字`
hintColor.value = HintColors.legal

});

</script>
