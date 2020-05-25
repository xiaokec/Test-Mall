<template>
<div class="recommend">
 <div class="recommend-item" v-for="item in recommends">
  <a :href="item.link">
    <img :src="item.image">
    <div>{{item.title}}</div>
  </a>
 </div>
</div>
</template>

<script>
  export default{
    name:'Rotation',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  padding: 10px 0 20px;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom:10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>
