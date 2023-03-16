<template>
  <div class="calendar-block">
      <CalendarHeader class="calendar-block-header" />
      <CalendarYear />
  </div>
</template>

<script>
import CalendarYear from '@/components/calendar/CalendarYear.vue';
import CalendarHeader from '@/components/calendar/CalendarHeader.vue';


export default {
  name: 'CalendarBlock',
  components: {
    CalendarYear,
    CalendarHeader,
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
    padding: 20px;
  };
};
</style>
