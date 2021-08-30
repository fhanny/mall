<template>
  <div class="container">
    <h2>手机</h2>
    <div class="wrapper">
      <div class="product-left">
        <a href="">
          <img src='../../assets/imgs/mix-alpha.jpg' alt="" />
        </a>
      </div>
      <div class="product-right">
        <div class="list" v-for="(item, index) in phoneList" :key="index">
          <div class="item" v-for="sub in item" :key="sub.id">
            <div class="item-img">
              <img v-lazy="sub.mainImage" alt="" />
            </div>
            <div class="item-info">
              <h3>{{ sub.name }}</h3>
              <p>{{ sub.subtitle }}</p>
              <p class="price" @click="addCart(sub.id)">{{ sub.price }}起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      phoneList: [],
    };
  },
  mounted() {
    this.getPhoneList();
  },
  methods: {
    getPhoneList() {
      this.$axios({
        url: "/products",
        methods: "get",
        data: {
          categoryId: 100012,
          pageSize: 14,
        },
      }).then((res) => {
        console.log(res.list);
        // this.phoneLists = res
        if (res.list.length > 6) {
          this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)];
          console.log(this.phoneList);
        }
      });
    },
    addCart(id) {
      this.$axios({
        url: "/carts",
        methods: "put",
        data: {
          productId: id,
          selected: true
        },
      }).then((res) => {
        console.log(res)
      }).catch(() => {
        this.$emit('addcart',true)
      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/config.scss";
@import "../../assets/style/base.scss";
@import "../../assets/style/mixin.scss";
.container {
  h2 {
    font-size: $fontF;
    line-height: 58px;
    height: 58px;
    color: #333;
  }
  .wrapper {
    display: flex;
    .product-left {
      margin-right: 16px;
      img {
        width: 224px;
        height: 619px;
      }
    }
    .product-right {
      .list {
        @include flex();
        width: 986px;
        margin-bottom: 14px;
        &:last-child {
          margin-bottom: 0;
        }
        .item {
          width: 236px;
          height: 302px;
          background: #fff;
          text-align: center;
          padding: 20px 0;
          box-sizing: border-box;
          transition: all 0.2s linear;
          cursor: pointer;
          &:hover {
            z-index: 2;
            -webkit-box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
            box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
            -webkit-transform: translate3d(0, -2px, 0);
            transform: translate3d(0, -2px, 0);
          }
          .item-img {
            img {
              height: 160px;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
              margin-bottom: 10px;
            }
            p {
              color: $colorD;
              line-height: 18px;
              margin: 0 10px 10px;
            }
            .price {
              color: $colorA;
              font-size: $fontJ;
              &::after {
                content: "";
                @include bgImg(
                  22px,
                  22px,
                  "../../assets/imgs/icon-cart-hover.png"
                );
                vertical-align: middle;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>