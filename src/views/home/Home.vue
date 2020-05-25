<template>
  <div id="home" @mousewheel.prevent>
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <scroll :pull-up="true" @pullingUp="loadMore" @scroll="contentS" :probe-type="3" class="content" ref="scroll">
      <swiper-show :banners="banners"/>
      <rotation :recommends="recommends"/>
      <feature/>
      <tab-control @tabClick="tabClick" class="tab-control" :title="['流行','新款','精选']"/>
      <goods-lists :goods="showGoods"/>
    </scroll>
    <transition name="backShow">
      <back-top  v-if="isShow" @click.native="backTop" />
    </transition>
  </div>
</template>

<script>
  import SwiperShow from 'components/content/SwiperShow/SwiperShow.vue'
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Rotation from 'components/common/rotation/Rotation.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsLists from 'components/content/goods/GoodsLists.vue'
  import Scroll from 'components/common/BScroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'

  import Feature from './childComps/Feature.vue'
  import {getHomeMultidata,getHomeGoods} from 'network/home.js'

  export default{
    name:'Home',
    components:{
      NavBar,
      SwiperShow,
      Rotation,
      Feature,
      TabControl,
      GoodsLists,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShow:false
      }
    },
    created(){
      //请求多个数据
      this.getHomeMdata()

      //请求商品数据
      this.getHomeGdata('pop')

      this.getHomeGdata('new')

      this.getHomeGdata('sell')

      //监听item中图片的加载
      this.$bus.$on('itemImageLoad',()=>{
        this.$refs.scroll.refresh()
      })
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      //事件监听相关
      tabClick(index){
        //内部分页展示
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backTop(){
        //返回顶部
        this.$refs.scroll.scrollTo(0,0,800)
      },
      contentS(position){
        //返回顶部显示位置
        // if(-position.y > 1000){this.isShow = true}
        this.isShow = (-position.y) > 1000
      },
      loadMore(){
        this.getHomeGdata(this.currentType)
      },
      //网络请求相关
      getHomeMdata(){
        getHomeMultidata().then(res=>{
         this.banners = res.data.banner.list
         this.recommends = res.data.recommend.list
        })
      },
      getHomeGdata(type){
        const page = this.goods[type].page +1
        getHomeGoods(type,page).then(res=>{
          //...三元运算符
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
   }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
.home-nav{
  background-color: rgb(255,129,152);
  color: white;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: white;
  z-index: 10;
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.backShow-enter-active, .backShow-leave-active {
  transition: opacity .3s;
}
.backShow-enter, .backShow-leave-to {
  opacity: 0;
}
</style>
