<template>
  <div class="tab-control">
    <div @click="itemClick(index)" class="tab-control-item" :class="{active : index === curIndex}" v-for="(item,index) in title">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        curIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.curIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 3px;
  }
  .active{
    color: red;
  }
  .active span{
    border-bottom: 3px solid red;
  }
</style>
