<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in banners">
        <div class="item-box">
           <img :src="item">
        </div>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

  export default{
    name:'DetailSwiper',
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.detail-swiper{
  width: 100%;
  height: 300px;
}
</style>
