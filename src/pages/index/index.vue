<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <NavMenu></NavMenu>
        <Banner></Banner>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
  </div>
</template>

<script>
import Banner from '../../components/banner/index.vue'
import NavMenu from '../../components/navmenu/index.vue'
export default {
  components: {
    Banner,
    NavMenu
  },
  methods: {
    goProductPage() {
      this.$router.push("/product");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.index{
  .container{

  }
}
</style>