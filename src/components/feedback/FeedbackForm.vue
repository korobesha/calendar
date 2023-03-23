<template>
  <div class="modal">
    <div class="modal-overlay" @click="$emit('close-modal')"></div>
    <form id="feedBack" name="feedBack" class="feedback-form" @submit.prevent="submit">
      <div class="feedback-form-close" @click="$emit('close-modal')">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path
            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
        </svg>
      </div>
      <ValidationInput v-for="inputName in inputNames" :key="inputName" :inputName="inputName"
        v-model="formData[inputName]" @check-valid="valid => formDataValidFlags[inputName] = valid" />
      <ValidationSelect v-model="formData.gender" />
      <ValidationDate v-model="formData.birthday" @is-invalid="date => formDataValidFlags.birthday = date" />
      <ValidationCheckbox v-model="formData.agreement" @input="toggle => formDataValidFlags.agreement = toggle" />
      <ValidationTextarea v-model="formData.message" />
      <button class="feedback-form-button" type="submit" :disabled="!isValid">
        Send
      </button>
    </form>
  </div>
</template>

<script>
// import moment from 'moment';
import ValidationInput from '@/components/base/ValidationInput.vue';
import ValidationSelect from '@/components/base/ValidationSelect.vue';
import ValidationDate from '@/components/base/ValidationDate.vue';
import ValidationCheckbox from '@/components/base/ValidationCheckbox.vue';
import ValidationTextarea from '@/components/base/ValidationTextarea.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'FeedbackForm',
  data: () => ({
    inputNames: [
      'name', 'surname', 'phone', 'email'
    ],
    formData: {
      name: "",
      surname: "",
      gender: "Male",
      phone: "",
      birthday: "",
      email: "",
      agreement: false,
      message: "",
    },
    formDataValidFlags: {
      name: false,
      surname: false,
      phone: false,
      email: false,
      birthday: false,
      agreement: false,
    },
  }),
  components: {
    ValidationInput,
    ValidationSelect,
    ValidationDate,
    ValidationCheckbox,
    ValidationTextarea
  },
  computed: {
    ...mapState(['orderForms']),
    isValid() {
      return Object.values(this.formDataValidFlags).every(
        (field) => field === true
      );
    },
  },
  methods: {
    ...mapMutations({
      setFeedBack: 'SET_FEED_BACK',
    }),
    getOrderNumber() {
      if (!this.orderForms.length)
        return 1
      let maxCount = 0;
      for (let order of this.orderForms) {
        maxCount = order.order_id > maxCount ? order.order_id : maxCount
      }
        return maxCount + 1;
    },
    submit() {
      this.$emit('close-modal');
      this.setFeedBack({
        ...this.formData,
        order_id: this.getOrderNumber()
      });
      Object.keys(this.formData).forEach(field => {
        this.formData[field] = field === 'gender' ? 'male' : '';
      });
    },
  },
}
</script>

<style lang="scss">
.modal-overlay {
  z-index: 4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedback-form {
  z-index: 5;
  position: relative;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  align-items: flex-start;
  min-height: 450px;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  background: #e5e5e5;

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    min-width: 190px;
  }

  &-close {
    position: absolute;
    right: 10px;
    top: 12px;
    cursor: pointer
  }

  &-button {
    border: 1px solid #909090;
    border-radius: 7px;
    max-width: 200px;
    margin-top: 10px;
    cursor: pointer;
  }
}
</style>