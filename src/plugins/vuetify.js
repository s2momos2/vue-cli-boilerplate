import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import ko from 'vuetify/es5/locale/ko'
import en from 'vuetify/es5/locale/en'

Vue.use(Vuetify);

//true로 설정하면 모든 Vuetify 로그 및 경고를 표시하지 않습니다.
//Vuetify.config.silent = true;

export default new Vuetify({
    lang: {
        current: 'ko',
        locales: { ko, en },
    },
    icons: { 
        iconfont: 'fa',
        values: {},
    },
    rtl: false,
    theme: {
      dark: false,
      default: 'light',
      disable: false,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        dark: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF4081',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    }
});
