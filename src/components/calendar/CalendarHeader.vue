<template>
    <div>
      <ToggleBlock @toggle=" inc => $emit('toggle',inc)" :current-project-year="currentProjectYear" :is-disabled-min-button="disableMinButton" :is-disabled-max-button="disableMaxButton"/>
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
    ...mapState (['currentProjectYear',]),
    disableMaxButton() {
      return this.currentProjectYear > new Date().getFullYear();
    },
    disableMinButton() {
      return this.currentProjectYear < new Date().getFullYear() - 4;
    }
  },
}
</script>

<style lang="scss">
</style>