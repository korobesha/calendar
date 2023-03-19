<template>
  <div class="send-form">
    <form 
      id="form"
      class="send-form-body"
      @submit.prevent="submit"
    >
      <ValidationInput
        v-for="inputName in inputNames"
        :key="inputName"
        :inputName="inputName"
        v-model="formData[inputName]"
        @check-valid="valid => formDataValidFlags[inputName] = valid"
      />
      <div class="send-form-item">
        <label for="formSex" class="form-label">
          Sex
        </label>
        <select name="sex" id="formSex" class="options-item" v-model="formData.sex" @focusout="checkSexError">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {{ sexError }}
      </div>
      <div class="send-form-item">
        <label for="formBirthday" class="form-label" >
          Birthday
        </label>
        <input 
          id="formBirthday" 
          required 
          type="date" 
          name="birthday" 
          value=""
          min="1923-01-01" 
          max="2022-01-01" 
          @input="checkBirthDate"
          class="form-input"
          v-model="formData.birthday"
        />
        {{ birthdayError }}
      </div>
      <div class="send-form-item">
        <div class="checkbox">
          <input 
            id="formAgree" 
            v-model="formData.agreement" 
            type="checkbox" 
            name="agreement" 
            class="checkbox-input"
            @change="formDataValidFlags.agreement = formData.agreement"
          />
          <label for="formAgree" class="checkbox-label">
            Я даю свое согласие на использование персональных данных
          </label>
        </div>
      </div>
      <div class="send-form-item">
        <label for="formMessage" class="form-label">
          Message
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

export default {
  name: 'SendForm',
  data: () => ({
    inputNames: [
      'name', 'surname', 'phone', 'email'
    ],
    formData: {
      name: "", 
      surname: "",
      sex: "male",
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
    sexError: '',
  }),
  components: {
    ValidationInput,
  },
  computed: {
    isValid() {
      return Object.values(this.formDataValidFlags).every(
        (field) => field === true
      );
    },
  },
  methods: {
    checkBirthDate(event) {
      if ( moment().diff(moment(event.target.value, 'YYYY-MM-DD').add(18,'years'), 'days') <= 1 ) {
        this.birthdayError = 'Неверная дата'
      } 
      else {
          this.birthdayError = '';
          this.formDataValidFlags.birthday = moment().diff(moment(event.target.value, 'YYYY-MM-DD').add(18,'years'), 'days') > 1;
      }
    },
    submit(e) {
      console.log(this.formData);
      e.target.reset();
    },
    checkSexError() {
      if (!this.formData.sex) {
        this.sexError = 'Выберите свой пол'
      } else {
        this.sexError = ''
      }
    }
  },
}
</script>

<style lang="scss">
.send-form {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  

  &-body {
    display: flex;
    align-items: flex-start;
    min-height: 450px;
    flex-direction:column;
    padding: 10px;
    border-radius: 6px;
    background: #cecde0;
    box-shadow:  -7px 7px 16px #7a7984,
                  7px -7px 16px #ffffff;
  };

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
label {
  align-self: flex-start;
}
input, select, option, textarea {
  border-radius: 5px;
}
</style>