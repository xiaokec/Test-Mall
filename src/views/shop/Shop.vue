<template>
  <div id="shop" @mousewheel.prevent>
    <nav-bar class="shop-nav">
      <div slot="center">
        购物车({{length}})
      </div>
    </nav-bar>
    <scroll :probe-type="3" class="content" ref="scroll">
      <inner-data />
    </scroll>
    <bottom-buy />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/BScroll/Scroll.vue'

  import BottomBuy from './childComps/BottomBuy.vue'
  import InnerData from './childComps/InnerData.vue'

  import {mapGetters} from 'vuex'

  export default{
    name:'Shop',
    components:{
      NavBar,
      Scroll,
      InnerData,
      BottomBuy
    },
    data(){
      return {

      }
    },
    methods:{

    },
    computed:{
      // ...mapGetters(['cartLength'])
      ...mapGetters({length:'cartLength'})
    }
  }
</script>

<style scoped>
#shop{
  height: 100vh;
}
.shop-nav{
  color: white;
  background-color: rgb(255,129,152);
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
}
</style>
