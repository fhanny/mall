<template>
  <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
</template>

<script>

import NavHeader from './components/header/index.vue'
import NavFooter from './components/footer/index.vue'
export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter
  }
 
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}
</style>
