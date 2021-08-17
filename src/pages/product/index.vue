<template>
  <div>
    product
    <!-- <button @click="goOrderPage">去购物车界面</button>  -->
    <el-button  type="primary" plain size="default" @click="goOrderPage">去购物车界面</el-button>
    
  </div>
</template>

<script>
  export default {
    methods: {
      goOrderPage() {
        this.$router.push('/order')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>