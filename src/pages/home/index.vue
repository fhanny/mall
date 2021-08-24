<template>
  <div>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from '../../components/header/index.vue'
import NavFooter from '../../components/footer/index.vue'
export default {
  methods: {
    // goProductPage() {
    //   this.$router.push('/cart')
    // }
  },
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>

</style>