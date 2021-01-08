import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";

import 'vuetify/dist/vuetify.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // components: {App},
  vuetify: new Vuetify(),
}).$mount('#app')
