import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant";
import 'vant/lib/index.css'
import 'animate.css'
import { Dialog } from 'vant';
import { CouponCell, CouponList } from 'vant';
import {Popup} from 'vant'
// swiper插件
import "swiper/css/swiper.min.css";
import axios from "axios"
Vue.prototype.$axios=axios
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);

// 全局注册
Vue.use(Dialog);

Vue.use(Vant);

Vue.config.productionTip = false

Vue.filter("dateformat", function (dataString) {
  var dd = new Date(dataString);

  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;
  var d = dd.getDate();

  var hh = dd.getHours();
  var mm = dd.getMinutes();
  var ss = dd.getSeconds();

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
