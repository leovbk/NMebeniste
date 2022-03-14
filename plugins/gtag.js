import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'

Vue.use(VueGtag, {
  config: { id: 'G-BHXCDCVDJM' },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
