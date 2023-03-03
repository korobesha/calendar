<template>
  <div class="calendar-block">
    <div class="calendar-block-header">
      Сегодня {{ currentProjectYear }} год
    </div>
    <CalendarYear :current-year="currentYear" />
  </div>
</template>

<script>
import moment from 'moment';
import CalendarYear from '@/components/CalendarYear.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'CalendarBlock',
  components: {
    CalendarYear,
  },
  data: () => ({
    currentDate: moment().format('DD.MM.YYYY'),
    currentYear: new Date().getFullYear(),
  }),
  computed: {
    ...mapState(['currentProjectYear'])
  },
  mounted() {
    this.setCurrentProjectYear(new Date().getFullYear())
  },
  methods: {
    ...mapMutations({
      setCurrentProjectYear: 'SET_CURRENT_YEAR'
    }),
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
