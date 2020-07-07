<template>
  <div @click="Change" class="items" v-if="Object.keys(itemInfo).length !== 0">
    <div class="one-item">
      <div class="item-selector">
        <check-button :isCheck="itemInfo.check" class="select"/>
      </div>
      <div class="item-image">
        <img :src="itemInfo.image">
      </div>
      <div class="item-info">
        <span class="item-title">{{itemInfo.title}}</span>
        <span class="item-desc">{{itemInfo.desc}}</span>
        <div class="info-bottom">
          <div class="item-price">￥{{itemInfo.price}}</div>
          <div class="item-count">x{{itemInfo.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton.vue'

  export default {
    name:'InnerItem',
    props:{
      itemInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      Change(){
       this.itemInfo.check = !this.itemInfo.check
      }
    }
  }
</script>

<style scoped>
  .one-item{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    display: flex;
    border-bottom: 3px solid rgba(127,127,127,0.2);
  }
  .item-selector{
    flex: 1;
    margin: auto;
  }
  .select{
    margin-left: 25px;
  }
  .item-image{
    flex: 2;
  }
  .item-info{
    flex: 3;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
  }
  .item-info>span{
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-image img{
    width: 60%;
    border-radius: 5px;
  }
  .item-title,.item-desc,.info-bottom{
    flex: 1;
  }
  .item-title{
    font-size: 20px;
    font-weight: bold;
  }
  .info-bottom{
    display: flex;
    justify-content: space-between;
  }
  .item-price{
    color: red;
  }
</style>
