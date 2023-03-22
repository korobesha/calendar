<template>
  <div class="validation-textarea">
    <label class="validation-textarea-label">
      {{ name }}
    </label>
    <textarea class="validation-textarea-block" v-model="message" @input="onChangeText"></textarea>
  </div>
</template>

<script>

export default {
  name: 'ValidationTextarea',
  data: () => ({
    name: 'message',
    message: '',
  }),
  props: {
    value: String,
  },
  mounted() {
    this.message = this.value
  },
  methods: {
    onChangeText() {
      this.$emit('input', this.message)
    }
  },
}
</script>

<style lang="scss">
.validation-textarea {
  margin-top: 10px;
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
  }

  &-block {
    border-radius: 5px;
    min-width: 190px;
    min-height: 34px;
    border: 1px solid #fff;
    outline: none;
    padding: 0 8px;
  }
}
</style>