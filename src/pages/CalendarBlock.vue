<template>
  <div class="calendar-block">
    <LoaderRing v-if="loading"/>
    <div v-else>
      <CalendarHeader class="calendar-block-header" />
      <CalendarYear />
    </div>
  </div>
</template>

<script>
import CalendarYear from '@/components/calendar/CalendarYear.vue';
import CalendarHeader from '@/components/calendar/CalendarHeader.vue';
import LoaderRing from '@/components/LoaderRing.vue';

export default {
  name: 'CalendarBlock',
  components: {
    CalendarYear,
    CalendarHeader,
    LoaderRing
  }, 
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false}, 1000)
  }
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
