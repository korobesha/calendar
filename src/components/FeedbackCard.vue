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
    <button class="card-button" @click= "$emit('delete-card', cardInfo.order_id)">
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
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  background: #cecde0;
  box-shadow:  -7px 7px 16px #7a7984;

  &-content-item {
    margin: 2px;
  };

  &-content-button {
    height: 20px;
    width: 70px;
    margin: 2px;
  };
};
</style>