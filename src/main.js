// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import oauth2 from "./lib/oauth2"

Vue.config.productionTip = false

oauth2(init);

function init() {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
  })
}
