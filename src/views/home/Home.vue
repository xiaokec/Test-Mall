<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <swiper-show></swiper-show>
  </div>
</template>

<script>
  import SwiperShow from 'components/content/SwiperShow/SwiperShow.vue'
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default{
    name:'Home',
    components:{
      NavBar,
      SwiperShow
    },
    data(){
      return {
        banners:[],
      }
    }
   }
</script>

<style scoped>
.home-nav{
  background-color: rgb(255,129,152);
  color: white;
}
</style>
