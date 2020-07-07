<template>
 <div id="detail">
   <nav-bar>
     <div @click="backUp" slot="left" class="back">
       <img src="~assets/img/common/back.svg" />
     </div>
     <div class="title" slot="center">
       <div @click="changeItem(index)" :class="{active:index === currentIndex}" class="title-item" v-for="(item,index) in titles">{{item}}</div>
     </div>

   </nav-bar>
 </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default{
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      changeItem(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backUp(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 15px;
  }
  .active{
    color: red;
  }
  .back img{
    margin-top: 10px;
  }
</style>
