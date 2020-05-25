<template>
  <div class="good-item">
    <img :src="goodsItem.show.img" @load="imageLoad">
    <div class="texts">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">⭐{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .good-item{
    padding-bottom: 20px;
    text-align: center;
  }
  .good-item p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .good-item img{
    width: 100%;
    border-radius: 5px;
  }
  .good-item span:nth-child(2){
    color: red;
  }
  .texts{
    margin-top: -20px;
    margin-bottom: -10px;
  }
</style>
