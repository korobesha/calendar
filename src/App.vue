<template>
  <div id="app">
    <SideMenu/>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';
export default {
  name: 'App',
  components: {
    SideMenu
  },
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
