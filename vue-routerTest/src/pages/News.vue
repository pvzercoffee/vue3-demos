<template>
  <h1>新闻...</h1>
  <div class="news">
    <ol>
      <li v-for="value in news">
        <button class="to_detail" @click="toDetail(value)">查看详情</button>
        <RouterLink replace :to="{
          name:'detail',
          query:{
            id:value.id,
            title:value.title,
            detail:value.detail
            }
          } "  class="active">
          
          {{ value.title }}

        </RouterLink>
      </li>
    </ol>

    <div class="show">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style scoped>
.news {
  display: flex;
}
.active {
  color: rgb(52, 96, 7);
  font-weight: 800;
  font-size: 18px;
  line-height: 40px;
  width: 40%;
}
.show {
  width: 40%;
  margin-left: 300px;
}
.to_detail{
  width:100px;
  height:30px;
  background-color: rgb(52, 96, 7);
  color:#fff;
  border:2px solid #fff;
  margin-right:10px;
}
</style>
<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

interface Detail{
  id:string,
  title:string,
  detail:string
}

let news = reactive([
  { id: 'adhoiqh01', title: '你好，出现大事不好了！', detail: '其实倒也没事什么' },
  { id: 'adhoiqh01', title: '我确确实实是缺少了一些东西', detail: '原来是缺少了这些东西' },
  { id: 'adhoiqh01', title: '到底为什么会这样？', detail: '这样的情况在地球上还是第一次出现' },
  { id: 'adhoiqh01', title: '恭喜你恭喜你中大奖了！', detail: '得到这个大奖的人实在是有福了！！' },
])

//编程式路由导航，在router中有replace和push，均对标标签路由导航写法
const router = useRouter();
function toDetail(news:Detail)
{
  router.replace({
    name:'detail',
    query:{
      id:news.id,
      title:news.title,
      detail:news.detail
    }
  });
}
</script>
