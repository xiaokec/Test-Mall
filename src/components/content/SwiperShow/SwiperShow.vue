<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <div class="item-box">
          <a :href="item.link">
            <img :src="item.image" @load="imageLoad">
          </a>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

  export default{
    name:'SwiperShow',
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
    },
    methods:{
      imageLoad(){
        this.$emit('swiperImageLoad')
      }
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
