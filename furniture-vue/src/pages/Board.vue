<template>
    <MainBanner />
    <div class="page-board">
        <h1 class="path">首页>>在线留言</h1>
        <div class="board">
            <h2 class="title-big">在线留言</h2>
            <hr class="color-hr">
            <div class="board-card">
                <div class="card-left">
                    <ul class="serve-list">
                        <li><button class="item-btn">床上用品</button></li>
                        <li><button class="item-btn">家居饰品</button></li>
                        <li><button class="item-btn">居家日用</button></li>
                        <li><button class="item-btn">家居收纳</button></li>
                        <li><button class="item-btn">厨房收纳</button></li>
                        <li><button class="item-btn">厨房餐饮</button></li>
                    </ul>
                    <div class="left-img"></div>
                </div>
                <div class="card-empty"></div>
                <div class="card-right">
                    <h3 class="text-big">您可以留下您宝贵的意见，我们会在第一时间回复您，谢谢关注！</h3>
                    <form action="#" method="post">
                        <h4 class="font-text">您的姓名<span class="redstar">*</span></h4>
                        <input type="text">
                        <h4 class="font-text">您的电话<span class="redstar">*</span></h4>
                        <input type="text">
                        <h4 class="font-text">您的邮箱<span class="redstar">*</span></h4>
                        <input type="text">
                        <h4 class="font-text">咨询项目<span class="redstar">*</span></h4>

                        <input type="checkbox" value="all">
                        <span class="font-text">全选</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">床上用品</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">家居饰品</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">居家日用</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">家居收纳</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">厨房收纳</span>

                        <input type="checkbox" value="bed">
                        <span class="font-text">厨房餐饮</span>

                        <h4 class="font-text"style="margin-top: 60px;">咨询内容<span class="redstar">*</span></h4>
                        <p class="font-text" id="word_count">你还能输入100字！</p>
                        <textarea id="msg_area"></textarea>
                        <br>
                        <input type="submit" value="提交">
                    </form>

                </div>
            </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import MainBanner from '@/components/MainBanner.vue';

</script>
<style scoped>

.banner{
    background-image: url('@/images/banner5.jpg');

}

.board-card{
    display: flex;
    width: 100%;
    margin-top:50px;

}
.card-left{
    width: 350px;
}
.card-right{
    flex: 1;
    margin-left: 20px;
}
.serve-list{
    list-style-type: none;
}
.serve-list>li{
    margin-top:5px;
}
.item-btn{
    width: 280px;
    height: 40px;
    border: 0;
}
.left-img{
    width: 280px;
    height: 280px;
    background-image: url('../images/03_f0hi.jpg');
    background-size: 100% 100%;
    margin-left: 40px;
}
.card-empty{
    width: 50px;
}
.redstar{
    color: red;
}

form>input[type='text']{
    width: 70%;
    height: 40px;
    margin-bottom: 30px;
}
form>input[type='submit']{
    width: 70%;
    height: 40px;
    margin-top: 30px;
    color: #fff;
    background-color: rgb(29, 141, 167);
    border: 0;
}
form>input[type='submit']:hover{

    background-color: rgb(25, 121, 142);
}
form>textarea{
    width: 70%;
    height: 100px;
}
#word_count{
    color:green;
}
@media (max-width: 768px) {
    .board-card {
        flex-direction: column;
        height: auto;
    }
    .card-right{
        width: 350px;
    }
    .banner{
      background-size: auto 100%;
      background-position: -900px 0;
    }
}
</style>