<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2>Vue路由测试</h2>
  </header>

  <nav>
    <!-- RouterLink来指向访问某个route -->
    <ul class="main-list">
      <!-- 字符串写法 -->
       <!-- replace用于覆盖历史记录，不产生回退 -->
      <RouterLink replace to="/home" class="link" active-class="active">首页</RouterLink>
      <!-- 对象-path写法 -->
      <RouterLink replace :to="{ path: '/news' }" class="link" active-class="active">新闻</RouterLink>
      <!-- 对象-name写法 -->
      <RouterLink replace :to="{ name: 'guanyu' }" active-class="active" class="link">关于</RouterLink>
    </ul>
  </nav>

  <div class="main-content">
    <!-- 声明显示区 -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
header h2 {
  font-size: 30px;
}
header {
  background: linear-gradient(to right, #888888, #ffffff);
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
  border: 2px solid;
  text-align: center;
}
nav .main-list {
  display: flex;
  list-style-type: none;
}
.link {
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;
  background-color: rgb(218, 179, 198);
  color: #000;
  font-weight: 5;
  padding: 10px 30px 10px 30px;
}
.active {
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;
  background-color: hotpink;
  color: #fff;
  font-weight: 5;
  padding: 10px 30px 10px 30px;
}
/* .active{

  background-color:chartreuse;
} */
.main-content {
  width: 90%;
  height: 500px;
  border: 2px solid;
}
</style>
