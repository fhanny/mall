<template>
  <div>
    <NavHeader></NavHeader>
    <!-- <button @click="goProductPage">点击我</button> -->
    <!-- <router-view></router-view> -->
    <Banner></Banner>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from '../../components/header/index.vue'
import NavFooter from '../../components/footer/index.vue'
import Banner from '../../components/banner/index.vue'
export default {
  methods: {
    // goProductPage() {
    //   this.$router.push('/cart')
    // }
  },
  components: {
    NavHeader,
    Banner,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>

</style>