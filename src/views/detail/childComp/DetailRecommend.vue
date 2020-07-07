<template>
  <div class="TJ">
    <div class="shopT">
      <span>商品推荐</span>
    </div>
    <div class="re-it">
      <div v-for="(items,index) in recommend" class="good-item" @click="itemClick(index)">
        <img :src="items.image" @load="imageLoad">
        <div class="texts">
          <p>{{items.title}}</p>
          <span class="price">￥{{items.price}}</span>
          <span class="collect">⭐{{items.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'DetailRecommend',
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(index){
        this.$router.push('/detail/'+ this.recommend[index].item_id)
      }
    }
  }
</script>

<style scoped>
  .good-item{
    padding-bottom: 20px;
    text-align: center;
    flex:0 0 46%;
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
  .re-it{
    display: flex;
    flex-flow: wrap;
    justify-content:space-around;
    padding-top: 10px;
  }
  .shopT{
    font-size: 30px;
    margin-bottom: 15px;
    margin-left: 5px;
  }
</style>
