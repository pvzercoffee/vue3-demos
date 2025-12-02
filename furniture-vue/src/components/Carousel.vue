<template>
  <swiper class="Carousel">
    <swiper-slide class="swiper-slide" v-for="value in carouselList" :style="{'background-image':`url(${getResource(value.path)})`}">{{ value.title }}</swiper-slide>

  </swiper>
</template>
<script lang="ts" setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import '@/styles/carousel.css';
  import type { CarouselInfo } from '@/interface/CarouselInfo';
  const images = import.meta.glob('/src/images/*.jpg',{eager:true,as:'url'});

  function getResource(filename:string)
  {
    return images[`/src/images/${filename}`]
  }

  const carouselList:CarouselInfo[] = [
    {
      path:'banner.jpg',
      title:''
    },
    {
      path:'banner1.jpg',
      title:''
    },
    {
      path:'banner2.jpg',
      title:''
    }
    ,
    {
      path:'banner3.jpg',
      title:''
    }
    ,
    {
      path:'banner5.jpg',
      title:''
    }
  ];


</script>

<style scoped>
.swiper-slide{
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;

}
</style>
