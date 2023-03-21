<template>
  <div class="main-block">
    <div class="main-block-header">
      Orders
    </div>
    <div class="main-block-content" v-if="isAnyCards" >
      <FeedbackCard
        v-for="(card, i) in orderForms"
        :key="i + 1"
        :card-info="card"
        @delete-card="deleteOrder"
      />
    </div>
    <div v-else>
      <p> No order</p>
    </div>
    <button class="main-block-button" @click="showModal=true">Add order</button>
    <div>
      <FeedbackForm v-if="showModal" @close-modal="showModal=false"/>
    </div> 
  </div>
</template>

<script>

import FeedbackForm from '@/components/FeedbackForm.vue';
import FeedbackCard from '@/components/FeedbackCard.vue';
import { mapState,mapMutations } from 'vuex';

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
    isAnyCards() {
      return !!this.orderForms.length;
    },
  },
  methods: {
    ...mapMutations({
      deleteOrder: 'DELETE_ORDER',
    }),
  },
  closeModal() {
    this.showModal = false;
  },
}
</script>

<style lang="scss">

.main-block {
  width: 100%;
  height: 100%;
  display: flex;
  background: #F1F2FC;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  &-content {
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  };

  &-header {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  };

  &-button {
    height: 30px;
    width: 150px;
  };
};
</style>