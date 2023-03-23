<template>
  <div class="main-block">
    <div class='main-block-modal'>
      <FeedbackForm v-if="showModal" @close-modal="showModal = false" />
    </div>
    <div class="main-block-header">
      Orders
    </div>
    <div class="main-block-content" v-if="orderForms.length">
      <FeedbackCard v-for="(card, i) in orderForms" :key="i + 1" :card-info="card" @delete-card="deleteOrder" />
    </div>
    <p v-else> No order</p>
    <button class="main-block-button" @click="showModal = true">Add order</button>
  </div>
</template>

<script>

import FeedbackForm from '@/components/feedback/FeedbackForm.vue';
import FeedbackCard from '@/components/feedback/FeedbackCard.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MainBlock',
  data: () => ({
    showModal: false,
  }),
  components: {
    FeedbackForm,
    FeedbackCard,
  },
  computed: {
    ...mapState(['orderForms']),

  },
  methods: {
    ...mapMutations({
      deleteOrder: 'DELETE_ORDER',
    }),
  },
}
</script>

<style lang="scss">
.main-block {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  background: #F1F2FC;
  font-size: 16px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  &-modal {
    position: absolute;
    top: 30px;
  }

  &-content {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &-header {
    font-size: 20px;
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &-button {
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid;
    background-color: #fff;
    height: 30px;
    width: 150px;
    align-self: center;
    justify-self: center;
    cursor: pointer;
  }
}
</style>