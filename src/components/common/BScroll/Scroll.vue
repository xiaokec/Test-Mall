<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    name:'BScroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
        pullUp:{
          type:Boolean,
          default:false
        }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      //创建bs对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        // probeType:3 监听滚动位置
        probeType:this.probeType,
        pullUpLoad:this.pullUp
      })
      //监听滚动位置
       if(this.probeType === 2 || this.probeType === 3){
         this.scroll.on('scroll',position =>{
           this.$emit('scroll',position)
         })
       }
       //监听上拉事件
       //监听滚动到底部
       if(this.pullUp){
         this.scroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
         })
       }
    },
    methods:{
      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        //逻辑和判断
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>
