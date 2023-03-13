<template>
    <div class="calendar-header">
      <div class="calendar-header-block">
        {{ currentProjectYear }}
      </div>
      <ToggleBlock 
        @toggle="setCurrentProjectYear" 
        :is-disabled-min-button="currentProjectYear < new Date().getFullYear() - 4" 
        :is-disabled-max-button="currentProjectYear > new Date().getFullYear()"
      />
    </div>
</template>

<script>
import ToggleBlock from '@/components/calendar/ToggleBlock.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'CalendarHeader',
  components: {
    ToggleBlock,
  },
  computed: {
    ...mapState (['currentProjectYear',])
  },
  methods: {
    ...mapMutations({
      setCurrentProjectYear: 'SET_CURRENT_YEAR',
    }),
  },
}
</script>

<style lang="scss">
.calendar-header {
  display:flex;
  align-items: center;
};
</style>