<template>
    <div>
      <ToggleBlock @toggle=" inc => $emit('toggle',inc)" :current-project-year="currentProjectYear"/>
    </div>
</template>

<script>
import ToggleBlock from '@/components/calendar/ToggleBlock.vue';
import { mapState } from 'vuex';

export default {
  name: 'CalendarHeader',
  components: {
    ToggleBlock,
  },
  computed: {
    ...mapState (['currentProjectYear',])
  },
}
</script>

<style lang="scss">
</style>