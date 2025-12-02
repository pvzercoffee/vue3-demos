<template>

    <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{delay:2500,disableOnInteraction:true}"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

  <swiper-slide class="swiper-slide"
  v-for="value in carouselList"  :key="value.id" :style="{'background-image':`url(${getResource(value.path)})`}">
    {{ value.title }}
  </swiper-slide>

  </swiper>
</template>
<script lang="ts" setup>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import type { CarouselInfo } from '@/interface/CarouselInfo';
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  const images = import.meta.glob('/src/images/*.jpg',{
    eager:true,
    as:'url'
  });

  function getResource(filename:string)
  {
    return images[`/src/images/${filename}`]
  }

  const carouselList:CarouselInfo[] = [
    {
      path:'lunbo1.jpg',
      id:1
    },
    {
      path:'lunbo2.jpg',
      id:2
    },
    {
      path:'lunbo3.jpg',
      id:3
    }
    ,
    {
      path:'2.jpg',
      id:4
    }
    ,
    {
      path:'4.jpg',
      id:5
    }
  ];

  const onSwiper = (swiper:any) => {
    // console.log(swiper);
  };
  const onSlideChange = () => {
    // console.log('slide change');
  };
  const modules = [Autoplay,Navigation, Pagination, Scrollbar,A11y]



</script>

<style scoped>

.swiper {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
