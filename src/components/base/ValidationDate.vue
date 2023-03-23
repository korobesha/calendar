<template>
  <div class="validation-date">
    <label class="validation-date-label">
      {{ title }}
    </label>
    <input required type="date" max="2023-01-01" :class="['validation-date-block', {
      'validation-date-block__success': !birthErr && value,
      'validation-date-block__error': birthErr
    }]" v-model="birthday" @blur="onBlur" @focus="onFocus" />
    <div v-if="birthErr" class="validation-date-block-error">
      {{ birthErr }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ValidationDate',
  props: {
    value: String,
    title: String,
  },
  data: () => ({
    birthErr: false,
  }),
  computed: {
    birthday: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
  methods: {
    onBlur() {
      const isTeen = moment().diff(moment(this.value, 'YYYY-MM-DD').add(18, 'years'), 'days') <= 0;
      const isMaxValue = moment(this.value, 'YYYY_MM_DD').isBefore('1923-01-01');
      const isMinValue = moment(this.value, 'YYYY_MM_DD').isAfter('2023-01-01');
      this.birthErr = (isTeen || isMaxValue || isMinValue);
      if (this.birthErr) this.birthErr = 'Invalid data';
      this.$emit('is-invalid', this.birthErr);
    },
    onFocus() {
      this.birthErr = '';
    },
  }
}
</script>

<style lang="scss">
.validation-date {

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

    &-error {
      margin-top: 4px;
      color: red;
      font-size: 10px;
      font-weight: 600;
    }
  }
}
</style>