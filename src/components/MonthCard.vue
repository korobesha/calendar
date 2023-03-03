<template>
  <div class="month-card">
    <div class="wrapper">
      <div class="month-card-header">
        {{nameOfMonth}}
      </div>
      <div class='month-card-wrapper'>
        <div class="day" v-for="weekDay in displayWeekDays" :key="`weekDay${weekDay}`" >
          {{ weekDay }}
        </div>
        <div class="day empty-day" v-for="(emptyDay, i) in emptyDays" :key="`emptyDay${emptyDay}`">
          {{ getDayByIndex(emptyDays - i) }}
        </div>
        <DayCard v-for="day in numberOfDays" :key="day" :day="day" class="day" :is-it-week-end="checkIsWeekEnd(day)" />
        <div class="day empty-day" v-for="(emptyLastDay, i) in emptyLastDays" :key="`emptyLastDay${emptyLastDay}`">
          {{ getLastDayByIndex(i + 1) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import DayCard from './DayCard.vue'

export default {
  name: 'MonthCard',
  props: {
    month: Number,
    currentYear: Number,
  },
  components: {
    DayCard
  },
  data: () => ({
    nameOfMonth: '',
    firstDayMoment: '',
    weekDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  }),
  methods: {
    getDayByIndex(i) {
      return moment(this.firstDayOfMonth, 'DD-MM-YYYY').subtract(i, 'days').format('D');
    },
    getLastDayByIndex(i) {
      return moment(this.lastDayOfMonth, 'DD-MM-YYYY').add(i, 'days').format('D');
    },
    checkIsWeekEnd(day) {
      const currentDay = moment(`${day}-${this.month}-${this.currentYear}`, 'DD-MM-YYYY').day();
      const isWeekEnd = currentDay === 0 || currentDay === 6;
      return isWeekEnd;
    },
  },
  computed: {
    displayWeekDays() {
      return this.weekDays.map((day) => day.slice(0, 2)
      );
    },
    numberOfDays() {
      return this.firstDayMoment.daysInMonth();
    },
    firstDayOfMonth() {
      return `01-${this.month}-${this.currentYear}`;
    },
    firstDayOfMonthWeekDay() {
      const firstWeekDay = this.firstDayMoment.day();
      return firstWeekDay ? firstWeekDay : 7
    },
    emptyDays() {
      return this.firstDayOfMonthWeekDay - 1;
    },
    lastDayOfMonth() {
      return `${this.numberOfDays}-${this.month}-${this.currentYear}`;
    },
    lastDayOfMonthWeekDay() {
      const lastWeekDay = this.lastDayMoment.day();
      return lastWeekDay ? lastWeekDay : 7
    },
    emptyLastDays() {
      return 7 - this.lastDayOfMonthWeekDay;
    },
  },
  created() {
    this.nameOfMonth = moment(this.month, 'MM').format('MMMM');
    this.firstDayMoment = moment(this.firstDayOfMonth, 'DD-MM-YYYY');
    this.lastDayMoment = moment(this.lastDayOfMonth, 'DD-MM-YYYY');
  },
}

</script>
<style lang="scss">
.month-card {
  display: flex;
  margin: 15px;

    &-header {
    display: flex;
    justify-content: center;
    width: 168px;
    height: 30px;
    font-weight: 300;
  }
    &-wrapper {
    display: flex;
    width: 168px;
    flex-wrap: wrap;
  }
} 

.empty-day {
  color: #AAA;
}

.day {
  display: flex;
  flex-wrap: wrap;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}
</style>
