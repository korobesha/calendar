<template>
    <div >
      <ToggleYear @set-year="$emit('set-current-year')"><slot></slot></ToggleYear>
    </div>
</template>

<script>
import ToggleYear from '@/components/calendar/ToggleYear.vue';
export default{
  name: 'ToggleBlock',
  components: {
    ToggleYear,
  },
}
</script>

<style lang="scss">
</style>