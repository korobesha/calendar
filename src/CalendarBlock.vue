<template>
  <div class="calendar-block">
    <div class="calendar-block-header">
      Сегодня {{ currentDate }}
    </div>
    <CalendarYear :current-year="currentYear" />
  </div>
</template>

<script>

import moment from 'moment';
import CalendarYear from '@/components/CalendarYear.vue';

export default {
  name: 'CalendarBlock',
  props: {
  },
  components: {
    CalendarYear,
  },
  data: () => ({
    currentDate: moment().format('DD.MM.YYYY'),
    currentYear: new Date().getCurrentYear(),
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.calendar-block-header {
  font-size: 18px;
  padding: 30px;
}

.calendar-block {
  font-family: 'PT Sans', sans-serif;
  background: #F1F2FC;
  height: 100%;
}
</style>
