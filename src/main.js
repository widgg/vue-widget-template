import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

export const account_id = '{{ACCOUNT_ID}}';

new Vue({
  render: h => h(App),
}).$mount('[widgg-name="{{WIDGET_NAME}}"][widgg-account-id="' + account_id + '"]');
