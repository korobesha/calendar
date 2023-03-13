<template>
  <div id="app">
    <router-view></router-view>
    <SideBar />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    SideBar
  },
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
