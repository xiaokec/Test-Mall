<template>
  <div id="detail" @mousewheel.prevent>
    <detail-nav-bar ref="nav" @titleClick="titleChange"/>
     <Scroll @scroll="contentS" :probe-type="3" ref="scroll" class="content" :pull-up="false">
      <detail-swiper :banners="banners"  />
      <l-down-title :goods="goods" />
      <shop-info :shop="shop" />
      <detail-info :detail-info="detailInfo"  />
      <params-info ref="params" :params-info="paramsInfo" />
      <detail-comment ref="comment" :detail-comment="commentInfo"/>
      <detail-recommend ref="recommend" :recommend="recommendData"/>
      <!-- <goods-lists :goods="recommendData"/> -->
    </Scroll>
    <detail-bottom-bar @ToGoPay="ToGoPay" @addToCart="addToCart" />
    <toast v-if="isShowToast" :message="message"/>
    <back-top  v-if="isShow" @click.native="backTop" />
  </div>
</template>

<script>
  import DetailNavBar from './childComp/DetailNavBar.vue'
  import DetailSwiper from './childComp/DetailSwiper.vue'
  import LDownTitle from './childComp/LDownTitle.vue'
  import shopInfo from './childComp/ShopInfo.vue'
  import Scroll from 'components/common/BScroll/Scroll.vue'
  import detailInfo from './childComp/detailInfo.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'
  import ParamsInfo from './childComp/ParamsInfo.vue'
  import DetailComment from './childComp/DetailComment.vue'
  import DetailRecommend from './childComp/DetailRecommend.vue'
  // import GoodsLists from 'components/content/goods/GoodsLists.vue'
  import DetailBottomBar from './childComp/DetailBottomBar.vue'
  import Toast from 'components/common/toast/Toast.vue'

  import {getDetailData,getRecommendData,Goods,Shop,GoodsParam} from 'network/detail.js'
  import {debounce} from 'common/utils.js'
  import {itemListMixin} from 'common/mixin.js'
  import store from '../../store/index.js'
  import {mapActions} from 'vuex'

  export default{
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      LDownTitle,
      shopInfo,
      Scroll,
      detailInfo,
      BackTop,
      ParamsInfo,
      DetailComment,
      DetailRecommend,
      DetailBottomBar,
      Toast
      // GoodsLists
    },
    mixins:[itemListMixin],
    data(){
      return {
        banners:[],
        iid:null,
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommendData:[],
        isShow:false,
        detailILi:null,
        themeTopY:[],
        getThemeTopY:null,
        currIndex:0,
        isShowToast:false,
        message:''
      }
    },
    created(){
      this.iid = this.$route.params.iid

      this.getDetail(this.iid)
      this.getRecommend()

      this.getThemeTopY = debounce(()=>{
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      },100)
    },
    destroyed(){
      this.$bus.$off('itemImageLoad',this.detailILi)
    },
    mounted(){
      //mixin混入
    },
    updated() {
      this.getThemeTopY()
    },
    methods:{
      ...mapActions(['addCart']),
      //请求详情数据
      getDetail(iid){
        getDetailData(iid).then(res=>{
          const data = res.result
          //顶部轮播
          this.banners = data.itemInfo.topImages
          //获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          //获取店铺信息
          this.shop = new Shop(data.shopInfo)
          //获取商品详细
          this.detailInfo = data.detailInfo
          //获取参数信息
          this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          //获取评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
          }
        })
      },
      //请求推荐数据
      getRecommend(){
        getRecommendData().then(res=>{
          const data = res.data.list
          this.recommendData = data
        })
      },
      backTop(){
        //返回顶部
        this.$refs.scroll.scrollTo(0,0,800)
      },
      contentS(position){
        const positionY = -position.y
        //监听首页的滚动
        //返回顶部显示位置
        this.isShow = positionY > 1000

        let length = this.themeTopY.length
        for(let i = 0;i<length;i++){
          if((this.currIndex !== i) && ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]) || (i === length -1 && positionY >= this.themeTopY[i]))){
            this.currIndex = i
            this.$refs.nav.currentIndex = this.currIndex
          }
        }
      },
      titleChange(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],1000)
      },
      addToCart(){
        // 1.获取购物车商品信息
        const product = {}
        product.image = this.banners[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 2.添加到购物车
        // this.$store.commit('addCart',product)
        this.addCart(product).then(res =>{
          // this.isShowToast = true
          // this.message = res

          // setTimeout(()=>{
          //   this.isShowToast = false
          //   this.message = ''
          // },1500)
          this.$toast.show(res,2000)
        }).catch(err =>{
          // this.isShowToast = true
          // this.message = '网络错误'

          // setTimeout(()=>{
          //   this.isShowToast = false
          //   this.message = ''
          // },1500)
          this.$toast.show(err,2000)
        })
        // this.$store.dispatch('addCart',product).then(res =>{
        //   console.log(res)
        // }).catch(err =>{

        // })
      },
      ToGoPay(){
        this.$toast.show('此功能未开放',2000)
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .content{
    z-index: 10;
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 50px;
    left: 0;
    overflow: hidden;
    width: 100%;
  }
</style>
