<template>
  <div class="main-block">
    <div class="main-block-header">
      <SideMenu />
    </div>
    <div class="main-block-content">
      <SendForm />
    </div> 
  </div>
</template>

<script>

import SendForm from '@/components/SendForm.vue';
import SideMenu from '@/components/SideMenu.vue';


export default {
  name: 'MainBlock',
  components: {
    SendForm,
    SideMenu,
  },  
}
</script>

<style lang="scss">
html {
  height:100%;
  width: 100%;
};
body {
  height:100%;
  width: 100%;
};
.main-block {
  width: 100%;
  height: 100%;
  display: block;
  background: #F1F2FC;

  &-header {
    display: flex;
  };
  &-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  };
};
</style>