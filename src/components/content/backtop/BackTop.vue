<template>
  <transition name="backShow">
    <div class="back-top">
      <img src="~assets/img/common/top.png">
    </div>
  </transition>
</template>

<script>
	export default {
		name:'BackTop'
	}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 10;
}
.back-top img{
  width: 50px;
  height: 50px;
}
/* .active */
 .backShow-enter-active, .backShow-leave-active {
   transition: opacity .3s;
 }
 .backShow-enter, .backShow-leave-to {
   opacity: 0;
 }
</style>
