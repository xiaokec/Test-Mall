<template>
  <div class="inner-items">
    <inner-item  @changeA="checkClick" :itemInfo="item" :key="index" v-for="(item,index) in cartList" />
  </div>
</template>

<script>
  import InnerItem from './InnerItem.vue'

  import {mapGetters} from 'vuex'

  export default {
    name:'InnerData',
    components:{
      InnerItem
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    methods:{
      checkClick(item){
        // this.Ncheck = !this.Ncheck
        item.check = !item.check
        // console.log(this.cartList.check)
      }
    }
  }
</script>

<style scoped>

</style>
