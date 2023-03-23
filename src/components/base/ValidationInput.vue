<template>
  <div class="validation-input">
    <label class="validation-input-label">
      {{ inputName }}
    </label>
    <input type="text" v-model="inputValue" :class="['validation-input-field', {
      'validation-input-field__success': isInputValid,
      'validation-input-field__error': inputError
    }]" @blur="onBlur" @focus="onFocus" />
    <div v-if="inputError" class="validation-input-error">
      {{ inputError }}
    </div>
  </div>
</template>

<script>
import validator from "@/utils/validators";

export default {
  name: 'ValidationInput',
  data: () => ({
    name: '',
    isTouched: false,
    isInputValid: false,
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
        // понимаем когда первый пользовател коснулся инпута
        this.isTouched = true;
        // получили новое значение - сразу отдали его наверх
        this.$emit('input', newValue);
        // проверили валидно или не валидно
        this.isInputValid = newValue && validator[this.inputName](newValue);
        // и результат проверки тоже отправили наверх
        this.$emit('check-valid', this.isInputValid);
      },
    },
  },
  methods: {
    onBlur() {
      if (!this.isInputValid) this.inputError = 'Invalid data';
    },
    onFocus() {
      this.inputError = '';
    }
  },
}
</script>

<style lang="scss">
.validation-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 190px;
  padding: 2px;

  &:not(:first-child) {
    margin-top: 6px;
  }

  &-label {
    text-transform: capitalize;
    align-self: flex-start;
    border-radius: 5px;
    font-weight: 600;
    font-size: 12px;
    height: 20px;
  }

  &-field {
    border-radius: 5px;
    min-width: 190px;
    min-height: 34px;
    border: 1px solid #fff;
    outline: none;
    padding: 0 8px;

    &__success {
      border: 1px solid green;
    }

    &__error {
      border: 1px solid red;
    }
  }

  &-error {
    margin-top: 4px;
    color: red;
    font-size: 10px;
    font-weight: 600;
  }
}
</style>