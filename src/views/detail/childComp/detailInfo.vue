<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="descs">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <span class="key">{{detailInfo.detailImage[0].key}}</span>
    <div class="images">
      <img @load="imgLoad" :src="item" :key="index" v-for="(item,index) in detailInfo.detailImage[0].list" />
    </div>
  </div>
</template>

<script>
  export default{
    name:'detailInfo',
    data(){
      return{
        counter:0,
        imagesLength:0
      }
    },
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        // if(++this.counter == this.imagesLength){
          this.$bus.$emit('imageLoad')
        // }
      }
    },
    watch:{
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .images{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .images img{
    width: 100%;
  }
  .descs{
    padding: 0 15px;
  }
  .start,.end{
    position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
  }
  .start{
    float: left;
  }
  .end {
    float: right;
  }
.start::before,
.end::after {
   position: absolute;
   bottom: 0;
   width: 5px;
   height: 5px;
   content: "";
   background-color: #333333;
 }
.end::after {
   right: 0;
 }
 .desc{
   font-size: 14px;
     padding: 15px 0;
 }
 .key{
   font-size: 15px;
     margin: 10px 0 10px 15px;
     color: #333333;
 }
</style>
