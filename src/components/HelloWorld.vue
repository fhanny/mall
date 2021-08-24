<template>
  <swiper
    class="swiper-box"
    :navigation="true"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <a href="">
        <img src="../assets/img/slide-1.jpg" alt="" srcset="" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="">
        <img src="../assets/img/slide-2.jpg" alt="" srcset="" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="">
        <img src="../assets/img/slide-2.jpg" alt="" srcset="" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
export default {
  name: "HelloWorld",
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
.swiper-box {
  height: 451px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style> 
