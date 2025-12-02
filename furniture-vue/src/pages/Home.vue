<template>
    <MainBanner />
    <main>
        <div class="slogan">
            <div class="slogan-layout" id="slogan-1">
                <h3 class="slogan-title">品质高，经久耐用</h3>
                <p class="slogan-text">当前家纺市场上的优秀代表，从织造、染色、印花 及整理包装的整个流程，我们都做的十分仔细，而且在环保性上，也有很好的表现</p>
            </div>
            <div class="slogan-layout" id="slogan-2">
                <h3 class="slogan-title">品质高，经久耐用</h3>
                <p class="slogan-text">公司全体员工团结奋进。开拓进取，为创建特色鲜明、质量一流的名牌产品而不懈努力，公司凭借高素质的人才队伍，先进的工艺和一流、完善的企业管理</p>
            </div>

            <div class="slogan-layout" id="slogan-3">
                <h3 class="slogan-title">现金的工艺技术</h3>
                <p class="slogan-text">家纺依靠科技进步、倡导绿色消费，让消费者充分体会到品牌文化所带来的无穷魅力，致力于功能性家纺，产品有真丝系列、婚庆系列、时尚系列</p>
            </div>
        </div>
        <div class="show">
            <h2>
                <span class="text-big">产品展示</span>
                <span class="text-blue">OUR PRODUCTS</span>
            </h2>
            <div class="flex-box">
                <div id="show-left"></div>
                <div id="show-right">
                    <div class="show-right-img" id="show_right_1"></div>
                    <div class="show-right-img" id="show_right_2"></div>
                    <div class="show-right-img" id="show_right_3"></div>
                    <div class="show-right-img" id="show_right_4"></div>
                </div>
            </div>
        </div>
        <div class="banner-bottom">
            <img src="/photos/bed.png" width="200" class="banner-bottom-photos">
            <img src="/photos/cupboard.png" width="200" class="banner-bottom-photos">
            <img src="/photos/chair.png" width="200" class="banner-bottom-photos">
            <img src="/photos/table.png" width="200" class="banner-bottom-photos">
        </div>
        <div style="height: 250px;"></div>
    </main>
</template>
<script setup lang="ts">
import MainBanner from '@/components/MainBanner.vue';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:


</script>
<style scoped>
@media (max-width: 768px) {
    .slogan,#show-left {
        flex-direction: column;
        height: auto;
    }
    .slogan,.slogan-layout{
        width: 100%;

    }
}

.slogan{
    width:85%;
    display: flex;
    margin-top:30px;
    margin-left:7%
}
.slogan-layout{
    flex: 1;
    padding:20px 0 20px 0;
    color: #fff;
    text-align: center;
    height: 300px;
    background-size: 100%;
}
#slogan-1{
    background-image: url('../images/01.jpg');
}
#slogan-2{
    background-image: url('../images/02.jpg');
}
#slogan-3{
    background-image: url('../images/03.jpg');
}
.slogan-title{
    font-size: 28px;
}
.slogan-text{
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
}
.show{
    width:85%;
    height: 600px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    margin:20px auto;
    background-color:rgb(161, 172, 169);
    padding: 10px;
}
#show-left{
    flex: 1;
    background-image: url('../images/div1.jpeg');
    background-size: 100% 100%;
}
#show-right{
    flex: 1;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.show-right-img{
    width:calc(50% - 16px);
    width:calc(50% - 16px);
    background-size: 100% 100%;
}
#show_right_1{
    background-image: url('../images/1.png');
}
#show_right_2{
    background-image: url('../images/2.png');
}
#show_right_3{
    background-image: url('../images/3.png');
}
#show_right_4{
    background-image: url('../images/4.png');
}
.show-right-img:hover,#show-left:hover{
    box-shadow: 0 0 10px  8px #666;
}
.banner-bottom{
    width:100%;
    height: 250px;
    position: absolute;
    background-image: url('../photos/house.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.banner-bottom-photos{
    position: absolute;
    left: 20px;
    top: 20px;
}

  @media (max-width: 768px) {
  .flex-box,.footer-link-quickly,header,.links {
    flex-direction: column;

  }
}
</style>