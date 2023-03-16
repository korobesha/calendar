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

export default {
  name: 'MainBlock',
  components: {
    PageLoader,
  },  
  data: () => ({
    isLoading: true,
    title: '',
  }),
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json =>
        setTimeout(() => {
          this.title=json.title;
          console.log(json.title);
          this.isLoading = false;
        }, 1000) 
      )
  }
}
</script>

<style></style>