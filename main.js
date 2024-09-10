import App from './App'
import Vue from 'vue'
import interceptor from "./http/interceptor"
import uView from "uview-ui";
import './uni.promisify.adaptor'

Vue.config.productionTip = false

Vue.use(uView);
Vue.use(interceptor);

App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()

