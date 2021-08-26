<template>
  <div class="nav-menu">
    <ul class="menu-wrapper">
      <li class="menu-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children">
          <ul v-for="(item,index) in menuList" :key="index">
            <li v-for="(sub,idx) in item" :key="idx">
              <a class="link" href="">
                <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                {{ sub ? sub.name : '小米9'}}
              </a>
            </li>
          </ul>
        </div>
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
  data() {
    return {
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米CC",
          },
          {
            id: 33,
            img: "/imgs/item-box-3.jpg",
            name: "小米CC",
          },
        ],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
      ],
    };
  },
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
    /* position: relative; */
    &:hover {
      background-color: $colorA;
      .children{
        display: block;
      }
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
        top: 16px;
      }
    }
    .children {
      width: 996px;
      height: 451px;
      position: absolute;
      top: 0;
      left: 234px;
      /* z-index: 10; */
      border: 1px solid #e0e0e0;
      border-left: 0;
      background: #fff;
      display: none;
      ul{
        /* z-index: 100; */
        display: flex;
        justify-content: space-between;
        height: 75px;
        li{
          z-index: 100;
          position: relative;
          height: 75px;
          line-height: 75px;
          flex: 1;
          padding-left: 23px;
          .link{
            display: block;
            padding: 18px 20px;
            line-height: 40px;
            color: #333;
            &:hover{
              color: $colorA;
            }
            img{
              width: 40px;
              height: 40px;
              vertical-align: middle;
              margin-right: 15px;
            }

          }
        }
      }

    }
  }
}
</style>