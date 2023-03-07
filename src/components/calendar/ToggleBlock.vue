<template>
  <div class="toggle-block" >
    <button class="toggle-block-previous" @click="$emit('toggle', -1)" :disabled="isDisabledMinButton"></button>
    <button class="toggle-block-current" @click="$emit('toggle', 0)">Today</button>
    <button class="toggle-block-next" @click="$emit('toggle', 1)" :disabled="isDisabledMaxButton"></button>
  </div>
</template>

<script>

export default {
  name: 'ToggleBlock',
  props: {
    isDisabledMaxButton: Boolean,
    isDisabledMinButton: Boolean,
  },
}

</script>

<style lang="scss">
.toggle-block {
  display: flex;
  align-items: center;

  &-previous {
    margin: 10px;
    height: 24px;
    width: 24px;
    background: url('@/assets/arrow_back.svg');
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:disabled{
      background:  #F1F2FC;
      border: 1px solid #F1F2FC;
    }
    
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
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:disabled{
      display:none;
    }

    &:hover {
      background-color: aqua;
    }  
  };
  &-current {
    cursor: pointer;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      background-color:  aqua;
    }  
  };
}
</style>
