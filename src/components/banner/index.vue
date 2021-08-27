<template>
  <swiper
    class="swiper"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{ clickable: true }"
    :autoplay="{ autoplay: true }"
    effect="cube"
    :cubeEffect='{
      "shadow": false,
      "slideShadows": false,
    }'
    loop
  >
    <swiper-slide v-for="(item, index) in slideList" :key="index">
      <a href="">
        <img v-lazy="item.imgUrl" alt="" srcset="" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination,EffectCube,Autoplay   } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles

import 'swiper/swiper-bundle.css';
// import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-cube/effect-cube.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCube,Autoplay ]);
export default {
  name: "Banner",
  data() {
    return {
      slideList: [
        { id: "42", imgUrl: "/imgs/slider/slide-1.jpg" },
        { id: "45", imgUrl: "/imgs/slider/slide-2.jpg" },
        { id: "46", imgUrl: "/imgs/slider/slide-3.jpg" },
        { id: "42", imgUrl: "/imgs/slider/slide-4.jpg" },
        { id: "42", imgUrl: "/imgs/slider/slide-5.jpg" },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper{
  height: 451px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  .swiper-button-prev{
    position: absolute;
    left: 275px;
  }
}

</style> 
