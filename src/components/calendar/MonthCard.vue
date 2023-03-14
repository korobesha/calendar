<template>
  <div class="month-card">
    <div class="month-card-header">
      {{ nameOfMonth }}
    </div>
    <div class='month-card-days'>
      <div class="day" 
        v-for="weekDay in displayWeekDays" 
        :key="`weekDay${weekDay}`"
      >
        {{ weekDay }}
      </div>
      <div class="day empty-day" 
        v-for="(emptyDay, i) in emptyDays" 
        :key="`emptyDay${emptyDay}`"
      >
        {{ getDayByIndex(emptyDays - i) }}
      </div>
      <DayCard 
        class="day"
        v-for="day in numberOfDays" 
        :key="day" 
        :day="day" 
        :is-it-week-end="checkIsWeekEnd(day)" 
      />
      <div class="day empty-day" 
        v-for="(emptyLastDay, i) in emptyLastDays" 
        :key="`emptyLastDay${emptyLastDay}`"
      >
        {{ getLastDayByIndex(i + 1) }}
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import DayCard from './DayCard.vue';
import { mapState } from 'vuex';

export default {
  name: 'MonthCard',
  props: {
    month: Number,
  },
  components: {
    DayCard,
  },
  data: () => ({
    weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  }),
  computed: {
    ...mapState (['currentProjectYear']),
    displayWeekDays() {
      return this.weekDays.map((day) => day.slice(0, 2));
    },
    numberOfDays() {
      return this.firstDayMoment.daysInMonth();
    },
    firstDayOfMonth() {
      return `01-${this.month}-${this.currentProjectYear}`;
    },
    firstDayOfMonthWeekDay() {
      const firstWeekDay = this.firstDayMoment.day();
      return firstWeekDay ? firstWeekDay : 7
    },
    emptyDays() {
      return this.firstDayOfMonthWeekDay - 1;
    },
    lastDayOfMonth() {
      return `${this.numberOfDays}-${this.month}-${this.currentProjectYear}`;
    },
    lastDayOfMonthWeekDay() {
      const lastWeekDay = this.lastDayMoment.day();
      return lastWeekDay ? lastWeekDay : 7
    },
    emptyLastDays() {
      return 7 - this.lastDayOfMonthWeekDay;
    },
    firstDayMoment() {
      return moment(this.firstDayOfMonth, 'DD-MM-YYYY');
    },
    lastDayMoment() {
      return moment(this.lastDayOfMonth, 'DD-MM-YYYY');
    },
    nameOfMonth() {
      return moment(this.month, 'MM').format('MMMM');
    },
  },
  methods: {
    getDayByIndex(i) {
      return moment(this.firstDayOfMonth, 'DD-MM-YYYY').subtract(i, 'days').format('D');
    },
    getLastDayByIndex(i) {
      return moment(this.lastDayOfMonth, 'DD-MM-YYYY').add(i, 'days').format('D');
    },
    checkIsWeekEnd(day) {
      const currentDay = moment(`${day}-${this.month}-${this.currentProjectYear}`, 'DD-MM-YYYY').day();
      const isWeekEnd = currentDay === 0 || currentDay === 6;
      return isWeekEnd;
    },
  },
}
</script>

<style lang="scss">
.month-card {
  display: block;
  margin: 15px;

  &-header {
    display: flex;
    justify-content: center;
    width: 168px;
    height: 30px;
    font-weight: 300;
  };
  
  &-days {
    display: flex;
    width: 168px;
    flex-wrap: wrap;
  };
};

.empty-day {
  color: #AAA;
};

.day {
  display: flex;
  flex-wrap: wrap;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
};
</style>
