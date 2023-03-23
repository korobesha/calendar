<template>
  <div class="validation-textarea">
    <label class="validation-textarea-label">
      {{ title }}
    </label>
    <textarea
      :class="['validation-textarea-block', { 'validation-textarea-block__error': symbolsError, 'validation-textarea-block__success': this.value && !symbolsError }]"
      v-model="message" @input="onChangeText" @blur="onBlur" @focus="onFocus"></textarea>
    <div v-if="symbolsError" class="validation-textarea-error">
      {{ symbolsError }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ValidationTextarea',
  data: () => ({
    message: '',
    symbolsError: '',
  }),
  props: {
    value: String,
    title: String,
  },
  mounted() {
    this.message = this.value
  },
  methods: {
    onBlur() {
      if (this.symbols) this.symbolsError = 'Invalid symbols';
    },
    onFocus() {
      this.symbolsError = '';
    },
    onChangeText() {
      this.$emit('input', this.message);
    },
  },
  computed: {
    symbols() {
      return this.message && /[§~&%]/.test(this.message)
    }
  }
}
</script>

<style lang="scss">
.validation-textarea {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 190px;
  padding: 2px;

  &-label {
    text-transform: capitalize;
    align-self: flex-start;
    border-radius: 5px;
    font-weight: 600;
    font-size: 12px;
    height: 20px;
  }

  &-block {
    border-radius: 5px;
    max-width: 190px;
    min-width: 190px;
    min-height: 34px;
    border: 1px solid #fff;
    outline: none;
    padding: 8px 8px;

    &__error {
      border: 1px solid red;
    }

    &__success {
      border: 1px solid green;
    }
  }

  &-error {
    margin-top: 4px;
    color: red;
    font-size: 10px;
    font-weight: 600;
  }
}

.messageErr {
  color: red;
}
</style>