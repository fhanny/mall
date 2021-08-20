<template>
  <div class="header">
    <div class="nav-top">
      <div class="container">
        <div class="header_menu">
          <a href="">小米商城</a>
          <a href="">MUI</a>
          <a href="">云服务</a>
          <a href="">协议规定</a>
        </div>
        <div class="header_user">
          <a href="">登录</a>
          <a href="" class="my-cart"><span class="icon-cart"></span>购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-top">
          <div class="item_menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item_menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item_menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text">
            <a href=""></a>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-header"
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
.header{
  .nav-top{
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart{
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart{
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;
          margin-right: 5px;
        }
      }
    }
  }
  .nav-header{
    .container{
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before{
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin 0.3s;
          }
          &::after{
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover{
            margin-left: -55px;
            transition: margin 0.3s;
          }
        }
      }
      .header-top{
        display: flex;
        width: 264px;
        border: 1px solid #ff5dff;
        margin-left: -50px;
        .item_menu{
          /* display: inline-block; */
          font-size: 16px;
          color: #333;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input{
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 10px;
          }
          a{
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 12px;
          }
        }
      }
    }
  }
}
</style>