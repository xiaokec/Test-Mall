<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0 ">
    <div class="sizes" v-for="item in paramsInfo.sizes[0]">
      <span v-for="items in item">{{items}}</span>
    </div>
    <div class="infos" v-for="infos in paramsInfo.infos">
      <div class="infos-item">
        <span>{{infos.key}}</span>
        <span>{{infos.value}}</span>
      </div>
    </div>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
        <img :src="paramsInfo.image">
    </div>
  </div>
</template>

<script>
  export default{
    name:'ParamsInfo',
    props:{
      paramsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info{
    margin-left: 15px;
    width: 90%;
    border-bottom: 4px solid rgba(127,127,127,0.2);
  }
.sizes{
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  display: flex;
  border-bottom: 2px solid rgba(115,115,115,0.1);
  justify-content: space-between;
}
.item-info{
  flex: 1;
}
.infos{
  padding-top: 10px;
  padding-bottom: 10px;
  /* text-align: center; */
  display: flex;
  border-bottom: 2px solid rgba(115,115,115,0.1);
}
.infos-item{
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.infos-item :nth-child(2){
  margin-left: 65px;
  color: red;
}
.info-img img{
  width: 100%;
}
</style>
