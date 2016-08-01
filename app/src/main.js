import Vue from 'vue';
import App from './App';

// project config
Vue.config.debug = process.env.DEBUG_MODE;

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
