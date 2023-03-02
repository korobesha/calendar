import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import '@/assets/styles/main.css'
import "normalize.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
