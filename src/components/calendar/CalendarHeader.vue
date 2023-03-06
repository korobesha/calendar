<template>
    <div >
      <CalendarToggler @toggle-pos=" inc => $emit('toggle-year',inc)">
        <slot></slot>
      </CalendarToggler>
    </div>
</template>

<script>
import CalendarToggler from '@/components/calendar/CalendarToggler.vue';
export default{
  name: 'CalendarHeader',
  components: {
    CalendarToggler,
  },
}
</script>

<style lang="scss">
</style>