
import App from './App.vue'
import Vue from 'vue';
import Vant from 'vant';
import router from "./router/index";
import {Toast} from 'vant'
import http from "../http";
import './assets/style.css'
import { Uploader } from 'vant';
import { Popup } from 'vant';
import { Dialog } from 'vant'
import { ActionSheet } from 'vant';
import 'vant/lib/index.css';

Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(Dialog)
Vue.use(ActionSheet);
Vue.use(Popup);
Vue.use(Vant);
Vue.use(Uploader);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
