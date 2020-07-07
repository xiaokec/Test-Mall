<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div class="worker">
        <img src="~assets/img/detail/chat.svg">
        <span>客服</span>
      </div>
      <div class="shop">
        <img src="~assets/img/detail/shop.svg">
        <span>店铺</span>
      </div>
      <div class="start">
        <img src="~assets/img/detail/star.svg">
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div class="go-shop" @click="addTo">
        <span>加入购物车</span>
      </div>
      <div class="go-pay" @click="goPay">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailBottomBar',
    methods:{
      addTo(){
        this.$emit('addToCart')
      },
      goPay(){
        this.$emit('ToGoPay')
      }
    }
  }
</script>

<style scoped>
img{
  width: 25px;
  height: 25px;
}
.bottom-bar{
  background-color: white;
  height: 49px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9;
  display: flex;
}
.bottom-bar-left{
  text-align: center;
  flex: 1;
  display: flex;
}
.bottom-bar-left span{
  margin-top: -2px;
  display: block;
}
.bottom-bar-right{
  color: white;
  line-height: 49px;
  text-align: center;
  display: flex;
  flex: 1;
}
.worker,.shop,.start,.go-pay,.go-shop{
  flex: 1;
}
.go-pay{
  background-color: rgb(255,86,119);
}
.go-shop{
  background-color: rgb(255,220,17);
}
</style>
