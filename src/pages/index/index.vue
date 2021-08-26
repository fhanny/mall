<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <NavMenu></NavMenu>
        <Banner></Banner>
      </div>
      <div class="ads-box">
        <div class="ads-channel-list">
          <ul class="channel-list">
            <li v-for="(item, index) in adsChannelList" :key="index">
              <a href="">
                <img :src="item.img" alt="" />
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="ads">
          <a href="">
            <img src="../../assets/imgs/ads/ads-1.png" alt="" />
          </a>
          <a href="">
            <img src="../../assets/imgs/ads/ads-1.png" alt="" />
          </a>
          <a href="">
            <img src="../../assets/imgs/ads/ads-1.png" alt="" />
          </a>
        </div>
      </div>
      <div class="banner">
        <a href="">
          <img src="../../assets/imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <Product></Product>
    </div>
  </div>
  <Modal  
    title="提示" 
    :confirmText="查看详情" 
    :btnType="1"
    :modalType="samll"
    :showModal="showModal"
  >
    
  </Modal>
</template>

<script>
import Banner from "../../components/banner/index.vue";
import NavMenu from "../../components/navmenu/index.vue";
import Product from "../../components/product/index.vue";
import Modal from '../../components/modal/index.vue'
export default {
  components: {
    Banner,
    NavMenu,
    Product,
    Modal
  },
  data() {
    return {
      adsChannelList: [
        { img: "/imgs/icon-service.png", name: "保障服务" },
        { img: "/imgs/icon-service.png", name: "保障服务" },
        { img: "/imgs/icon-service.png", name: "保障服务" },
        { img: "/imgs/icon-service.png", name: "保障服务" },
        { img: "/imgs/icon-service.png", name: "保障服务" },
        { img: "/imgs/icon-service.png", name: "保障服务" },
      ],
    };
  },
  methods: {
    goProductPage() {
      this.$router.push("/product");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/base.scss";
@import "../../assets/style/mixin.scss";
@import "../../assets/style/config.scss";
.index {
  .container {
    .ads-box {
      display: flex;
      height: 170px;
      margin-top: 14px;
      .ads-channel-list {
        width: 234px;
        ul {
          margin: 0;
          padding: 3px;
          font-size: 12px;
          text-align: center;
          background: #5f5750;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          li {
            width: 70px;
            height: 82px;
            padding: 0 3px;
            text-align: center;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              background: #665e57;
              top: -1px;
              left: 6px;
              width: 64px;
              height: 1px;
            }
            &::after {
              content: "";
              position: absolute;
              background: #665e57;
              top: 6px;
              left: 0;
              width: 1px;
              height: 70px;
            }
            a {
              display: block;
              padding-top: 18px;
              text-overflow: ellipsis;
              color: #fff;
              opacity: 0.7;
              text-align: center;
              img {
                width: 24px;
                height: 24px;
                display: block;
                margin: 0 auto 4px;
              }
            }
          }
        }
      }
      .ads {
        flex: 1;
        @include flex();
        margin-left: 14px;
        a {
          display: block;
          width: 316px;
          height: 170px;
          img {
            display: block;
            width: 316px;
            height: 170px;
          }
        }
      }
    }
    .banner {
      margin-top: 31px;
      height: 120px;
      margin-bottom: 50px;
      img {
        height: 120px;
        width: 1226px;
      }
    }
  }
  .product-box{
    background: $colorJ;
    padding: 30px 0 50px;
  }
}
</style>