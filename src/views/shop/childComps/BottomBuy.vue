<template>
  <div class="bottom-buy">
    <div class="left" @click="selectAll">
      <check-button :isCheck="changeCheck" class="select"/>
      <span>全选</span>
    </div>
    <div class="center">
      <span>总计:￥{{totalPrice}}</span>
    </div>
    <div @click="goCheck" class="right">
      <span>去结算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton.vue'
  import {mapGetters} from 'vuex'
  export default{
    name:'BottomBuy',
    components:{
      CheckButton
    },
    methods:{
      selectAll(){
        if(this.changeCheck){
          this.cartList.forEach(item => item.check = false)
        }else{
          this.cartList.forEach(item => item.check = true)
        }
      },
      goCheck(){
        if(this.checkLength === 0){
          this.$toast.show('您未选择商品',1000)
        }else{
          this.$toast.show('此功能未开启',1000)
        }
      }
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return this.cartList.filter(item =>{
          return item.check
        }).reduce((preValue,item)=>{
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength(){
        return this.cartList.filter(item => item.check).length
      },
      changeCheck(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.check)
      }
    }
  }
</script>

<style scoped>
  .bottom-buy{
    height: 51px;
    background-color: rgb(238,238,238);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    line-height: 51px;
    font-size: 20px;
  }
  .left,.right{
    flex: 1;
  }
  .left{
    display: flex;
    text-align: center;
  }
  .select{
    flex: 1;
    margin: auto;
    margin-left: 10px;
  }
  .left span{
    flex: 3;
  }
  .center{
    flex: 2;
    font-weight: bold;
  }
  .right{
    color: white;
    text-align: center;
    background-color: rgb(255,69,0);
  }
</style>
