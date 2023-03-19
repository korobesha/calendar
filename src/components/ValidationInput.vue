<template>
  <div class="validation-input">
    <div>
      <label>
        {{inputName}}
      </label>
    </div>
    <input  
      type="text" 
      class="form-input"
      v-model="inputValue"
      :class="{ invalid: isTouched && !this.isDataValid && inputValue }"
      @focus="showError"
      @focusin="showError"
      @focusout="showError"
    />
    <div class="error">{{ inputError }}</div>
  </div>
</template>

<script>
import validator from "@/utils/validators";

export default {
  name: 'ValidationInput',
  data: () => ({
   name: '',
   isTouched: false,
   isDataValid: false,
   inputError: '',
  }),
  props: {
    value: String,
    inputName: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.isDataValid = newValue && validator[this.inputName](newValue);
        this.isTouched = true;
        this.$emit('input', newValue);
        this.$emit('check-valid', this.isDataValid);
      },
    },
  },
  methods: {
    showError() {
      if (!this.isDataValid && this.isTouched) {
        this.inputError = 'Неверное значение'
      } else {
        return this.inputError = ''
      }
    },
  },
}
</script>

<style lang="scss">
.validation-input {
  column-gap: 10px;
}

.form-input {
  border: none;

  &:focus-visible {
    border: 1px yellow solid;
    outline: none;
  }

  &.invalid {
    border: red 1px solid;
  };
};
.error {
  color: red;
}
</style>