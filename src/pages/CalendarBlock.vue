<template>
  <div class="calendar-block">
     <ToggleYear @set-current-year="setCurrentProjectYear">Сегодня{{ currentProjectYear }}</ToggleYear> 
    <CalendarYear :current-project-year="currentProjectYear" />
  </div>
</template>

<script>
import CalendarYear from '@/components/calendar/CalendarYear.vue';
import { mapMutations, mapState } from 'vuex';
import ToggleYear from '@/components/calendar/ToggleYear.vue'

export default {
  name: 'CalendarBlock',
  components: {
    CalendarYear,
    ToggleYear,
  },
  computed: {
    ...mapState (['currentProjectYear'])
  },
  methods: {
    ...mapMutations({
      setCurrentProjectYear: 'SET_CURRENT_YEAR',
    }),
    setCurrentYear(i) {
      return this.setCurrentProjectYear(i);
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.calendar-block {
  font-family: 'PT Sans', sans-serif;
  background: #F1F2FC;
  height: 100%;

  &-header {
    font-size: 18px;
    padding: 30px;
  }
}
</style>
