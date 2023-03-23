<template>
  <div class="validation-select">
    <label class="validation-select-label">
      {{ title }}
    </label>
    <select class="validation-select-block" v-model="gender" @change="onSelectGender">
      <option v-for="variant in variants" :key="variant.value">{{ variant.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ValidationSelect',
  props: {
    value: String,
    title: String
  },
  data: () => ({
    name: 'gender',
    variants: [
      {
        value: 'male',
        label: 'Male'
      },
      {
        value: 'female',
        label: 'Female'
      }
    ],
    gender: 'Male',
  }),
  mounted() {
    this.gender = this.value;
  },
  methods: {
    onSelectGender() {
      this.$emit('input', this.gender)
    }
  },
}
</script>

<style lang="scss">
.validation-select {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 190px;
  width: 100%;
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
    box-sizing: content-box;
  }
}
</style>