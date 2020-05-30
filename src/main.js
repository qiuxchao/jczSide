import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 使用 element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')





