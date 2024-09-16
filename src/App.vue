<template>
  <div id="app">
    <router-view></router-view>
    <SideMenu />
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';

export default {
  name: "App",
  components: {
    SideMenu 
  },
}
</script>