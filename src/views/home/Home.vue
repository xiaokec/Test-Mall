<template>
  <div id="home" @mousewheel.prevent>
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <tab-control v-show="isShowTab" class="upCtrol" ref="tabControl1" @tabClick="tabClick" :title="['流行','新款','精选']"/>
    <scroll :pull-up="true" @pullingUp="loadMore" @scroll="contentS" :probe-type="3" class="content" ref="scroll">
      <swiper-show :banners="banners" @swiperImageLoad.once="swiperImageLoad" />
      <rotation :recommends="recommends"/>
      <feature/>
      <tab-control  ref="tabControl2" @tabClick="tabClick" :title="['流行','新款','精选']"/>
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
  import {debounce} from 'common/utils.js'
  import {itemListMixin} from 'common/mixin.js'

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
    mixins:[itemListMixin],
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
        isShow:false,
        tabOffsetTop:0,
        isShowTab:false,
        saveY:0,
        homeILis:null
      }
    },
    created(){
      //请求多个数据
      this.getHomeMdata()

      //请求商品数据
      this.getHomeGdata('pop')

      this.getHomeGdata('new')

      this.getHomeGdata('sell')

    },
    //回到上一次离开时的地方
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scroll.scrollTo(0,this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      //保存Y值
      this.saveY = this.$refs.scroll.scroll.y
      //取消全局变量监听
      this.$bus.$off('itemImageLoad',this.homeILis)
    },
    mounted(){
      //mixin混入
      
      // //调用防抖
      // const refresh = debounce(this.$refs.scroll.refresh,200)

      // //保存监听的事件
      // this.homeILis = ()=>{
      //   // this.$refs.scroll.refresh()
      //   refresh()
      // }
      // //监听item中图片的加载
      // this.$bus.$on('itemImageLoad',this.homeILis)
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
        if(this.$refs.tabControl1 !== undefined && this.$refs.tabControl2 !== undefined){
          this.$refs.tabControl1.curIndex = index
          this.$refs.tabControl2.curIndex = index
        }
      },
      backTop(){
        //返回顶部
        this.$refs.scroll.scrollTo(0,0,800)
      },
      contentS(position){
        //监听首页的滚动
        //返回顶部显示位置
        // if(-position.y > 1000){this.isShow = true}
        this.isShow = (-position.y) > 1000

        //决定tabControl(position:fixd)
        this.isShowTab = (-position.y) > this.tabOffsetTop
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

          //完成加载
          this.$refs.scroll.finishPullUp()
        })
      },
      swiperImageLoad(){
        //tabControl的offsettop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
    }
   }
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
.home-nav{
  background-color: rgb(255,129,152);
  color: white;
  z-index: 9;
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
.upCtrol{
  position: relative;
  z-index: 10;
  background-color: white;
}
</style>
