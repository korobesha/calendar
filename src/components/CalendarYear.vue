<template>
  <div class="calendar-year">
    <MonthCard v-for="month in months" :key="month" :month="month" :current-year="currentYear" />
  </div>
</template>

<script>
import MonthCard from '@/components/MonthCard.vue';

export default {
  name: 'CalendarYear',
  props: {
    currentYear: {
      type: String,
      default: String(new Date().getFullYear()) // 2023
    }
  },
  components: {
    MonthCard,
  },
  data: () => ({
    months: 12,
  }),
};
</script>

<style>
.calendar-year {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
