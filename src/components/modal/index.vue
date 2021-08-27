<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{confirmText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType == 2" @click="$emit('cancle')">{{cancleText}}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn"  @click="$emit('submit')">{{confirmText}}</a>
            <a href="javascript:;" class="btn btn-default"  @click="$emit('cancle')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalType: {
      type: String,
      default: "form",
    },
    title: String,
    btnType: String,
    confirmText: {
      type: String,
      default: "确定",
    },
    cancleText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
@import "../../assets/style/config.scss";
@import "../../assets/style/btn.scss";
.modal {
  z-index: 1000;
  @include position(fixed);
  transition: all .5s linear;
  .mask {
    @include position(fixed);
    background: $colorI;
    opacity: 0.5;
  }
  &.slide-enter-active{
    top: 0
  }
  &.slide-enter,&.slide-leave-active{
    top: -100%
  }

  .modal-dialog {
    @include position(absolute, 40%, 50%, 660px, auto);
    background: #fff;
    transform: translate(-50%, -50%);
    .modal-header {
      background: #f5f5f5;
      height: 40px;
      line-height: 40px;
      padding: 0 25px;
      font-size: $fontI;
      .icon-close {
        position: absolute;
        top: 15px;
        right: 25px;
        width: 14px;
        height: 14px;
        background: url("../../assets/imgs/icon-close.png") no-repeat center;
        background-size: contain;
        transition: all 0.3s linear;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
    .modal-body {
      padding: 30px 25px;
      font-size: 14px;
    }
    .modal-footer {
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #f5f5f5;
    }
  }
}
</style>