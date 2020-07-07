<template>
  <div :class="{check:isCheck}" class="check-button">
  </div>
</template>

<script>
  export default{
    name:'CheckButton',
    props:{
      isCheck:{
        type:Boolean
      }
    }
  }
</script>

<style scoped>
  .check-button{
    width: 25px;
    height: 25px;
    border-radius: 15px;
    border: 1px solid rgba(127,127,127,0.2);
  }
  .check{
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: red;
    border: 1px solid rgba(127,127,127,0.2);
  }
</style>
