<template>
  <div class="calendar-block">
    <div class="calendar-block-header">
      <SideMenu />
      <CalendarHeader />
    </div>
    <div class="calendar-block-content">
      <CalendarYear />
    </div>  
  </div>
</template>

<script>
import CalendarYear from '@/components/calendar/CalendarYear.vue';
import CalendarHeader from '@/components/calendar/CalendarHeader.vue';
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'CalendarBlock',
  components: {
    CalendarYear,
    CalendarHeader,
    SideMenu,
  }, 
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

html {
  height: 100%;
}
body {
  height: 100% ;
}

.calendar-block {
  font-family: 'PT Sans', sans-serif;
  background: #F1F2FC;
  display: block;
  height: auto;

  &-header {
    font-size: 18px;
    padding: 20px;
    display: flex;
  };
  &-content {
    display: flex;
    justify-content: center;
  }
};
</style>
