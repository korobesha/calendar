<template>
  <div class="modal-form">
    <form 
      id="feedBack"
      name="feedBack"
      class="feedback-form"
      @submit.prevent="submit"
      @submit="$emit('close-modal')"
    > 
      <button @click=" $emit('close-modal')">X</button>
      <ValidationInput
        v-for="inputName in inputNames"
        :key="inputName"
        :inputName="inputName"
        v-model="formData[inputName]"
        @check-valid="valid => formDataValidFlags[inputName] = valid"
      />
      <div class="feedback-form-item">
        <label for="formGender" class="form-label">
          gender
        </label>
        <select name="gender" id="formGender" class="options-item" v-model="formData.gender">
          <option value="female">Female</option>
          <option value="male" selected>Male</option>
        </select>
      </div>
      <div class="feedback-form-item">
        <label for="formBirthday" class="form-label" >
          birthday
        </label>
        <input 
          id="formBirthday" 
          required 
          type="date" 
          name="birthday" 
          value=""
          min="1923-01-01" 
          max="2022-01-01" 
          :class="{ wrongDate: birthErr }"
          @input="checkBirthDate"
          class="form-input"
          v-model="formData.birthday"
        />
        <div :class="{ wrongDate: birthErr }">
          {{ birthdayError }}
        </div>
      </div>
      <div class="feedback-form-item">
        <div class="checkbox-item">
          <input 
            id="formAgree" 
            v-model="formData.agreement" 
            type="checkbox" 
            name="agreement" 
            class="checkbox-input"
            @change="formDataValidFlags.agreement = formData.agreement"
          />
          <label for="formAgree" class="form-label">
            I agree with using my personal data
          </label>
        </div>
      </div>
      <div class="feedback-form-item">
        <label for="formMessage" class="form-label">
          message
        </label>
        <textarea name="message" id="formMessage" class="form-input" v-model="formData.message"></textarea>
      </div>
      <button class="form-button" type="submit" :disabled="!isValid">
        Send
      </button>
    </form> 
  </div> 
</template>

<script>
import moment from 'moment';
import ValidationInput from '@/components/ValidationInput.vue';
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
      gender: "male",
      phone: "",
      birthday: "",
      email: "",
      agreement: false,
      message: "",
    },
    formDataValidFlags: {
      name: false, 
      surname: false ,
      phone: false,
      email: false,
      birthday: false,
      agreement: false,
    },
    birthdayError: '',
    birthErr: false,
  }),
  components: {
    ValidationInput,
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
    checkBirthDate(event) {
      if ( moment().diff(moment(event.target.value, 'YYYY-MM-DD').add(18,'years'), 'days' ) <= 1 || moment(event.target.value,'YYYY_MM_DD').isBefore('1923-01-01') || moment(event.target.value,'YYYY_MM_DD').isAfter('2023-01-01') ) {
        this.birthdayError = 'Invalid date';
        this.birthErr = true;
      } else {
        this.formDataValidFlags.birthday = moment().diff(moment(event.target.value, 'YYYY-MM-DD').add(18,'years'), 'days') > 1;
        this.birthdayError = '';
        this.birthErr = false;
      }
    },
    getOrderNumber() {
      if (!this.orderForms.length) 
      return 1
      let maxCount = 0;
        for(let order of this.orderForms) {
          maxCount = order.order_id > maxCount ? order.order_id : maxCount
        }
      return maxCount + 1;
    },
    submit() {
      this.setFeedBack({
        ...this.formData,
        order_id: this.getOrderNumber()
      });
      this.formData.name="";
      this.formData.surname="";
      this.formData.gender="male";
      this.formData.phone="";
      this.formData.birthday="";
      this.formData.email="";
      this.formData.agreement="";
      this.formData.message="";
    },
  },
}
</script>

<style lang="scss">
.modal-form {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
};
.feedback-form {
  display: flex;
  z-index: 100;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  align-items: flex-start;
  min-height: 450px;
  flex-direction: column;
  padding: 10px;
  overflow-x: auto;
  border-radius: 6px;
  background: #cecde0;

  &-item {
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px; 
    min-width: 190px;
  };
};
.options {
  min-width: 190px;

  &-item {
    min-width: 190px;
    border: 1px solid;
    min-height: 34px;

    &:focus-visible {
      outline: none;
    };
  };
};
.form-input {
  height: 32px;
  max-height: 100px;
  font-size: 16px;
  min-width: 190px;
  border-style: solid;
  border-width: 1px;
  margin: 0;
  padding: 0; 
};
.form-button {
  max-width: 200px;
  margin-top: 10px;
};
.form-label {
  text-transform: capitalize;
  align-self: flex-start;
};
input, select, option, textarea {
  border-radius: 5px;
};
.checkbox-input {
  display: flex;
  align-self: flex-start;
};
.wrongDate {
  align-self: flex-start;
  color: red;
};
.checkbox-item {
  display: flex;
};
</style>