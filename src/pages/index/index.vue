<template>
  <div>
    <!-- index
    <el-button type="primary" size="default" @click="goProductPage">去产品界面</el-button> -->
  </div>
</template>

<script>
  export default {
    methods: {
      goProductPage() {
        this.$router.push('/product')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>