<template>
  <div class="main-block">
    <PageLoader v-if="isLoading"/>
      <template v-else>
        {{ title }}
      </template>
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue';
import { mapState,mapMutations } from 'vuex';

export default {
  name: 'MainBlock',
  components: {
    PageLoader,
  },  
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapState (['title',])
  },
  methods: {
    ...mapMutations({
      setCurrentTitle: 'SET_CURRENT_TITLE',
    }),
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
        setTimeout(() => { 
          this.setCurrentTitle(json.title+' Победа');
          this.isLoading = false;
        }, 1000) 
      )
  }
}
</script>

<style></style>