<template>
    <main>
        <BaseDialog class="dialog" @send="extendsClose" :message="dialogMessage" :style="{'display':dialogShowType}"/>
        <p style="margin-left: 20px;">热销商品</p>
        <div class="show-box">
            <div class="show-left">
              <Double12Timeout />
            </div>
            <div class="show-right">
                <div class="goods" @click="showDetail(value)" v-for="value in productList">
                  <div class="good" :style="{backgroundImage:`url(${getImageUrl(value.img)})`}"></div>
                  <p class="good-text">￥{{ value.price }}</p>
                  <p class="good-text">{{ value.name }}</p>
                </div>

            </div>
            <div class="show-empty"></div>
        </div>

    </main>
</template>
<script setup lang="ts">
import Double12Timeout from '@/components/Double12Timeout.vue';
import BaseDialog from '@/components/BaseDialog.vue';
import { reactive, ref } from 'vue';
import { DialogStatus } from '@/constants/DialogStatus';
import type { ProductInfo } from '@/interface/DialogInfo';

const images = import.meta.glob('/src/photos/*',{eager:true,as:'url'});

const productList = [
    {
        img: "pro1.png",
        name: "实木照片墙 创意墙面小墙贴纸",
        price: 400.00
    },
    {
        img: "pro2.png",
        name: "馨竹家居 茶几边的加厚丝毛绿地毯",
        price: 400.00
    },
    {
        img: "pro3.png",
        name: "可爱小脚丫 浴室门口防滑地垫脚垫",
        price: 100.00
    },
    {
        img: "pro4.png",
        name: "地中海客厅照片墙 地中海风情客厅",
        price: 300.00
    },
    {
        img: "pro5.png",
        name: "相框墙 装饰相框墙 新品组合套装",
        price: 990.00
    },
    {
        img: "pro6.png",
        name: "海藻绿 3d系列进门垫 卫生间地垫",
        price: 200.00
    },
    {
        img: "pro7.png",
        name: "可爱小脚丫 浴室门口防滑地垫脚垫",
        price: 100.00
    },
    {
        img: "pro8.png",
        name: "长绒素色地毯 卧室客厅床边地毯垫子",
        price: 100.00
    },
    {
        img: "pro9.jpg",
        name: "竹妃 纸买就送 116抽家庭装6包",
        price: 60.00
    }
];

const getImageUrl = (name:string) => {
  return images[`/src/photos/${name}`];
}

let dialogShowType = ref(DialogStatus.hide);

let dialogMessage:ProductInfo = reactive({
  name:'',
  img:'',
  price:0
})

function showDetail(value:ProductInfo){

  dialogMessage.name = value.name
  dialogMessage.img = getImageUrl(value.img) || ''
  dialogMessage.price = value.price

  dialogShowType.value = DialogStatus.show
}
function extendsClose(status:string){
  dialogShowType.value = status;
}
</script>
<style scoped>
.dialog{

    width: 100vw;
    height: 100vh;
    top:0px;
    left:0px;
    position: fixed;
    z-index: 10000;

    /* background-color: #eee; */
}

.banner{
    background-image: url('/images/banner1.jpg');

}
.show-box{
    display: flex;
    gap: 20px;
}
.show-left{
    width: 300px;
    margin: 20px;
    /* background-color: aqua; */
}

.show-right{
    flex: 1;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-left: 10px;
    border:1.5px solid #eee;
}
.good{
    /* flex: 1; */
    background-repeat: no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 280px;
    margin-bottom:5px;
    border-bottom: 1px solid #888;


}
.goods{
  width: 320px;
  /* height: 380px; */
  overflow: hidden;
  border-radius: 25px;
  border: 1.5px solid #aaa;
  /* padding: 10px; */
  margin:30px;
  padding-bottom: 20px;
  background-color: rgb(253, 235, 216,0.7);;
}
.good-text{
    margin: 0;
    margin-left: 20px;
    color: #000;
    font-weight: 700;
    margin-top: auto;
    font-size: 20px;

}
.goods:hover{
  box-shadow: 3px 2px 6px 1px #888;
}
.show-empty{
    width: 80px;
    height: 1px;
}
#dialog{
    width: 100vw;
    height: 100vh;
    top:0px;
    left:0px;
    position: fixed;
    z-index: 10000;
    display: none;
    /* background-color: #eee; */
}
.dialog-main{
    width: 480px;
    height: 480px;
    margin: 200px auto;
    background-color: #ddd;
    box-shadow: 0px 30px 10px 10px #666;
}
.dialog-detail{
    width: 100%;
    height: 100%;
}
.dialog-head{
    display: flex;
}
.dialog-button{
    margin:0;
    padding: 5px;
    margin-left: auto;
    font-size: 15px;
    border: 0;
    background-color: #ddd;
}
.dialog-title{
    font-size: 14px;
    line-height: 30px;
}
@media (max-width: 768px) {
    .dialog-main{
        width: 300px;
        margin-top: 40%;
    }
    .goods{
      width: 87%;
      margin:30px auto ;
    }

}
</style>
