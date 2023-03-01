<template>
  <div id="app">
    <CalendarBlock />
  </div>
</template>

<script>

import CalendarBlock from '@/CalendarBlock.vue';

export default {
  name: 'App',
  components: {
    CalendarBlock,
  },
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
