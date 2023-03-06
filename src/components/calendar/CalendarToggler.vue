<template>
  <div class="toggle-pos" >
    <div class="toggle-pos-previous" @click="$emit('toggle-pos', -1)" ></div>
    <div class="toggle-pos-current" @click="$emit('toggle-pos', 0)">
      <slot></slot>
    </div>
    <div class="toggle-pos-next" @click="$emit('toggle-pos', 1)"></div>
  </div>
</template>

<script>

export default {
  name: 'CalendarToggler',
};
</script>

<style lang="scss">
.toggle-pos {
  display: flex;
  align-items: center;

  &-previous {
    margin: 10px;
    height: 24px;
    width: 24px;
    background: url('@/assets/arrow_back.svg');
    cursor: pointer;

    &:hover {
      background-color:  aqua;
    }
  };

  &-next {
    margin: 10px;
    height: 24px;
    width: 24px;  
    background: url('@/assets/arrow_forward.svg');
    cursor: pointer;

    &:hover {
      background-color: aqua;
    }  
  };
  &-current {
    cursor: pointer;
    padding: 5px;

    &:hover {
      background-color:  aqua;
    }  
  };
}
</style>
