<template>
  <transition name="toastShow">
    <div v-if="isShow" class="toast">
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'Toast',
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    props:{
      // message:{
      //   type:String,
      //   default(){
      //     return '网络错误'
      //   }
      // }
    },
    methods:{
       show(message='未填写提示',times=2000){
          this.isShow = true
          this.message = message

          setTimeout(()=>{
            this.isShow = false
            this.message = ''
          },times)
       }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 999;
    padding: 10px 10px;
    top: 50%;
    left: 40%;
    background-color: rgba(0,0,0,0.6);
    color: white;
    border-radius: 20px;
  }
  .toastShow, .toastShow-leave-active {
    transition: opacity .4s;
  }
  .toastShow-enter, .toastShow-leave-to {
    opacity: 0;
  }
</style>
