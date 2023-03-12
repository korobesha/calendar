<template>
  <div class="calendar-year">
    <MonthCard 
      v-for="month in months" 
      :key="month" 
      :month="month" 
    />
  </div>
</template>

<script>
import MonthCard from './MonthCard.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'CalendarYear',
  components: {
    MonthCard,
  },
  computed: {
    ...mapState (['currentProjectYear',])
  },
  data: () => ({
    months: 12,
  }),
  methods: {
    ...mapMutations({
      setCurrentProjectYear: 'SET_CURRENT_YEAR',
    }),
  },
};
</script>

<style>
.calendar-year {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
};
</style>
