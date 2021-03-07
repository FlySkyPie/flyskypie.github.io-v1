import Vue from 'vue';

import router from './router'
import Main from './components/Main.vue'

new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')
