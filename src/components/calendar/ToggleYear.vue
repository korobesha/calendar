<template>
  <div class="toggle-year" >
    <div class="toggle-year-previous" @click="onToggleYearDecr"></div>
    <div class="toggle-year-current" @click="onToggleYear"><slot></slot></div>
    <div class="toggle-year-next" @click="onToggleYearIncr"></div>
  </div>
</template>

<script>

export default {
  name: 'ToggleYear',
  props: {
  },
  method: {
    onToggleYear() {
      this.$emit('increaseCurrentYear');
    },
    onToggleYearIncr() {
      this.$emit('setCurrentProjectYear');
    },
    onToggleYearDecr() {
      this.$emit('decreaseCurrentYear');
    },
  },
};
</script>

<style lang="scss">
.toggle-year{
  display: flex;
  align-items: center;

  &-previous{
    margin: 10px;
    height: 24px;
    width: 24px;
    background: url('@/assets/arrow_back.svg');
    cursor:pointer;

    &:hover{
      background-color: aqua;
    }
  };

  &-next{
    margin: 10px;
    height: 24px;
    width: 24px;  
    background: url('@/assets/arrow_forward.svg');
    cursor:pointer;

    &:hover{
      background-color: aqua;
    }  
  };
  &-current{
    cursor:pointer;
    padding:5px;

    &:hover{
      background-color: aqua;
    }  
  };
}

</style>
