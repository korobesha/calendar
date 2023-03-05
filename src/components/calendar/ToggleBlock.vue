<template>
    <div >
      <ToggleYear @set-current-year="$emit('set-current-year',)"><slot></slot></ToggleYear>
    </div>
</template>

<script>
import ToggleYear from '@/components/calendar/ToggleYear.vue';
export default{
  name: 'CalendarBlock',
  components: {ToggleYear},
}
</script>

<style lang="scss">
</style>