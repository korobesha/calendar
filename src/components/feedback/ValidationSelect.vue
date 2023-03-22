<template>
  <div class="validation-select">
    <label class="validation-select-label">
      {{ name }}
    </label>
    <select class="validation-select-block" v-model="gender" @change="onSelectGender">
      <option>Female</option>
      <option>Male</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ValidationSelect',
  props: {
    value: String,
  },
  data: () => ({
    name: 'gender',
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

  margin-top: 10px;
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