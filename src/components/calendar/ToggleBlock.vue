<template>
  <div class="toggle-block" >
    <button 
      class="toggle-block-previous" 
      @click="$emit('toggle', -1)" 
      :disabled="isDisabledMinButton"
    >
      <svg id="arrow_back" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
    </button>
    <button class="toggle-block-current" @click="$emit('toggle', 0)">Today</button>
    <button 
      class="toggle-block-next" 
      @click="$emit('toggle', 1)" 
      :disabled="isDisabledMaxButton"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
      </svg>
    </button>
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 32px;
    width: 36px;
    cursor: pointer;

    &:disabled {
      cursor: default;

      svg {
        fill: #CCC;
      };

      &:hover {
        background-color: #F1F2FC;
      };
    };
  
    &:hover {
      background-color: #d7d9e7;
    };
  };
  &-next {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    height: 32px;
    width: 36px; 
    cursor: pointer;

    &:disabled {
      color: #F1F2FC;
      cursor: default;

      svg {
        fill: #CCC;
      };

      &:hover {
        background-color: #F1F2FC;     
      };
    };

    &:hover {
      background-color: #d7d9e7;
    };
  };
  &-current {
    cursor: pointer;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      background-color:  #d7d9e7;
    };
  };
};
</style>
