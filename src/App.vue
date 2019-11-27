<template>
  <div id="app" @touchmove.prevent>
    <Vheader :seller="seller"></Vheader>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
      //initialIndex=1  定义默认定位tab位置
    </div>
    <router-view />
  </div>
</template>

<script>
import qs from 'query-string'
import Vheader from '@/components/header/header.vue'
import { getSeller } from 'api'
import goods from 'components/goods/goods.vue'
import ratings from 'components/ratings/ratings.vue'
import seller from 'components/seller/seller.vue'
import tab from 'components/tab/tab.vue'

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  computed: {
    tabs () {
      return [
        {
          label: '商品',
          component: goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller({
        id: this.seller.id
      }).then((seller) => {
        this.seller = Object.assign({}, this.seller, seller)
      })
    }
  },
  components: {
    tab,
    Vheader
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'
@import './common/stylus/index.styl'
#app
  .tab-wrapper
    position fixed
    top 136px
    left 0
    right 0
    bottom 0
    .tab-item
      flex 1
      text-align center

      a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
</style>
