<template>
  <div class="card">
    <div class="card-owner">
      Owner: {{ cardInfo.name + ' ' + cardInfo.surname }}
    </div>
    <div class="card-content">
      <div class="card-content-item">Order No: {{ cardInfo.order_id }}</div>
      <div class="card-content-item">Gender: {{ cardInfo.gender }}</div>
      <div class="card-content-item">Birthday: {{ cardInfo.birthday }}</div>
      <div class="card-content-item">Phone: {{ cardInfo.phone }}</div>
      <div class="card-content-item">Email: {{ cardInfo.email }}</div>
      <div class="card-content-item">Message: {{ cardInfo.message }}</div>
    </div>
    <button class="card-button" @click="$emit('delete-card', cardInfo.order_id)">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'FeedBackCard',
  props: {
    cardInfo: {
      type: Object,
      required: true
    },
  },
}
</script>
<style lang="scss">
.card {
  height: auto;
  width: 200px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  background: #cecde0;
  box-shadow: -7px 7px 16px #7a7984;

  &-owner {
    margin: 2px;
    font-size: 16px;
    font-weight: 700;
  }

  &-content {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: column;

    &-item {
      margin: 2px;
      font-size: 12px;
    }
  }

  &-button {
    font-size: 12px;
    height: 16px;
    width: 100px;
    border-radius: 6px;
    border: 1px solid;
    background-color: #ffffff;
    cursor: pointer;
  }
}
</style>