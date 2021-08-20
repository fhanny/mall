<template>
  <div>
    cart
    <!-- <button @click="goback">回产品界面</button> -->
    <el-button type="primary" size="default" @click="goback">回产品界面</el-button>
    
  </div>
</template>

<script>

  export default {
    methods: {
      goback() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>