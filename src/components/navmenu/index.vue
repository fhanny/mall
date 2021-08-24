<template>
  <div class="nav-menu">
    <ul class="menu-wrapper">
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
@import "../../assets/style/config.scss";
.nav-menu {
  position: absolute;
  width: 234px;
  height: 451px;
  z-index: 100;
  padding: 26px 0;
  background: #55585a7a;

  box-sizing: border-box;
  .menu-item {
    height: 50px;
    line-height: 50px;
    &:hover {
      background-color: $colorA;
    }
    a {
      font-size: 16px;
      color: #fff;
      padding-left: 30px;
      position: relative;
      display: block;
      &::after {
        position: absolute;
        content: "";
        @include bgImg(10px, 15px, "../../assets/imgs/icon-arrow.png");
        right: 30px;
        /* top:16px */
        top: 16px;
      }
    }
    .children {
      width: 996px;
      height: 451px;
      position: absolute;
      top: 0;
      left: 234px;
      /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.18); */
      z-index: 24;
      border: 1px solid #e0e0e0;
      border-left: 0;
      background: #fff;
    }
  }
}
</style>