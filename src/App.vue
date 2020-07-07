<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
	export default {
	  name: 'App'
	}
</script>

<style scoped>
</style>
