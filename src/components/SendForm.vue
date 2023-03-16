<template>
  <div class="send-form">
    <form 
    action="#"
    id="form"
    class="send-form-body"
    method="post"
    >
      <div class="send-form-item">
        <label for="formName" class="form-label">
          UR Name
        </label>
        <input 
          id="formName"  
          pattern="^[А-Я]\D*" 
          title="Введите с заглавной буквы без цифр" 
          required 
          type="text" 
          name="name" 
          class="form-input"
          v-model="name"
        >
      </div>
      <div class="send-form-item">
        <label for="formSurname" class="form-label">
          UR Surname
        </label>
        <input 
          id="formSurname" 
          pattern="^[А-Я]\D*" 
          title="Введите с заглавной буквы без цифр" 
          required 
          type="text" 
          name="surname" 
          class="form-input"
          v-model="surname"
        >
      </div>
      <div class="send-form-item">
        <label for="formSex" class="form-label">
          UR Sex
        </label>
        <div class="options">
          <input id="formFemale" type="radio" value="F" name="sex" class="options-input" v-model="sex">
          <label for="formFemale" class="options-label">F</label>
        </div>
        <div class="options">
          <input id="formMale" type="radio" value="M" name="sex" class="options-input" v-model="sex">
          <label for="formMale" class="options-label">M</label>
        </div>
      </div>
      <div class="send-form-item">
        <label for="formBirthday" class="form-label">
          UR Birthday
        </label>
        <input 
          id="formBirthday" 
          required 
          type="date" 
          name="birthday" 
          value=""
          min="1923-01-01" 
          max="2022-01-01" 
          class="form-input"
          v-model="birthday"
        >
      </div>
      <div class="send-form-item">
        <label for="formEmail" class="form-label">
          UR E-mail
        </label>
        <input 
          id="formEmail"  
          pattern="*[@]*"
          title="Введите электронную почту" 
          required 
          type="text" 
          name="email" 
          class="form-input"
          v-model="email"
        >
      </div>
      <div class="send-form-item">
        <label for="formPhone" class="form-label">
          UR Ph Number
        </label>
        <input 
          id="formPhone" 
          pattern="^[+][\d*]{11}" 
          title="Введите номер телефона в формате +79990123456" 
          required 
          type="text" 
          name="phone" 
          class="form-input"
          v-model="phone"
        >
      </div>
      <div class="send-form-item">
        <div class="checkbox">
          <label for="formAgree" class="checkbox-label">
            Я даю свое согласие на использование персональных данных
          </label>
          <input 
            id="formAgree" 
            type="checkbox" 
            required 
            name="agreement" 
            class="checkbox-input"
            v-model="agreement"
          >
        </div>
      </div>
      <div class="send-form-item">
        <label for="formMessage" class="form-label">
          UR Comment
        </label>
        <textarea name="message" id="formMessage" class="form-input" v-model="message"></textarea>
      </div>
      <button class="form-button" type="submit">
        Send
      </button>
    </form>  
  </div>
</template>

<script>
export default {
  name: 'SendForm',
  data: () => ({
    name: null, 
    surname: null,
    sex: null,
    зhone: null,
    birthday: null,
    email: null,
    agreement: null,
    message: null,
  }),
}
</script>

<style lang="scss">
.send-form {
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  &-body {
    padding: 10px;
    border-radius: 6px;
    background: #cecde0;
    box-shadow:  -7px 7px 16px #7a7984,
             7px -7px 16px #ffffff;
  };

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px; 
  };
};
.options-item {
  display: flex;
  gap: 10px;
}
.form-input {
  max-height: 100px;
}
</style>