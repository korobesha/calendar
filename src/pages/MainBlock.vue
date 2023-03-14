<template>
  <div class="main-block">
    <SendForm />
  </div>
</template>

<script>

import SendForm from '@/components/SendForm.vue';


export default {
  name: 'MainBlock',
  components: {
    SendForm,
  },  
}
</script>

<style>
.main-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>