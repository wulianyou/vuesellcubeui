<template>
  <div class="header" @click="showDetail">
      <div class="content-wrapper">
        <div class="avatar">
          <img alt="" width="64" height="64" :src="seller.avatar">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div class="support" v-if="seller.supports">
            <support-ico :size=1 :type="seller.supports[5].type"></support-ico>
            <span class="text">
              {{seller.supports[5].description}}
            </span>
          </div>
        </div>
        <div v-if="seller.supports" class="support-count">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper">
        <div class="bulletin-title"></div>
        <div class="bulletin-text">{{seller.bulletin}}</div>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" alt="" width="100%" height="100%">
      </div>
      <!-- <div class="detail" v-show="detailShow"></div> -->
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/support-ico.vue'

export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail(
        {
          $props: {
            seller: 'seller'
          }
        }
      )
      this.headerDetailComp.show()
    }
    /* showDetail () {
      this.detailShow = true
    } */
  },
  components: {
    SupportIco
  }
}
</script>

<style lang="stylus">
@import "~common/stylus/base"
@import "~common/stylus/mixin"
@import "~common/stylus/variable"

.header
  position relative
  overflow hidden
  background rgba(7, 17, 27, .4 )
  color #fff
  //backdrop-filter  blur(10px)
  //color &color-white
  //background $color-background-ss
  .content-wrapper
    position relative
    display flex
    align-items center
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      flex  0 0 64px
      width 64px
      margin-right 16px
      img
        border-radius 2px
    .content
      flex 1
      font-size 14px
      .title
        display flex
        align-items center
        margin-bottom 8px
        .brand
          display inline-block
          width 30px
          height 18px
          bg-image('brand')//传入图片名称
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 8px
        line-height 12px
        font-size 12px
      .support
        .text
          line-height 12px
          font-size 10px
    .support-count
      position absolute
      right 12px
      bottom 18px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background rgba(0,0,0,0.2)
      text-align center
      .count
        font-size 10px
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
        vertical-align top
        font-size 10px
  .bulletin-wrapper
    position relative
    display flex
    height 20px
    line-height 28px
    padding 8px 22px 0 12px
    font-size 0
    background rgba(7,17,27,0.2)
    .bulletin-title
      display inline-block
      width 22px
      height 12px
      vertical-align top
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      margin 0 4px
      flex 1
      font-size 10px
      line-height 12px
      font-weight 200
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      right 12px
      top 8px
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)//设置背景模糊

</style>
