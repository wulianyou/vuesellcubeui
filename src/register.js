import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import Food from 'components/food/food'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'
import ShopCartStikcy from 'components/shop-cart-sticky/shop-cart-sticky'

createAPI(Vue, HeaderDetail)
createAPI(Vue, Food)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartStikcy)
