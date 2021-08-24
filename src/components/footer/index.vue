<template>
  <div class="footer"> 
    <div class="container">
      <div class="footer-service">
        <ul class="list-service">
          <li>
            <a href="javascript:;">
              <span class="icon-tool"></span>
              预约维修服务
            </a>
          </li>        
          <li>
            <a href="javascript:;">
              <span class="icon-7day"></span>
              7天无理由退货
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="icon-15day"></span>
              15天免费换货
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="icon-gift"></span>
              满69包邮
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="icon-loc"></span>
              520余家售后网点
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-link">
        <dl class="col-links">
          <dt>帮助中心</dt>
          <dd><a href="javascript;;">账户管理</a></dd>
          <dd><a href="javascript;;">购物指南</a></dd>
          <dd><a href="javascript;;">订单操作</a></dd>
        </dl>
        <dl class="col-links">
          <dt>服务支持</dt>
          <dd><a href="javascript;;">售后政策</a></dd>
          <dd><a href="javascript;;">自助服务</a></dd>
          <dd><a href="javascript;;">相关下载</a></dd>
        </dl>
        <dl class="col-links">
          <dt>线下门店</dt>
          <dd><a href="javascript;;">小米之家</a></dd>
          <dd><a href="javascript;;">服务网点</a></dd>
          <dd><a href="javascript;;">授权体验店</a></dd>
        </dl>
        <dl class="col-links">
          <dt>关于小米</dt>
          <dd><a href="javascript;;">了解小米</a></dd>
          <dd><a href="javascript;;">加入小米</a></dd>
          <dd><a href="javascript;;">投资者关系</a></dd>
          <dd><a href="javascript;;">企业社会责任</a></dd>
          <dd><a href="javascript;;">廉洁举报</a></dd>
        </dl>
        <dl class="col-links">
          <dt>关注我们</dt>
          <dd><a href="javascript;;">了解小米</a></dd>
          <dd><a href="javascript;;">了解小米</a></dd>
          <dd><a href="javascript;;">了解小米</a></dd>
        </dl>
        <dl class="col-links">
          <dt>特色服务</dt>
          <dd><a href="javascript;;">了解小米</a></dd>
          <dd><a href="javascript;;">了解小米</a></dd>
          <dd><a href="javascript;;">了解小米</a></dd>
        </dl>
        <div class="footer-concat">
          <p class="phone">400-100-5678</p>
          <p>8:00-18:00（仅收市话费）</p>
          <a href="javascript;;"  class="service"><span class="icon-message"></span>人工服务</a>
          <div class="follow">
            关注小米：
            <a href="javascript;;" class="wb"></a>
            <a href="javascript;;" class="wx" @mouseover="showImg" @mouseout="notShowImg"></a>
            <img src="../../assets/imgs/wx-img.png" :style="{display: isshow}" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-footer",
    data() {
      return {
        isshow: "none"
      }
    },
    methods: {
      showImg () {
        this.isshow = 'block'
      },
      notShowImg() {
        this.isshow = 'none'
      } 
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/style/config.scss';
@import '../../assets/style/base.scss';
@import '../../assets/style/mixin.scss';
.footer{
  .container{
    .footer-service{
      display: block;
      padding-bottom: 27px;
      padding-top: 27px;
      border-bottom: 1px solid #e0e0e0;
      li{
        width: 19.8%;
        display: inline-block;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-right: 1px solid #e0e0e0;
        font-size: 16px;
        &:last-child{
          border: none;
        }
        a{
          color: #616161;
          span{
            display: inline-block;
            width: 25px;
            height: 25px;
            margin-right: 6px;
            vertical-align: middle;
          }
          .icon-tool{
            @include bgImg(24px, 24px,'../../assets/imgs/icon-setting.png');
          }
          .icon-7day{
            @include bgImg(24px, 24px,'../../assets/imgs/icon-7day.png');
          }
          .icon-15day{
            @include bgImg(24px, 24px,'../../assets/imgs/icon-15day.png');
          }
          .icon-gift{
            @include bgImg(24px, 24px,'../../assets/imgs/icon-gift.png');
          }
          .icon-loc{
            @include bgImg(24px, 24px,'../../assets/imgs/icon-loc.png');
          }
          &:hover{
            color: $colorA;
            transition: all .3s;
            .icon-tool{
              @include bgImg(24px, 24px,'../../assets/imgs/icon-setting-check.png');
            }
            .icon-7day{
              @include bgImg(24px, 24px,'../../assets/imgs/icon-7day-check.png');
            }
            .icon-15day{
              @include bgImg(24px, 24px,'../../assets/imgs/icon-15day-check.png');
            }
            .icon-gift{
              @include bgImg(24px, 24px,'../../assets/imgs/icon-gift-check.png');
            }
            .icon-loc{
              @include bgImg(24px, 24px,'../../assets/imgs/icon-loc-check.png');
            }
          }
        }

      }

    }
    .footer-link{
      padding: 40px 0;
      display: flex;
      .col-links{
        display: block;
        width: 165px;
        margin: 0;
        dt{
          display: block;
          margin: -1px 0 26px;
          font-size: 14px;
          line-height: 1.25;
          color: #424242;
          &:hover{
            color: $colorA;
          }
        }
        dd{
          margin: 10px 0 0;
          font-size: 12px;
          display: block;
          a{
            color: #757575;
            font-size: 12px;
            &:hover{
              color: $colorA;
            }
          }
        }
      }
      .footer-concat{
        color: #616161;
        width: 251px;
        border-left: 1px solid #e0e0e0;
        text-align: center;
        p{
          margin: 0 0 5px 0;
          font-size: 12px;
        }
        .phone{
          font-size: 22px;
          color: $colorA;
          line-height: 1;
        }
        .service{
          display: inline-block;
          border: 1px solid $colorA;
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
          color: $colorA;
          span{
            display: inline-block;
            @include bgImg(20px, 20px,'../../assets/imgs/icon-message-check.png');
            vertical-align: -6px;
          }
          &:hover{
            color: #fff;
            background: $colorA;
            span{
              @include bgImg(20px, 20px,'../../assets/imgs/icon-message.png');
            }
          }
        }
        .follow{
          position: relative;
          font-size: 12px;
          margin-top: 10px;
          a{
            width: 24px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 6px;
            margin-top: -3px;
          }
          .wb{
            display: inline-block;
            @include bgImg(24px, 24px,'../../assets/imgs/wb.png');
            &:hover{
              @include bgImg(24px, 24px,'../../assets/imgs/wb@2x.png');
            }
          }
          .wx{
            display: inline-block;
            @include bgImg(24px, 24px,'../../assets/imgs/wx.png');
            &:hover{
              @include bgImg(24px, 24px,'../../assets/imgs/wx@2x.png');
            }
          }
          img{
            position: absolute;
            width: 126px;
            height: 126px;
            z-index: 10;
            top: 20px;
            left: 100px;
          }
       }
      }
    }
  }
}
</style>