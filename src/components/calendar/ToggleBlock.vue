<template>
  <div class="toggle-block" >
    <button class="toggle-block-previous" @click="$emit('toggle', -1)" :disabled="isDisabledMinButton"></button>
    <button class="toggle-block-current" @click="$emit('toggle', 0)">
    <slot></slot>
    </button>
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

    &:disabled{
      background:none;
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

    &:hover {
      background-color:  aqua;
    }  
  };
}
</style>
