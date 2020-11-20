import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/plugins/i18n';
import vuetify from '@/plugins/vuetify';
import '@/plugins/axios'

//false로 설정하면 배포에 대한 팁을 출력하지 않습니다.
Vue.config.productionTip = false 

new Vue({
  store,
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
