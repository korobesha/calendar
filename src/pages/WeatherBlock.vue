<template>
  <div>
    <SideMenu />
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'WeatherBlock',
  data: () => ({
    name: '',
  }),
  props: {
  },
  components: {
    SideMenu,
  },
}

</script>

<style lang="scss">

</style>