<template>
  <div>
    product
    <el-button  type="primary" plain size="default" @click="goCartPage">去购物车界面</el-button>
    
  </div>
</template>

<script>
  export default {
    methods: {
      goCartPage() {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>