<template>
  <div class="validation-input">
    <div>
      <label class="form-label">
        {{ inputName }}
      </label>
    </div>
    <input  
      type="text" 
      class="form-input"
      v-model="inputValue"
      :class="{ error: isTouched && !this.isDataValid && inputValue }"
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
        this.inputError = 'Invalid data'
      } else {
        return this.inputError = ''
      }
    },
  },
}
</script>

<style lang="scss">
.validation-input {
  margin-top: 10px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start; 
  min-width: 190px;
};

.form-input {
  border: none;

  &.invalidBirthDay {
    color: red;
  };

  &:focus-visible {
    border: 1px yellow solid;
    outline: none;
  };

};
.error {
  margin-top: 2px;
  color: red;
};
</style>