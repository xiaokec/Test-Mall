<template>
  <div class="goods">
    <goods-list-item class="goods-item" v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  
  export default{
    name:'GoodsLists',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-flow: wrap;
    justify-content:space-around;
  }
  .goods-item{
    flex:0 0 46%;
  }
</style>
