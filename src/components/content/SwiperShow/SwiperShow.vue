<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) of banners.list">
        <div class="item-box">
          <img :src="item.image" alt="">
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
  import {getHomeMultidata} from 'network/home.js'

  export default{
    name:'SwiperShow',
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return {
        banners:[]
      }
    },
    created(){
      //请求多个数据
     getHomeMultidata().then(res=>{
      this.banners = res.data.banner
     })
    }
  }
</script>

<style>
  .item-box{
    width: 100%;
  }
  .item-box img{
    width:100%
  }
</style>
