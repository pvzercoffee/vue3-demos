<template>
<nav>
    <div class="logo"></div>
    <ul class="items">

        <li><RouterLink replace :to="{name:'home'}" class="nav-link">首页</RouterLink></li>
        <li><RouterLink replace :to="{name:'show'}" class="nav-link">产品展示</RouterLink></li>
        <li><RouterLink replace :to="{name:'about'}" class="nav-link">关于我们</RouterLink></li>
        <li><RouterLink replace :to="{name:'board'}" class="nav-link">在线留言</RouterLink></li>
        <li><RouterLink replace :to="{name:'login'}" class="nav-link">登录注册</RouterLink></li>

    </ul>
</nav>
</template>

<script lang="ts" setup>
import {RouterLink} from 'vue-router'


</script>

<style scoped>
nav{
    width:100%;
    height: 70px;
    background-color:rgb(253, 235, 216);
    overflow: hidden;
    z-index: 999;
    display: flex;
}
.logo{
    width: 150px;
    height: 30px;
    margin:20px 20px;
    background-image: url('../images/logo.png');
    background-size: 100px 100%;
    background-repeat: no-repeat;
    margin-right: 20%;;
}

.items{
    display: flex;
    list-style-type: none;
    gap: 30px;
    z-index: 999;
    line-height: 40px;
    flex: 1;
}
.nav-link:link,.footer-link{
    text-decoration: none;
    border-radius: 5px;
}
.nav-link:hover,.nav-link:active{
    /* text-decoration: underline; */
    background-color: rgb(233, 203, 172);
    /* box-shadow: 2px 2px 15px 2px #666; */
}
.nav-link{
    color: #000;
    background-color: rgb(253, 235, 216);
    padding: 10px;
}
.footer-link{
    color: #fff;
}
</style>