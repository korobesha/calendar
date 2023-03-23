<template>
  <div class="validation-checkbox">
    <div style="display:flex; align-items: center;gap: 4px;">
      <input type="checkbox" name="agreement" class="validation-checkbox-block" v-model="toggle"
        @change="onChangeCheckbox" />
      <label class="validation-checkbox-label">
        I agree with using my personal data
      </label>
    </div>
    <div class="validation-checkbox-error" v-if="!!err">
      {{ err }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValidationCheckbox',
  props: {
    value: Boolean,
  },
  data: () => ({
    name: 'agreement',
    toggle: false,
    isTouched: true,
    err: '',
  }),
  mounted() {
    this.toggle = this.value;
  },
  methods: {
    onChangeCheckbox() {
      this.$emit('input', this.toggle);
      this.isTouched = !this.isTouched;
      this.$emit('checking', !!this.toggle);
      if (this.value && this.isTouched) {
        this.err = 'Need to accept the agreement'
      } else {
        return this.err = ''
      }
    },
  },
}
</script>

<style lang="scss">
.validation-checkbox {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 190px;
  padding: 2px;

  &-label {
    text-transform: capitalize;
    align-self: flex-start;
    border-radius: 5px;
    gap: 5px;
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    height: 20px;
    align-items: center;
    display: flex;
  }

  &-block {
    border: none;
    outline: none;
    height: 20px;
    gap: 5px;
  }

  &-error {
    margin-top: 4px;
    color: red;
    font-size: 10px;
    font-weight: 600;
  }
}
</style>
