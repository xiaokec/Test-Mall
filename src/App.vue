<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from './components/content/MainTabBar/MainTabBar.vue'

	export default {
	  name: 'App',
	  components: {
      MainTabBar
	  }
	}
</script>

<style scoped>
@import url("assets/css/base.css");

#app{
  max-width: 640px;
  height: 100%;
  width: 100%;
  margin: auto;
}
</style>
