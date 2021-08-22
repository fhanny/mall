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
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username">登录</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="my-cart" @click="goCartPage"><span class="icon-cart"></span>购物车(0)</a>
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
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneLists" :key="index">
                  <div>
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元起</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="item_menu">
            <span>RedMi红米</span>
            <div class="children">
            
            </div>
          </div>
          <div class="item_menu">
            <span>电视</span>
            <div class="children">

            </div>
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
    name: "nav-header",
    data() {
      return {
        username: 'jack',
        phoneLists: []
      }
    },
    mounted() {
      this.getProductList()
    },
    filters: {
      
    },
    methods: {
      getProductList () {
        this.$axios({
          url: '/products',
          methods: 'get',
          data:{
            categoryId: '1002',
            pageSize: 6 
          }
        }).then(res => {
          console.log(res.list)
          // this.phoneLists = res
          if (res.list.length > 6) {
            this.phoneLists = res.list.slice(0,6)
            console.log(this.phoneLists)
          }
        })
      },
      goCartPage () {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
@import "../../assets/style/mixin.scss";
@import "../../assets/style/config.scss";
.header{
  .nav-top{
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container{
      @include flex();
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
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 5px;
        }
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      @include flex();
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
            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
            transition: margin 0.3s;
          }
          &::after{
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
          }
          &:hover{
            margin-left: -55px;
            transition: margin 0.3s;
          }
        }
      }
      .header-top{
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item_menu{
          display: inline-block;
          font-size: 16px;
          color: #333;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgb(0, 0, 0, .11);
            z-index: 10;
            background: #fff;
            height: 0;
            overflow: hidden;
            opacity: 0;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &::before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before{
                display: none;
              }
              img{
                height: 112px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price{
                color:  $colorA;
              }
            }
          }
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
            box-sizing: border-box;
            width: 264px;
            height: 50px;
            padding-left: 10px;
          }
          a{
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>