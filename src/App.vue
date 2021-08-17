<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/header/index.vue'
import NavFooter from './components/footer/index.vue'
export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
